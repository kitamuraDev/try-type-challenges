/* _____________ Your Code Here _____________ */

/**
 * T[P] が U のサブタイプであれば、
 *  P を返し、そうでなければ never を返してそのプロパティを除外する
 *
 * 例
 * Model[name] extends string -> { name: string }
 * Model[count] extends string -> never（除外されます）
 */
type PickByType<T, U extends string | number | boolean> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P];
};

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

type cases = [
  Expect<
    Equal<
      PickByType<Model, boolean>,
      { isReadonly: boolean; isEnable: boolean }
    >
  >,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>
];
