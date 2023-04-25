/* _____________ Your Code Here _____________ */

/**
 * 1. T型には、Record で Mapped type を定義した上で、`T = {}` でdefault仮引数を設定
 * 2. option() で T型にマージしていく
 * 3. key は `K extends keyof T ? never : K` で重複させない
 * 4. 最後に、get() でマージしてきたT型を返す
 */
type Chainable<T extends Record<string, unknown> = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<T & { [P in K]: V }>;
  get(): T;
};

/* _____________ Test Cases _____________ */

import type { Alike, Expect } from "../utils/index.d.ts";

declare const a: Chainable;

const result1 = a
  .option("foo", 123)
  .option("bar", { value: "Hello World" })
  .option("name", "type-challenges")
  .get();

const result2 = a
  .option("name", "another name")
  // @ts-expect-error
  .option("name", "last name")
  .get();

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>
];

type Expected1 = {
  foo: number;
  bar: {
    value: string;
  };
  name: string;
};

type Expected2 = {
  name: string;
};
