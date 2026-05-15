import { expect, test } from "vitest";

// テスト用の簡単な足し算関数
function add(a: number, b: number) {
  return a + b;
}

// テストの定義
test("1 + 2 は 3 になること", () => {
  // expect(実行結果).toBe(期待する答え)
  expect(add(1, 2)).toBe(3);
});
