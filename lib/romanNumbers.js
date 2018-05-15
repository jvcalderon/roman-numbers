'use strict'

const R = require('ramda')
const {Just, Nothing} = require('ramda-fantasy').Maybe

const romanRegexp = /\bM{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})\b/
const isValidRoman = R.compose(xs => !R.isEmpty(xs), R.filter(x => '' !== x), R.match(romanRegexp), R.toString)
const isValidArab = n => Number.isInteger(n) && n > 0 && n <= 3999

const safeRomanToArab = n => isValidRoman(n) ? Just(n) : Nothing()
const romanToArab = n => safeRomanToArab(n)
    .map(R.split(''))
    .map(n => n.map(char => R.prop(char, {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000})))
    .map(R.groupWith(R.equals))
    .map(R.map(grp => R.sum(grp)))
    .map(R.reverse)
    .map(R.splitEvery(2))
    .map(R.map(grp => grp[0] > grp[1] ? R.subtract(grp[0], grp[1]) : R.sum(grp)))
    .map(R.sum)
    .getOrElse(NaN)

const safeArabToRoman = n => isValidArab(n) ? Just(n) : Nothing()
const arabToRoman = n => safeArabToRoman(n)
    .map(R.toString)
    .map(R.concat('0000'))
    .map(R.split(''))
    .map(R.slice(-4, Infinity))
    .map(n => R.update(0, "M".repeat(n[0]), n))
    .map(n => R.update(1, ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'][n[1]], n))
    .map(n => R.update(2, ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'][n[2]], n))
    .map(n => R.update(3, ['','I','II','III','IV','V','VI','VII','VIII','IX'][n[3]], n))
    .map(R.join(''))
    .getOrElse("")

module.exports = { romanToArab, arabToRoman, isValidArab, isValidRoman }
