/* _____________ Your Code Here _____________ */

/**
 * シンプルな三項演算子
 * infer を使って、関数の引数の型を推論し、条件が true であれば、infer で推論した U を返す
 */
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer U
) => any
  ? U
  : never;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: "A" }): void => {};
const baz = (): void => {};

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: "A" }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>
];
