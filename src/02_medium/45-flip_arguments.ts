/* _____________ Your Code Here _____________ */

/**
 * 1. `(...args: infer Args)` で引数を infer で抽出する
 * 2. Args がタプル型か判定する
 * 3. タプル型であれば、中の要素が無くなるまで回し、 要素の順序を逆転させた結果を保持させる（`[...U, L]`）
 * 4. タプル型でなければ、順序を逆転させた結果の U型を引数にセットした関数型を返す
 */
// prettier-ignore
type FlipArguments<T, U extends readonly unknown[] = []> = T extends (...args: infer Args) => infer R
  ? Args extends [...infer F, infer L]
    ? FlipArguments<(...args: F) => R, [...U, L]>
    : (...args: U) => R
  : never;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<
    Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>
  >,
  Expect<
    Equal<
      FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>,
      (arg0: boolean, arg1: number, arg2: string) => void
    >
  >
];
