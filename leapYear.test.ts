import {expect, test} from "vitest";

function isLeapYear(year: number) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
}

test("should detect normal leap years", () => {
    expect(isLeapYear(2024)).toBe(true);
})

test("years divisible by 100 are not leap years", () => {
    expect(isLeapYear(2100)).toBe(false);
})

test("years divisible by 400 are leap years", () => {
    expect(isLeapYear(2000)).toBe(true);
})

test("should detect non-leap years", () => {
    expect(isLeapYear(2025)).toBe(false);
})
