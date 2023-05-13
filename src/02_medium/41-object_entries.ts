/* _____________ Your Code Here _____________ */

/**
 * 1. T には T[P]（value）が入ってくる（nameなら、`string | undefined`）
 * 2. `[T] extends [undefined]` 配列要素Tの undefined 判定を行う
 *  T型が undefined 単体であれば、T型を返し、そうでなければ ExcludeにT型を渡して undefined を取り除く
 *
 * `[T] extends [undefined]` [] で囲んで配列型に変換する理由
 * > 型の比較において、同じ型であってもリテラル型やユニオン型として定義されている場合、厳密には型の一致とはみなさないから
 * > つまり、[T] extends [undefined] という式は、T型を1つの要素と持つ配列型に変換して、配列の要素が undefined 型であるかどうかを比較している
 */
type OmitUndefined<T> = [T] extends [undefined] ? T : Exclude<T, undefined>;

/**
 * {
 *  name: ["name", string];
 *  age: ["age", number];
 *  locations: ["locations", string[] | null];
 * }
 *
 * ↑↑
 * [keyof T] で value をユニオン型で組める
 */
type ObjectEntries<T> = {
  [P in keyof T]-?: [P, OmitUndefined<T[P]>];
}[keyof T];

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

// prettier-ignore
type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ["key", undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ["key", undefined]>>
];
