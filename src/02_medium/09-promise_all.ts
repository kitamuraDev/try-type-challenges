/* _____________ Your Code Here _____________ */

/**
 * 1. T型は unknown[] で制限をかける
 * 2. 引数valuesでは、`readonly [...T]` で readonlyなタプル型を表現
 * 3. 戻り値は Promise<> でラップする
 * 4. `[P in keyof T]` でT型（タプル）の各index（0, 1, 2 ...）を P（イテレート変数） へ格納
 * 5. `T[P]` はT型へPを使ってインデックスアクセスを行っている
 * 6. T型（タプル）の要素（T[P]）が Promise型であれば、infer で抽出したSを返し、そうでなければそのまま T[P] を返す
 */
declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T]
): Promise<{
  [P in keyof T]: T[P] extends Promise<infer S> ? S : T[P];
}>;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>
];
