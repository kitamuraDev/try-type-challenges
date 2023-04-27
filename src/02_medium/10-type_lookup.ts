/* _____________ Your Code Here _____________ */

/**
 * { type: T } の T型によって Uの結果が変わる（型の絞り込みが行われている）
 */
// type LookUp<U, T> = U extends { type: T } ? U : never;

// 別解（型定義をガッチリと固めたver.）
type LookUp<U extends Animal, T extends U["type"]> = U extends { type: T }
  ? U
  : never;

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type Animal = Cat | Dog;

type cases = [
  Expect<Equal<LookUp<Animal, "dog">, Dog>>,
  Expect<Equal<LookUp<Animal, "cat">, Cat>>
];
