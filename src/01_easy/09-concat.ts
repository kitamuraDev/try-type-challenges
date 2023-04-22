/* _____________ Your Code Here _____________ */

/**
 * シンプルにスプレッド演算子（`...`）を使う
 */
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  // prettier-ignore
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>
];
