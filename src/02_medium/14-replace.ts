/* _____________ Your Code Here _____________ */

/**
 * 1. From をマッチングさせる（`Template Literal Types`で表現できる）
 *  `${infer L}${Target}${infer R}` と書くことでパターンマッチングを実現できる
 * 2. From が空文字の場合の例外ハンドリングを忘れずに行う
 */

// prettier-ignore
type Replace< S extends string, From extends string, To extends string>
  = From extends "" ? S
  : S extends `${infer L}${From}${infer R}` ? `${L}${To}${R}`
  : S;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<Replace<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<Replace<"foobarbar", "bar", "foo">, "foofoobar">>,
  Expect<Equal<Replace<"foobarbar", "", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"foobarbar", "bar", "">, "foobar">>,
  Expect<Equal<Replace<"foobarbar", "bra", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"", "", "">, "">>
];
