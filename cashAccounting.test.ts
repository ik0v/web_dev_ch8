import { expect, test } from "vitest";
import { sumBalance } from "./sumBalance";

test("test summing bills of 1000kr", () => {
  expect(sumBalance({ "1000kr": 10 })).toBe(10_000);
  expect(sumBalance({ "1000kr": 5 })).toBe(5_000);
});

test("test summing bills of 100kr", () => {
  expect(sumBalance({ "100kr": 5 })).toBe(500);
});

test("test summing bills of different types", () => {
  expect(sumBalance({ "1000kr": 1, "200kr": 2, "100kr": 5 })).toBe(1900);
});
