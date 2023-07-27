// 1.Write a JavaScript program to check if a number is positive, negative, or zero.
// 2.Create a function that takes two numbers as arguments and returns their sum.
// 3.Write a program to find the maximum of two given numbers.
// 4.Create a function that takes a string as input and returns its length.
// 5.Write a JavaScript function to check if a given number is prime or not.
// 6.Write a function to sort given array.
// 7.Write a function that checks if a given string, is a palindrome.
// 8.Create a program that generates a random number between 1 and 10 and asks the user to guess it.
// 9. Create a program that generates a random password with a mixture of characters and symbols.
// 10.Create a program that determines if a given year is a leap year or not.

// function checkNumberSign(num) {
//     if (num > 0) {
//         return "Positive";
//     } else if (num < 0) {
//         return "Negative";
//     } else {
//         return "Zero";
//     }
// }

// const number = 10;
// console.log(checkNumberSign(number)); // Output: "Positive"

// function sumNumbers(a, b) {
//     return a + b;
// }

// const num1 = 5;
// const num2 = 7;
// console.log(sumNumbers(num1, num2)); // Output: 12

// function findMax(a, b) {
//     return Math.max(a, b);
// }

// const num1 = 8;
// const num2 = 12;
// console.log(findMax(num1, num2)); // Output: 12

// function getStringLength(str) {
//     return str.length;
// }

// const inputString = "Hello, World!";
// console.log(getStringLength(inputString)); // Output: 13

// function isPrime(num) {
//     if (num <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// const number = 17;
// console.log(isPrime(number)); // Output: true

// function isPrime(num) {
//     if (num <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// const number = 17;
// console.log(isPrime(number)); // Output: true

// function isPalindrome(str) {
//     const reversedStr = str.split("").reverse().join("");
//     return str === reversedStr;
// }

// const word = "racecar";
// console.log(isPalindrome(word)); // Output: true

// function generateRandomNumber() {
//     return Math.floor(Math.random() * 10) + 1;
// }

// const randomNumber = generateRandomNumber();
// console.log("Guess a number between 1 and 10.");

// // Implement the user input and check if it matches the generated random number.

// function generateRandomPassword(length) {
//     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
//     let password = "";

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * charset.length);
//         password += charset[randomIndex];
//     }

//     return password;
// }

// const passwordLength = 10;
// console.log(generateRandomPassword(passwordLength));

// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }

// const year = 2024;
// console.log(isLeapYear(year)); // Output: true

// Given an array of integers, rearrange the elements in a way that all the even numbers
// come before the odd numbers.

function rearrangeEvenOdd(arr) {
  return arr
    .filter((num) => num % 2 === 0)
    .concat(arr.filter((num) => num % 2 !== 0));
}

const numbers = [1, 2, 3, 4, 5, 6];
const rearrangedArray = rearrangeEvenOdd(numbers);
console.log(rearrangedArray);

// Write a function to find the missing number in an array of integers from 1 to N.

function findMissingNumber(arr, N) {
  const expectedSum = (N * (N + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

const array = [1, 2, 4, 5, 6];
const N = 6;
const missingNumber = findMissingNumber(array, N);
console.log(missingNumber); 

// Given a string with parentheses, check if it is balanced (each opening parenthesis
// has a corresponding closing parenthesis).

// Implement a function to convert a decimal number to its binary representation.

function decimalToBinary(decimalNum) {
  return decimalNum.toString(2);
}

const decimalNumber = 13;
const binaryRepresentation = decimalToBinary(decimalNumber);
console.log(binaryRepresentation); 

// Implement a function that returns the longest word in a sentence.
function findLongestWord(sentence) {
  const words = sentence.split(" ");
  return words.reduce(
    (longestWord, currentWord) =>
      currentWord.length > longestWord.length ? currentWord : longestWord,
    ""
  );
}

const inputSentence = "The quick brown fox jumps over the lazy dog";
const longestWord = findLongestWord(inputSentence);
console.log(longestWord); 

// Given a matrix (2D array), rotate it 90 degrees clockwise

// Write a function to check if a given string contains only unique characters (no
// repeating characters).
function hasUniqueCharacters(str) {
  const charSet = new Set();
  for (const char of str) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
}

const uniqueStr = "abcdefg";
const nonUniqueStr = "hello";
console.log(hasUniqueCharacters(uniqueStr)); 
console.log(hasUniqueCharacters(nonUniqueStr));

// Given an array of integers and a target sum, find the index of two numbers that add
// up to the target sum.

// Write a function that generates all possible combinations of a given string.
function generateStringCombinations(str) {
  const result = [];
  function backtrack(path, start) {
    result.push(path);
    for (let i = start; i < str.length; i++) {
      backtrack(path + str[i], i + 1);
    }
  }
  backtrack("", 0);
  return result;
}

const inputString = "abc";
const combinations = generateStringCombinations(inputString);
console.log(combinations); // Output: [ 'abc', 'ab', 'ac', 'a', 'bc', 'b', 'c', '' ]

// Given a string, find the most frequent character(s) and their count(s).
