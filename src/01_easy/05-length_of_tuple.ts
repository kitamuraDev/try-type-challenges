/* _____________ Your Code Here _____________ */

/**
 * 1. シンプルに型引数 T に対して readonly な unknown型の配列であることを制限させる
 * 2. あとは T["length"] で配列の要素数を返すだけ
 */
type Length<T extends readonly unknown[]> = T["length"];

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const // prettier-ignore

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<"hello world">
];
