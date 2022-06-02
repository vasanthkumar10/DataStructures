/**
 * Given 3 nums x, y, z. Compute (x^y)%z
 * where x is base, y is exponent and z is modulus
 *
 */

// Naive approach

/**
 * It worked for smaller numbers but when the
 * number grows javascript cannot handle very large number
 * since it cannot store large number in 32 bit floating point
 */

const modularExponentiation = (base, exponent, modulus) =>
  Math.pow(base, exponent) % modulus;

// test cases

// console.log(modularExponentiation(2, 3, 5)); // works
// console.log(modularExponentiation(6, 77, 25)); // Wrong value --> gives 8 instead of 11
// console.log(modularExponentiation(60, 277, 105)); // failed --> NAN

// best approach

/**
 * start the exponent with 1 and use the last value in next iteration
 * eg: 4^3 % 5
 *
 * (4 * 1) % 5 = 4 % 5 = 4
 * (4 * 4) % 5 = 16 % 5 = 1
 * (4 * 1) % 5 = 4 % 5 = 4
 */

const modularExponentiationOptimised = (base, exponent, modulus) => {
  //   base case
  if (modulus === 1) return 0;

  let value = 1;
  for (let i = 0; i < exponent; i++) {
    value = (base * value) % modulus;
  }

  return value;
};

// test cases

console.log(modularExponentiationOptimised(2, 3, 5)); // works
console.log(modularExponentiationOptimised(6, 77, 25)); // works
console.log(modularExponentiationOptimised(60, 277, 105)); // works
