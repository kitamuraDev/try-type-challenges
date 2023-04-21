/* _____________ Your Code Here _____________ */

/**
 * 以下引用
 * https://zenn.dev/azukiazusa/scraps/7f3396b6e6cfab
 *
 * Conditional Types が分配法則(Distributive) に従うという点です。
 * Conditional Types の条件部において T extends U の T が ユニオン型である場合 T に対して反復処理を行い各要素に条件を適用します。
 * そのため、回答例としては T の各要素を反復し T が U を拡張可能（サブタイプ）であれば never を返しそうでないなら T を返すようにすればよいです。
 */
type MyExclude<T, U> = T extends U ? never : T;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

// prettier-ignore
type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, Exclude<'a' | 'b' | 'c', 'a'>>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, Exclude<'a' | 'b' | 'c', 'a' | 'b'>>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, Exclude<string | number | (() => void), Function>>>,
]
