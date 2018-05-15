[![NPM](https://nodei.co/npm/roman-numbers.png?downloads=true&stars=true)](https://nodei.co/npm/roman-numbers/)

Roman Numbers
==============

[![Build Status](https://travis-ci.org/jvcalderon/roman-numbers.svg?branch=master)](https://travis-ci.org/jvcalderon/roman-numbers)
[![Coverage Status](https://coveralls.io/repos/github/jvcalderon/roman-numbers/badge.svg?branch=master)](https://coveralls.io/github/jvcalderon/roman-numbers?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/jvcalderon/roman-numbers/badge.svg?targetFile=package.json)](https://snyk.io/test/github/jvcalderon/roman-numbers?targetFile=package.json)

A simple package to convert roman to arabic numbers (and vice versa). It also can check valid roman format.

## Installation

<pre><code>$ npm install --save roman-numbers</code></pre>

## How to use it

Fist of all you can require it as follow:

<pre><code>const {romanToArab, arabToRoman, isValidArab, isValidRoman} = require('roman-numbers')</code></pre>

### isValidArab

Checks if given value can be converted to roman. Only integers (it checks the type) from 1 to 3999 are valid values.

<pre><code>
isValidArab(0) //Returns false
isValidArab(100) //Returns true
isValidArab('X') //Returns false
</code></pre>

### isValidRoman

Checks if given value can be converted to arab. Only capitalized strings with a valid roman format are valid values.

<pre><code>
isValidRoman('') //Returns false
isValidRoman('IIIX') //Returns false
isValidRoman('ix') //Returns false
isValidArab('XI') //Returns true
</code></pre>

### romanToArab

Converts valid roman number to arab.

<pre><code>
romanToArab('IX') //Returns 9
romanToArab('MMM') //Returns 3000
romanToArab('IIIX') //Returns NaN
romanToArab(1) //Returns NaN
romanToArab(0) //Returns NaN
romanToArab('') //Returns NaN
</code></pre>

### arabToRoman

Converts valid roman number to arab.

<pre><code>
arabToRoman(12) //Returns 'XII'
arabToRoman(201) //Returns 'CCI'
arabToRoman(0) //Returns ''
arabToRoman('B') //Returns ''
arabToRoman('') //Returns ''
arabToRoman('5000') //Returns ''
</code></pre>
