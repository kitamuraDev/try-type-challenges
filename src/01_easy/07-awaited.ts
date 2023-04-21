/* _____________ Your Code Here _____________ */

/**
 * 1. Promise<T>から再帰的に型（T）を抽出する型定義を作成する（UnwrapPromise）
 * 2. MyAwaitedでは、型引数にunknown型のPromiseをextendsで制限させる
 * 3. T が Promise<T> である場合に、<infer U> で T型を推論し、U を UnwrapPromise に渡す。T が Promise<T> でないなら Tを返す
 */
type UnwrapPromise<T> = T extends Promise<infer U> ? UnwrapPromise<U> : T;
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
  ? UnwrapPromise<U>
  : T;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>
];

// @ts-expect-error
type error = MyAwaited<number>;
