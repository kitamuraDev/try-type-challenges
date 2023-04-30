/* _____________ Your Code Here _____________ */

/**
 * 1. 配列を`先頭`と`それ以外`で分けて、各要素が配列であった場合、その要素が配列でなくなるまで Flatten を再帰的に呼び出す
 * 2. まず、Fが配列であるか判定する必要があるため、`F extends unknown[]` でFが配列なら、FもRestも Flatten に渡して配列を平坦化させる
 * 3. Fが配列でない場合、そのまま配列の要素に展開させる
 */
type Flatten<T extends unknown[]> = T extends [infer F, ...infer Rest]
  ? F extends unknown[]
    ? [...Flatten<F>, ...Flatten<Rest>]
    : [F, ...Flatten<Rest>]
  : [];

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

// prettier-ignore
type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{ foo: "bar"; 2: 10 }, "foobar"]>, [{ foo: "bar"; 2: 10 }, "foobar"]>>
];
