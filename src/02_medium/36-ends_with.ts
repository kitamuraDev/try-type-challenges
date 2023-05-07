/* _____________ Your Code Here _____________ */

// starts with とほぼ同じ
type EndsWith<T extends string, U extends string> = T extends `${string}${U}`
  ? true
  : false;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<EndsWith<"abc", "bc">, true>>,
  Expect<Equal<EndsWith<"abc", "abc">, true>>,
  Expect<Equal<EndsWith<"abc", "d">, false>>
];
