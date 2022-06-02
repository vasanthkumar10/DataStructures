// reverse the array

// library approach
let nums = [1, 2, 3, 4, 5];
console.log(nums.reverse());

// naive approach
// time complexity O(n)
// space complexity o(n)

const getReversedArray = (arr) => {
  let reversedArray = [];
  while (arr.length > 0) {
    reversedArray.push(arr.pop());
  }
  return reversedArray;
};

// test cases
console.log(getReversedArray([1, 2, 3, 4, 5]));
console.log(getReversedArray([]));

// best approach
// time complexity O(n/2)
// space complexity O(1)

const getReversedArrayOptimised = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start += 1;
    end -= 1;
  }

  return arr;
};

// test cases
console.log(getReversedArray([1, 2, 3, 4, 5]));
console.log(getReversedArray([]));
