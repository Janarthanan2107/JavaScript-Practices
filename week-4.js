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
