/* _____________ Your Code Here _____________ */

/**
 * シンプルにスプレッド演算子で既存の配列を展開して、新規の配列を作成する
 */
type Push<T extends readonly unknown[], U> = [...T, U];

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], "3">, [1, 2, "3"]>>,
  Expect<Equal<Push<["1", 2, "3"], boolean>, ["1", 2, "3", boolean]>>
];
