/* _____________ Your Code Here _____________ */

/**
 * まず、stirng型に対して、S['length']では、number型が返るため文字数は取得できない
 * しかし、配列型やタプル型に対して、`A['length']`を行うと要素数が返る。この仕様を利用して型を組み立てる
 *
 * 1. 条件分岐には、お馴染みの `${infer F}${infer Rest}` で文字の`頭`と`それ以降`で分ける
 * 2. あとは、LengthOfString を再帰させればいいだけ
 * 3. 条件がfalse（文字の最後に到達したとき）であれば、 `T['length']` で要素数を返せばいい
 */
// prettier-ignore
type LengthOfString< S extends string, T extends readonly unknown[] = [] > = S extends `${infer F}${infer Rest}`
  ? LengthOfString<Rest, [...T, F]>
  : T["length"];

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"kumiko">, 6>>,
  Expect<Equal<LengthOfString<"reina">, 5>>,
  Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>
];
