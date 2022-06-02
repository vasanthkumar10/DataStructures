// find the max and min of an unsorted array

const getMinMax = (arr) => {
  if (arr.length < 1) return [];
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  return [min, max];
};

// test cases
console.log(getMinMax([]));
console.log(getMinMax([1]));
console.log(getMinMax([1, 4]));
console.log(getMinMax([100, 4, 10, 3, 5, 2]));
console.log(getMinMax([1, 2, 3, 4, 5]));

// find the Kth max and min of an unsorted array
