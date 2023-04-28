/* _____________ Your Code Here _____________ */

type Space = " " | "\n" | "\t";

// 愚直に conditional types を回して頑張る
type Trim<S extends string> = S extends `${Space}${infer R}`
  ? Trim<R>
  : S extends `${infer T}${Space}`
  ? Trim<T>
  : S;

// |（ユニオン型。またの名を複合型）を使うことでパターンマッチングができる
// type Trim<S extends string> = S extends
//   | `${Space}${infer Rest}`
//   | `${infer Rest}${Space}`
//   ? Trim<Rest>
//   : S;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<Trim<"str">, "str">>,
  Expect<Equal<Trim<" str">, "str">>,
  Expect<Equal<Trim<"     str">, "str">>,
  Expect<Equal<Trim<"str   ">, "str">>,
  Expect<Equal<Trim<"     str     ">, "str">>,
  Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
  Expect<Equal<Trim<"">, "">>,
  Expect<Equal<Trim<" \n\t ">, "">>
];
