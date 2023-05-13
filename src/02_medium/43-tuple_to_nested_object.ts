/* _____________ Your Code Here _____________ */

/**
 * 1. タプル型Tの中身を順番に取り出す
 * 2. 取り出した中身 F が string であるかを確認する
 * 3. F が string であれば、オブジェクトを再帰的に作成する。その際、F をキーとして再帰呼び出しした結果を値としてセットする
 * 4. F が string でなければ、その値を無視する
 * 5. タプル型Tから取り出した中身Fが無くなったら、U型 を返す
 */
// prettier-ignore
type TupleToNestedObject<T extends readonly unknown[], U> = T extends [ infer F, ...infer R ]
  ? F extends string
    ? { [P in F]: TupleToNestedObject<R, U> }
    : never
  : U;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<TupleToNestedObject<["a"], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<["a", "b"], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject<["a", "b", "c"], boolean>, { a: { b: { c: boolean } } }>>, // prettier-ignore
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>
];
