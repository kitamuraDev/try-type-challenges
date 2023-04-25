/* _____________ Your Code Here _____________ */

/**
 * `infer` で分けて配列の最後の要素以外を返す
 */
type Pop<T extends unknown[]> = T extends [...infer Rest, unknown]
  ? Rest
  : never;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>
];
