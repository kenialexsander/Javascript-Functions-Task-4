// 1. Do the below programs in anonymous function & IIFE
console.log(
  "------------Print odd Numbers in an Array------------------------"
);
console.log("a. Print odd numbers in an array => [1, 2, 3, 4, 5]");
// Anonymous function
const printOddNumbers = function (arr) {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

// IIFE
(function (arr) {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})([1, 2, 3, 4, 5]);

// Arrow Function

function aprintOddNumbers(arr) {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
}

/*********************************** */
console.log(
  "-------------------------------Title Caps------------------------"
);
console.log(
  "b. Convert all the strings to title caps in a string array => [hello, world, javascript]"
);
// Anonymous function
const titleCaps = function (arr) {
  return arr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
};

// IIFE
const titleCapsResult = (function (arr) {
  return arr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
})(["hello", "world", "javascript"]);
console.log(titleCapsResult);

//Arrow Function
function atitleCaps(arr) {
  return arr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
}

/*********************************** */
console.log(
  "-----------------Sum of All Numbers in Array----------------------"
);
console.log("c. Sum of all numbers in an array");
// Anonymous function
const sumOfNumbers = function (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

// IIFE
const sum = (function (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
})([1, 2, 3, 4, 5]);
console.log(sum);

// Arrow Function
console.log(sumOfNumbers([1, 2, 3, 4, 5, 10, 1000]));

function asumOfNumbers(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

/************************************************* */

console.log(
  "------------------Return all the Prime numbers in an array---------"
);
console.log("d.Return all the prime numbers in an array");
// Anonymous function
const getPrimeNumbers = function (arr) {
  return arr.filter((num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
};

// IIFE
const primes = (function (arr) {
  return arr.filter((num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(primes);

// Arrow Funtion
function agetPrimeNumbers(arr) {
  return arr.filter((num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
}

/***************************************************/

console.log(
  "-----------------Return all the the Palindromes in an array-------"
);
console.log("e.Return all the palindromes in an array");
// Anonymous function
const getPalindromes = function (arr) {
  return arr.filter((word) => {
    const reversed = word.split("").reverse().join("");
    return word === reversed;
  });
};

// IIFE
const palindromes = (function (arr) {
  return arr.filter((word) => {
    const reversed = word.split("").reverse().join("");
    return word === reversed;
  });
})(["madam", "hello", "racecar", "world"]);
console.log(palindromes);
// Arrow Function

function agetPalindromes(arr) {
  return arr.filter((word) => {
    const reversed = word.split("").reverse().join("");
    return word === reversed;
  });
}
/*************************************************************************/

console.log(
  "------------Return median of two Sorted arrays of the same size.---"
);
console.log("f.Return median of two sorted arrays of the same size.");
// Anonymous function
const medianOfArrays = function (arr1, arr2) {
  const combined = [...arr1, ...arr2].sort((a, b) => a - b);
  const length = combined.length;
  const middle = Math.floor(length / 2);
  return length % 2 !== 0
    ? combined[middle]
    : (combined[middle - 1] + combined[middle]) / 2;
};

// IIFE
const median = (function (arr1, arr2) {
  const combined = [...arr1, ...arr2].sort((a, b) => a - b);
  const length = combined.length;
  const middle = Math.floor(length / 2);
  return length % 2 !== 0
    ? combined[middle]
    : (combined[middle - 1] + combined[middle]) / 2;
})([1, 3, 5], [2, 4, 6]);
console.log(median);

console.log("g.Remove duplicates from an array");
// Anonymous function
const removeDuplicates = function (arr) {
  return [...new Set(arr)];
};

// IIFE
const uniqueArray = (function (arr) {
  return [...new Set(arr)];
})([1, 2, 2, 3, 4, 4, 5, 5]);
console.log(uniqueArray);

// Arrow Function
const aremoveDuplicates = (arr) => Array.from(new Set(arr));

console.log("Remove duplicates from an array");
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5]));

console.log(
  "-------------------Rotate an array by k times.-----------------------"
);
/************************************************************* */
console.log("h.Rotate an array by k times");
// Anonymous function
const rotateArray = function (arr, k) {
  const n = arr.length;
  const index = k % n;
  return [...arr.slice(index), ...arr.slice(0, index)];
};

// IIFE
const rotatedArray = (function (arr, k) {
  const n = arr.length;
  const index = k % n;
  return [...arr.slice(index), ...arr.slice(0, index)];
})([1, 2, 3, 4, 5], 2);
console.log(rotatedArray);

//Arrow Function
const arotateArray = (arr, k) => {
  const n = arr.length;
  const index = k % n;
  return [...arr.slice(index), ...arr.slice(0, index)];
};

console.log("Rotate an array by k positions");
console.log(rotateArray([1, 2, 3, 4, 5], 2));
