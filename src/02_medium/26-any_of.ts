/* _____________ Your Code Here _____________ */

/**
 * 1. `T[number]` で配列の要素を取り出し、それぞれが falsy かどうか判定する
 * 2. 要素すべてが falsy の場合、false を返しそうでない場合は true を返す
 */
type Falsy = "" | 0 | [] | false | undefined | null | { [K: string]: never };
type AnyOf<T extends readonly unknown[]> = T[number] extends Falsy
  ? false
  : true;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>, // prettier-ignore
  Expect<Equal<AnyOf<[1, "", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "test", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { name: "test" }]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { 1: "test" }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>, // prettier-ignore
  Expect<Equal<AnyOf<[0, "", false, [], {}]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>
];
