/* _____________ Your Code Here _____________ */

/**
 * 1. 既存の引数を `...args`（スプレッド構文）で表現し、`infer Args`で型を推論する
 * 2. `[...Args, A]` で Args を展開し、A を付け足す
 * 3. 戻り値も infer で推論した結果を返すことを忘れずに
 */
type AppendArgument<Fn, A> = Fn extends (...args: infer Args) => infer R
  ? (...args: [...Args, A]) => R
  : never;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>;
type Result1 = (a: number, b: string, x: boolean) => number;

type Case2 = AppendArgument<() => void, undefined>;
type Result2 = (x: undefined) => void;

// prettier-ignore
type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
]
