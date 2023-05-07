/* _____________ Your Code Here _____________ */

/**
 * 1. `${CheckPrefix<infer F>}${infer R}` で F（先頭） と R（それ以外） で分ける
 * 2. `CheckPrefix` は、T型が `"+" | "-"` 以外の場合は、neverを返し、`${CheckPrefix<infer F>}${infer R}` の結果は false になる
 * 3. `CheckSuffix` は、T型が `xxx%` の形式か判定している。true なら、`%`を省いた U型を返す。false なら、T型をそのまま先頭に置いた配列を返す（`[T, ""]`）
 */
type CheckPrefix<T> = T extends "+" | "-" ? T : never;
type CheckSuffix<T> = T extends `${infer U}%` ? [U, "%"] : [T, ""];
// prettier-ignore
type PercentageParser<A extends string> = A extends `${CheckPrefix<infer F>}${infer R}`
  ? [F, ...CheckSuffix<R>]
  : ["", ...CheckSuffix<A>]

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type Case0 = ["", "", ""];
type Case1 = ["+", "", ""];
type Case2 = ["+", "1", ""];
type Case3 = ["+", "100", ""];
type Case4 = ["+", "100", "%"];
type Case5 = ["", "100", "%"];
type Case6 = ["-", "100", "%"];
type Case7 = ["-", "100", ""];
type Case8 = ["-", "1", ""];
type Case9 = ["", "", "%"];
type Case10 = ["", "1", ""];
type Case11 = ["", "100", ""];

type cases = [
  Expect<Equal<PercentageParser<"">, Case0>>,
  Expect<Equal<PercentageParser<"+">, Case1>>,
  Expect<Equal<PercentageParser<"+1">, Case2>>,
  Expect<Equal<PercentageParser<"+100">, Case3>>,
  Expect<Equal<PercentageParser<"+100%">, Case4>>,
  Expect<Equal<PercentageParser<"100%">, Case5>>,
  Expect<Equal<PercentageParser<"-100%">, Case6>>,
  Expect<Equal<PercentageParser<"-100">, Case7>>,
  Expect<Equal<PercentageParser<"-1">, Case8>>,
  Expect<Equal<PercentageParser<"%">, Case9>>,
  Expect<Equal<PercentageParser<"1">, Case10>>,
  Expect<Equal<PercentageParser<"100">, Case11>>
];
