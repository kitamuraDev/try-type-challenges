/* _____________ Your Code Here _____________ */

/**
 * 1. ユニオン型を作成する簡単な方法は、タプル型に対して `T[number]`（インデックスアクセス）を行うこと
 * 2. 型引数には、タプル型を保持するために `T extends readonly unknown[] = []` を記述する
 * 3. あとは、S を先頭とそれ以外で分けて再帰的に StringToUnion に突っ込んで、Sが空文字になったら `T[number]` でタプル型 to ユニオン型 に変換する
 */
// prettier-ignore
type StringToUnion<S extends string, T extends readonly unknown[] = []> =
  S extends `${infer F}${infer Rest}`
  ? StringToUnion<Rest, [...T, F]>
  : T[number];

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

// prettier-ignore
type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<Equal<StringToUnion<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>>,
]
