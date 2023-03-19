const romanRegexp = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
const isValidRoman = str => romanRegexp.test(str.toString());
const isValidArab = n => Number.isInteger(n) && n > 0 && n <= 3999;

const romanToArabMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToArab(roman) {
  if (!isValidRoman(roman)) {
    return NaN;
  }

  let arab = 0;
  let prevValue = 0;

  for (const char of roman) {
    const currentValue = romanToArabMap[char];
    arab += currentValue <= prevValue ? currentValue : currentValue - 2 * prevValue;
    prevValue = currentValue;
  }

  return arab;
}

const romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function arabToRoman(arab) {
  if (!isValidArab(arab)) {
    return "";
  }

  let roman = "";

  for (const key in romanNumerals) {
    while (arab >= romanNumerals[key]) {
      roman += key;
      arab -= romanNumerals[key];
    }
  }

  return roman;
}

module.exports = { romanToArab, arabToRoman, isValidArab, isValidRoman };
