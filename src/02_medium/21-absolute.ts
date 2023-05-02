/* _____________ Your Code Here _____________ */

/**
 * 1. 型引数の number を string に変換する（`${T}`）以下のテストケースがパスする
 *  - 10 -> "10"
 *  - 1_000_000n
 * 2. 残りは `-` を取り除く。文字列を先頭とそれ以外で分けて、F が `-` かどうか判定して条件分岐を行うだけ
 */
// prettier-ignore
type Absolute<T extends number | string | bigint> = `${T}` extends `${infer F}${infer Rest}`
    ? F extends "-"
      ? Rest
      : `${T}`
    : never;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<Absolute<0>, "0">>,
  Expect<Equal<Absolute<-0>, "0">>,
  Expect<Equal<Absolute<10>, "10">>,
  Expect<Equal<Absolute<-5>, "5">>,
  Expect<Equal<Absolute<"0">, "0">>,
  Expect<Equal<Absolute<"-0">, "0">>,
  Expect<Equal<Absolute<"10">, "10">>,
  Expect<Equal<Absolute<"-5">, "5">>,
  Expect<Equal<Absolute<-1_000_000n>, "1000000">>,
  Expect<Equal<Absolute<9_999n>, "9999">>
];
