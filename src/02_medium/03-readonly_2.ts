/* _____________ Your Code Here _____________ */

/**
 * 基本方針
 *
 * 1. 第二型引数を指定されないことを考慮して、第二型引数は仮引数を設定する
 * 2. `readonly` を付与するパートと、しないパートで分ける
 * 3. `readonly` を付与しないパートでは P型からKを除外（Omit）すればいいだけ
 */

// 自作Omit
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P];
} & { [P in keyof T as P extends K ? never : P]: T[P] };

// Utility types `Omit` を使用
// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [P in K]: T[P];
// } & Omit<T, K>;

// Utility types `Exclude` を使用
// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [P in K]: T[P];
// } & { [P in Exclude<keyof T, K>]: T[P] };

/* _____________ Test Cases _____________ */

import type { Alike, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "title" | "description">, Expected>>
];

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}
