/* _____________ Your Code Here _____________ */

/**
 * `Uncapitalize<S extends string>` ...先頭文字を小文字に変換するビルトインタイプ
 *
 * 1. `Rest extends Uncapitalize<Rest>` で Rest の先頭文字が小文字か判定
 * 2. Restの先頭が小文字なら、Fを小文字にして残りの文字列をKababCaseに渡す
 * 3. Restの先頭が大文字なら、Fを小文字にしてハイフンを追加。RestをKebabCaseに渡す
 */
type KebabCase<S extends string> = S extends `${infer F}${infer Rest}`
  ? Rest extends Uncapitalize<Rest>
    ? `${Uncapitalize<F>}${KebabCase<Rest>}`
    : `${Uncapitalize<F>}-${KebabCase<Rest>}`
  : S;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type cases = [
  Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
  Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
  Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
  Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
  Expect<Equal<KebabCase<"-">, "-">>,
  Expect<Equal<KebabCase<"">, "">>,
  Expect<Equal<KebabCase<"😎">, "😎">>
];
