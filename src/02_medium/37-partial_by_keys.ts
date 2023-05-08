/* _____________ Your Code Here _____________ */

/**
 * 1. P型が、Kのサブタイプであれば、P 以外のプロパティを除外する
 * 2. 1の逆を行い、マージする
 * 3. マージ（&）されたオブジェクトをフラットにする（FlatToObj<T>）
 */
type FlatToObj<T> = {
  [P in keyof T]: T[P];
};
type PartialByKeys<T, K = keyof T> = FlatToObj<
  {
    [P in keyof T as P extends K ? P : never]?: T[P];
  } & {
    [P in keyof T as P extends K ? never : P]: T[P];
  }
>;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

type cases = [
  Expect<Equal<PartialByKeys<User, "name">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "unknown">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "age">, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>
];
