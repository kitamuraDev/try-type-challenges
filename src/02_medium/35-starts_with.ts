/* _____________ Your Code Here _____________ */

/**
 * 1. 初めに U型が 空文字の場合は false を返すようにする
 * 2. T extends `${infer _}${U}${infer _}` で、T型からU型をマッチングさせる（infer で推論した型は使わないため、`_`でいい）
 * 3. U型がマッチすれば true しなければ falseを返す
 */
// prettier-ignore
// type StartsWith<T extends string, U extends string> = U extends " " ? false
//   : T extends `${infer _}${U}${infer _}`
//   ? true
//   : false;

// 別解（シンプル）
type StartsWith<T extends string, U extends string> =
  T extends `${U}${string}`? true : false;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<StartsWith<"abc", "ac">, false>>,
  Expect<Equal<StartsWith<"abc", "ab">, true>>,
  Expect<Equal<StartsWith<"abc", "abcd">, false>>,
  Expect<Equal<StartsWith<"abc", "">, true>>,
  Expect<Equal<StartsWith<"abc", " ">, false>>
];
