/* _____________ Your Code Here _____________ */

/**
 * never判定で、 `[T] extends [never] ? []` という書き方をする理由
 * > 型引数に渡された never は条件分岐の際、無視されるので機能しません。
 * > そのため評価される前にタプル型にして、条件分岐できるようにしています。
 *
 * 参考
 * https://qiita.com/riku0202/items/2867d412effab9042848
 */
type Permutation<T, U = T> = [T] extends [never]
  ? []
  : U extends U
  ? [U, ...Permutation<Exclude<T, U>>]
  : never;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

// prettier-ignore
type cases = [
  Expect<Equal<Permutation<'A'>, ['A']>>,
  Expect<Equal<Permutation<'A' | 'B' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
  Expect<Equal<Permutation<'B' | 'A' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
  Expect<Equal<Permutation<never>, []>>,
]
