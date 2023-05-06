/* _____________ Your Code Here _____________ */

/**
 * 解き方：2つのオブジェクトをマージして、共通するプロパティを除外した新しいオブジェクトを生成する
 *
 * - オブジェクト同士をマージするやり方は、交差型（&）で実現できる
 *  - 例：type Hoge = Foo & Bar -> { name: string, age: string, gender: number } となる
 * - 共通するプロパティを生成するやり方は、共用型（|）で実現できる
 *  - 例：type Piyo = keyof (Foo | Bar) -> { name: string, age: string } となる
 *
 * 1. T1 と T2 をマージして keyof でキーを抽出した結果を P へ格納 -> [P in keyof (T1 & T2)]
 * 2. P から T1とT2 の共通するプロパティを除外する -> [as P extends keyof (T1 | T2) ? never : P]
 */
type Diff<T1, T2> = {
  [P in keyof (T1 & T2) as P extends keyof (T1 | T2) ? never : P]: (T1 & T2)[P];
};

// (T1 & T2) でマージした結果を別の型に保持するやり方（分かり易くするならこっち）
// type Diff<T1, T2, T3 = T1 & T2> = {
//   [P in keyof T3 as P extends keyof (T1 | T2) ? never : P]: T3[P];
// };

// 上記の型定義の大部分は `Omit` なので、シンプルに `Omit` で置き換える
// type Diff<T1, T2> = Omit<T1 & T2, keyof (T1 | T2)>;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>
];
