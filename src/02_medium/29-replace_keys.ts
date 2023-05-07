/* _____________ Your Code Here _____________ */

/**
 * 解き方：
 *
 * P型（U型の各オブジェクトのキー）がT型のサブタイプであれば、
 *  U型の各オブジェクトのプロパティを置換
 * そうでない場合は、`U[P]` で元のプロパティを返す
 */
// prettier-ignore
type ReplaceKeys<U extends Record<string, unknown>, T, Y extends Record<string, unknown>> = {
  [P in keyof U]: P extends T
    ? (P extends keyof Y ? Y[P] : never)
  : U[P];
};

/* _____________ Test Cases _____________ */

import type { Equal, Expect } from "../utils/index.d.ts";

type NodeA = {
  type: "A";
  name: string;
  flag: number;
};

type NodeB = {
  type: "B";
  id: number;
  flag: number;
};

type NodeC = {
  type: "C";
  name: string;
  flag: number;
};

type ReplacedNodeA = {
  type: "A";
  name: number;
  flag: string;
};

type ReplacedNodeB = {
  type: "B";
  id: number;
  flag: string;
};

type ReplacedNodeC = {
  type: "C";
  name: number;
  flag: string;
};

type NoNameNodeA = {
  type: "A";
  flag: number;
  name: never;
};

type NoNameNodeC = {
  type: "C";
  flag: number;
  name: never;
};

type Nodes = NodeA | NodeB | NodeC;
type ReplacedNodes = ReplacedNodeA | ReplacedNodeB | ReplacedNodeC;
type NodesNoName = NoNameNodeA | NoNameNodeC | NodeB;

type cases = [
  // prettier-ignore
  Expect<Equal<ReplaceKeys<Nodes, 'name' | 'flag', { name: number; flag: string }>, ReplacedNodes>>,
  Expect<Equal<ReplaceKeys<Nodes, "name", { aa: number }>, NodesNoName>>
];
