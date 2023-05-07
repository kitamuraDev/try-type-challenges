/* _____________ Your Code Here _____________ */

/**
 * 1. replace の応用
 * 2. `${infer F}${C}${infer R}` で文字列をマッチングさせて S の中の C を削る
 * 3. それを再帰させる
 */
// prettier-ignore
type DropChar<S extends string, C extends string> = S extends `${infer F}${C}${infer R}`
  ? `${DropChar<F, C>}${DropChar<R, C>}`
  : S;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  // @ts-expect-error
  Expect<Equal<DropChar<"butter fly!", "">, "butterfly!">>,
  Expect<Equal<DropChar<"butter fly!", " ">, "butterfly!">>,
  Expect<Equal<DropChar<"butter fly!", "!">, "butter fly">>,
  Expect<Equal<DropChar<"    butter fly!        ", " ">, "butterfly!">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", " ">, "butterfly!">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", "b">, "  u t t e r f l y ! ">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", "t">, " b u   e r f l y ! ">>
];
