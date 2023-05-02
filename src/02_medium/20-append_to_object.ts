/* _____________ Your Code Here _____________ */

/**
 * 1. あるオブジェクトから新しいオブジェクトを生成するので、`Mapped types`を使う
 * 2. `keyof T` でT型のオブジェクトのキーをイテレートするので、`|`（ユニオン型）でUをマージする
 * 3. PがU型の場合、Vを返し、そうでない場合には、T[P]を返す
 */
type AppendToObject<T extends Record<string, unknown>, U extends string, V> = {
  [P in keyof T | U]: P extends U ? V : T[P];
};

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type test1 = {
  key: "cat";
  value: "green";
};

type testExpect1 = {
  key: "cat";
  value: "green";
  home: boolean;
};

type test2 = {
  key: "dog" | undefined;
  value: "white";
  sun: true;
};

type testExpect2 = {
  key: "dog" | undefined;
  value: "white";
  sun: true;
  home: 1;
};

type test3 = {
  key: "cow";
  value: "yellow";
  sun: false;
};

type testExpect3 = {
  key: "cow";
  value: "yellow";
  sun: false;
  isMotherRussia: false | undefined;
};

// prettier-ignore
type cases = [
  Expect<Equal<AppendToObject<test1, "home", boolean>, testExpect1>>,
  Expect<Equal<AppendToObject<test2, "home", 1>, testExpect2>>,
  Expect<Equal<AppendToObject<test3, "isMotherRussia", false | undefined>, testExpect3>>
];
