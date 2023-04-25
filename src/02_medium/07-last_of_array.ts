/* _____________ Your Code Here _____________ */

/**
 * シンプルに `infer` で`その他`と`Last`で分けて Last を返す
 */
type Last<T extends unknown[]> = T extends [...infer Rest, infer Last]
  ? Last
  : never;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
];
