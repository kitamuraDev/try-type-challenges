/* _____________ Your Code Here _____________ */

/**
 * 解き方：
 *
 * プロパティのキーが 文字列リテラルかどうか判定
 *  trueであれば、そのキーを返して、falseであればneverを返してそのキーを削除する
 */
type RemoveIndexSignature<T> = {
  [P in keyof T as P extends `${infer _}` ? P : never]: T[P];
};

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type Foo = {
  [key: string]: any;
  foo(): void;
};

type Bar = {
  [key: number]: any;
  bar(): void;
};

type FooBar = {
  [key: symbol]: any;
  foobar(): void;
};

type Baz = {
  bar(): void;
  baz: string;
};

type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { foobar(): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>
];
