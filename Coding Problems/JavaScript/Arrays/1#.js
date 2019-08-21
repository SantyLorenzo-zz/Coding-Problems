// Given a list of numbers and a number k, return whether
// any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17,
//return true since 10 + 7 is 17.

let arr = [1, 2, 3, 4, 5];
let k = 0;

const firulais = (arr, k) => {
  let mySet = new Set();
  // put all the array elements in the set
  arr.forEach(item => mySet.add(item));

  for (let i = 0; i < arr.length; i++) {
    // ask if in the set there is a value that is equal
    // to the subtraction of k - arr [i], the current position of the array
    if (mySet.has(k - arr[i])) {
      return true;
    }
  }
  return false;
};

console.log(firulais(arr, k));

// This problem is from https://www.dailycodingproblem.com/
