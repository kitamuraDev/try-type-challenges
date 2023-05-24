/* _____________ Your Code Here _____________ */

/**
 * 1. タプル型を先頭とそれ以外に分ける
 * 2. F が後ろに来るように新しい配列を作成する（Reverse、つまり R は ... で展開する）
 * 3. T が空の配列であれば、Tを返す
 */
type Reverse<T extends readonly unknown[]> = T extends [infer F, ...infer R]
  ? [...Reverse<R>, F]
  : T;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<["a", "b"]>, ["b", "a"]>>,
  Expect<Equal<Reverse<["a", "b", "c"]>, ["c", "b", "a"]>>
];
