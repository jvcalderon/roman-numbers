'use strict'

const { romanToArab, arabToRoman, isValidArab, isValidRoman } = require("../romanNumbers");

describe("Roman to Arab conversion", () => {
  test.each([
    ["MMMCMXCIX", 3999],
    ["MMMC", 3100],
    ["CCLIV", 254],
    ["IX", 9],
    ["III", 3],
    ["QI", NaN],
    ["i", NaN],
    ["XM", NaN],
  ])("romanToArab('%s') should return %d", (roman, arab) => {
    expect(romanToArab(roman)).toEqual(arab);
  });
});

describe("Arab to Roman conversion", () => {
  test.each([
    [1, "I"],
    [3999, "MMMCMXCIX"],
    [990, "CMXC"],
    [3100, "MMMC"],
    [254, "CCLIV"],
    [9, "IX"],
    [3, "III"],
    [0, ""],
    [-1, ""],
    [5.4, ""],
    [4000, ""],
  ])("arabToRoman(%d) should return '%s'", (arab, roman) => {
    expect(arabToRoman(arab)).toEqual(roman);
  });
});

describe("Arab number validation", () => {
  test.each([
    [0, false],
    [1, true],
    [3999, true],
    [4000, false],
    [2.3, false],
    [-2, false],
    ["X", false],
    ["2", false],
    [false, false],
  ])("isValidArab(%s) should return %s", (input, isValid) => {
    expect(isValidArab(input)).toEqual(isValid);
  });
});

describe("Roman number validation", () => {
  test.each([
    ["MMMCMXCIX", true],
    ["MMMCM", true],
    ["XIV", true],
    ["IIIX", false],
    ["", false],
    ["MMMCMM", false],
    ["MMMCMXCIXX", false],
    ["CMIVXCIXX", false],
    ["xiii", false],
    ["Xi", false],
    ["QA", false],
    [2, false],
    [false, false],
  ])("isValidRoman(%s) should return %s", (input, isValid) => {
    expect(isValidRoman(input)).toEqual(isValid);
  });
});
