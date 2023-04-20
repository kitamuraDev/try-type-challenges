/* _____________ Your Code Here _____________ */

/**
 * タプル型及び、配列では `keyof` 演算子が使えないため、代わりに `T[number]` で添字アクセスを行う
 */
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [K in T[number]]: K;
};

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type cases = [
  // prettier-ignore
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;
