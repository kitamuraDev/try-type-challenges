/* _____________ Your Code Here _____________ */

/**
 * 14 - replace の応用
 * 単に、LとR に対して再帰処理をかけるだけ
 *  - 丁寧かつ、再帰を意図した書き方にするなら LとR 両方に対して再帰処理をかけるべき
 */

// prettier-ignore
type ReplaceAll< S extends string, From extends string, To extends string >
  = From extends "" ? S
  : S extends `${infer L}${From}${infer R}` ? `${L}${To}${ReplaceAll<R, From, To>}`
  : S;

// R に対してのみ再帰処理をかけても結果は同じ
// type ReplaceAll<S extends string, From extends string, To extends string>
//   = From extends '' ? S
//   : S extends `${infer L}${From}${infer R}` ? `${L}${To}${ReplaceAll<R, From, To>}`
//   : S;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<ReplaceAll<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<ReplaceAll<"foobar", "bag", "foo">, "foobar">>,
  Expect<Equal<ReplaceAll<"foobarbar", "bar", "foo">, "foofoofoo">>,
  Expect<Equal<ReplaceAll<"t y p e s", " ", "">, "types">>,
  Expect<Equal<ReplaceAll<"foobarbar", "", "foo">, "foobarbar">>,
  Expect<Equal<ReplaceAll<"barfoo", "bar", "foo">, "foofoo">>,
  Expect<Equal<ReplaceAll<"foobarfoobar", "ob", "b">, "fobarfobar">>,
  Expect<Equal<ReplaceAll<"foboorfoboar", "bo", "b">, "foborfobar">>,
  Expect<Equal<ReplaceAll<"", "", "">, "">>
];
