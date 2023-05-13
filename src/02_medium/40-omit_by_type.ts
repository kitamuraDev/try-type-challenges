/* _____________ Your Code Here _____________ */

/**
 * `T[P] extends U ? never : P`
 * ... T[P]（nameならstring, countならnumber）が U型のサブタイプであれば、そのプロパティを削除（never）する
 */
type OmitByType<T, U extends string | number | boolean> = {
  [P in keyof T as T[P] extends U ? never : P]: T[P];
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
  Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
  Expect<Equal<OmitByType<Model, string>, { count: number; isReadonly: boolean; isEnable: boolean }>>, // prettier-ignore
  Expect<Equal<OmitByType<Model, number>, { name: string; isReadonly: boolean; isEnable: boolean }>> // prettier-ignore
];
