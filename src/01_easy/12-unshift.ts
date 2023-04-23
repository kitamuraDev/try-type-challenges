/* _____________ Your Code Here _____________ */

/**
 * 11 の push と同じ要領（11を参考）
 */
type Unshift<T extends readonly unknown[], U> = [U, ...T];

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<["1", 2, "3"], boolean>, [boolean, "1", 2, "3"]>>
];
