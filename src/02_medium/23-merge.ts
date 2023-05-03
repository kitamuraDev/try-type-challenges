/* _____________ Your Code Here _____________ */

/**
 * 1. F と S のプロパティをユニオン型で複合し、P にまとめる
 * 2. P が `keyof S` のサブタイプであれば、`S[P]` を返し、そうでない場合は、`F[P]`を返す
 *  - `P extends keyof S` の条件を最初に検証しているのは、`Bar.b`を優先してマージするため
 */
type Merge<F, S> = {
  [P in keyof F | keyof S]: P extends keyof S
    ? S[P]
    : P extends keyof F
    ? F[P]
    : never;
};

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

// prettier-ignore
type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
]
