/* _____________ Your Code Here _____________ */

/**
 * タプル型をユニオン型に変換する場合は、シンプルにindexアクセスを行う
 */
type TupleToUnion<T extends unknown[]> = T[number];

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];
