/* _____________ Your Code Here _____________ */

/**
 * T型がneverであればtrueを返すというもの
 * never判定を行う場合は、`[T] extends [never]`と記述する
 */
type IsNever<T> = [T] extends [never] ? true : false;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<"">, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>
];
