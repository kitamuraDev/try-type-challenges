/* _____________ Your Code Here _____________ */

/**
 * conditional types の分配法則を利用する
 * `T extends T ? [Exclude<U, T>] extends [never]` では、T の中から一つずつ取り出して Exclude<U, T> に代入している
 * 例：<string | number> の場合、Exclude<string | number, string> となり、`[number] extends [never]` となる
 * つまり、`ユニオン型`であるかを判定すると同時に、`ユニオン型の中にnever`があるかどうかも判定しているスマートな書き方であると言える
 */
type IsUnion<T, U = T> = T extends T
  ? [Exclude<U, T>] extends [never]
    ? false
    : true
  : never;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<"a" | "b" | "c" | "d">, true>>,
  Expect<Equal<IsUnion<undefined | null | void | "">, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | "a">, false>>
];
