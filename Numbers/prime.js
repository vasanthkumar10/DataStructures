// find the given number is prime or not

const isPrime = (num) => {
  /**
   * For any number to be prime we can ceck upto the sqrt
   * of the number
   *
   * time complexity O(sqrt(n))
   */
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

// test cases
console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(10)); // false
console.log(isPrime(13)); // true
console.log(isPrime(127)); // true

// find the prime numbers upto n number

// Use Seive of Eratosthenes

const getPrimes = (num) => {
  // all values from 2 are set to true
  let primes = [];
  let primeValues = [];
  for (let i = 2; i < num; i++) {
    primes[i] = true;
  }

  //   mark the multiples of prime as false
  for (let i = 2; i < num; i++) {
    if (primes[i]) {
      // push the prime number
      primeValues.push(i);

      /**
//    * For any number to be prime we can ceck upto the sqrt
//    * of the number
//    */

      for (let j = i * i; j < num; j = j + i) {
        primes[j] = false;
      }
    }
  }

  return primeValues;
};

/**
 *
 * time complexity O(n * log(log(n)))
 *
 */

// test cases
console.log(getPrimes(0));
console.log(getPrimes(10));
console.log(getPrimes(100));
console.log(getPrimes(200));
