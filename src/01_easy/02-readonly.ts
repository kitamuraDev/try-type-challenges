/* _____________ Your Code Here _____________ */

/**
 * Mapped type に readonly を付与するだけ
 */
type MyReadonly<T> = { readonly [K in keyof T]: T[K] };

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}
