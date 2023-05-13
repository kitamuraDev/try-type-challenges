/* _____________ Your Code Here _____________ */

/**
 * タプル型の先頭を取り除きたいので、`infer`で、先頭とそれ以外で分ける
 *  あとは、条件分岐で Restを返すだけ
 */
type Shift<T extends (string | number)[]> = T extends [infer _, ...infer Rest]
  ? Rest
  : never;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<["a", "b", "c", "d"]>, ["b", "c", "d"]>>
];
