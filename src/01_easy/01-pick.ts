/* _____________ Your Code Here _____________ */

/**
 * 1. K を T の key 型に制限する
 * 2. [P in K] で K を回す
 * 3. T[P] は P を使って T に添字アクセスを行う
 */
type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}
