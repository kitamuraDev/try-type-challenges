/* _____________ Your Code Here _____________ */

/**
 * 1. 左側の空白を切り出す（type Space）
 * 2. 条件が true であれば、infer で抽出した Rest を TrimLeftへ渡し再帰処理を行う
 * 3. false の場合は、Sをそのまま返す
 */
type Space = " " | "\n" | "\t";
type TrimLeft<S extends string> = S extends `${Space}${infer Rest}`
  ? TrimLeft<Rest>
  : S;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<TrimLeft<"str">, "str">>,
  Expect<Equal<TrimLeft<" str">, "str">>,
  Expect<Equal<TrimLeft<"     str">, "str">>,
  Expect<Equal<TrimLeft<"     str     ">, "str     ">>,
  Expect<Equal<TrimLeft<"   \n\t foo bar ">, "foo bar ">>,
  Expect<Equal<TrimLeft<"">, "">>,
  Expect<Equal<TrimLeft<" \n\t">, "">>
];
