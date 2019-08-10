// Given a list of numbers and a number k, return whether
// any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17,
//return true since 10 + 7 is 17.

//======================================>

let arr = [1, 2, 3, 4, 5];
let k = 0;

// solution with 2 for

function sum(arr, k) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (k > arr[i]) {
      res = k - arr[i];
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === res) {
          return true;
        }
      }
    }
  }
  return false;
}
console.log(sum(arr, k));

//======================================>

// solution with 1 for

const firulais = (arr, k) => {
  // creo un nuevo set
  let mySet = new Set();
  // meto todos los elementos del array en el set
  arr.forEach(item => mySet.add(item));

  for (let i = 0; i < arr.length; i++) {
    // pregunto si en el set hay un valor que sea igual a
    // la resta de k - arr[i], la posicion actual del array
    if (mySet.has(k - arr[i])) {
      return true;
    }
  }
  return false;
};

console.log(firulais(arr, k));
