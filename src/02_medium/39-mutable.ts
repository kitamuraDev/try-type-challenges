/* _____________ Your Code Here _____________ */

/**
 * readonly に `-` を付けてあげるだけ
 */
type Mutable<
  T extends Record<string, unknown> | readonly (number | string | symbol)[]
> = {
  -readonly [P in keyof T]: T[P];
};

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type List = [1, 2, 3];

type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
  Expect<Equal<Mutable<Readonly<List>>, List>>
];

type errors = [
  // @ts-expect-error
  Mutable<"string">,
  // @ts-expect-error
  Mutable<0>
];
