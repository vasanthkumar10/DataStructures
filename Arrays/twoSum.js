// Given an array arr, return the indices that add up to the target

/**
 * eg: [1, 2, 3, 4, 5] target = 9
 * sol -> [3, 4] position
 */

// naive approach

// this works but time complexity is O(n^2)
const findSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }
};

// test cases
console.log(findSum([1, 2, 3, 4, 5], 9));
console.log(findSum([7, 8, 6, 5, 3], 9));
console.log(findSum([1, 2, 3, 4, 6], 8));

// best approach

/**
 * We can use hash table to bring down the time complexity
 * to O(n)
 */

const findSumOptimised = (arr, target) => {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (target - arr[i] in hash) return [hash[target - arr[i]], i];
    else hash[arr[i]] = i;
  }
};

// test cases
console.log(findSumOptimised([1, 2, 3, 4, 5], 9));
console.log(findSumOptimised([7, 8, 6, 5, 3], 9));
console.log(findSumOptimised([1, 2, 3, 4, 6], 8));
