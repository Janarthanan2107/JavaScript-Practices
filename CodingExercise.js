// <--------------------------------------Basics----------------------------------->
// <--------------------------------------Basics----------------------------------->
// <-------Coding Exercises for JavaScript Variables, Data Types & Operators------->
// <--------------------------------------Basics----------------------------------->
// <--------------------------------------Basics----------------------------------->

// 1. Write a program that calculates the sum of two numbers and displays the result.
// let num1 = 5;
// let num2 = 10;
// let sum = num1 + num2;
// console.log("The sum is: " + sum);

// 2. Write a program that calculates the area of a rectangle. Prompt the user to enter the length
// and width of the rectangle and display the result.
// let length = parseFloat(prompt("Enter the length of the rectangle:"));
// let width = parseFloat(prompt("Enter the width of the rectangle:"));
// let area = length * width;
// console.log("The area of the rectangle is: " + area);

// 3. Write a program that converts a temperature from Celsius to Fahrenheit. Prompt the user to
// enter the temperature in Celsius and display the equivalent temperature in Fahrenheit.
// let celsius = parseFloat(prompt("Enter the temperature in Celsius:"));
// let fahrenheit = (celsius * 9/5) + 32;
// console.log("The temperature in Fahrenheit is: " + fahrenheit);

// 4. Write a program that checks if a given number is even or odd. Prompt the user to enter a
// number and display whether it is even or odd.
// let number = parseInt(prompt("Enter a number:"));
// if (number % 2 === 0) {
//     console.log("The number is even.");
// } else {
//     console.log("The number is odd.");
// }

// 5. Write a program that concatenates two strings and displays the result. Prompt the user to
// enter two strings and display the concatenated string.
// let str1 = prompt("Enter the first string:");
// let str2 = prompt("Enter the second string:");
// let result = str1 + str2;
// console.log("The concatenated string is: " + result);

// 6. Write a program that calculates the average of three numbers. Prompt the user to enter
// three numbers and display the average.
// let num1 = parseFloat(prompt("Enter the first number:"));
// let num2 = parseFloat(prompt("Enter the second number:"));
// let num3 = parseFloat(prompt("Enter the third number:"));
// let average = (num1 + num2 + num3) / 3;
// console.log("The average is: " + average);

// 7. Write a program that checks if a given year is a leap year. Prompt the user to enter a year and
// display whether it is a leap year or not.
// let year = parseInt(prompt("Enter a year:"));
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log("It is a leap year.");
// } else {
//     console.log("It is not a leap year.");
// }

// 8. Write a program that swaps the values of two variables. Prompt the user to enter two values,
// swap them, and display the new values.
// let a = parseInt(prompt("Enter the first value:"));
// let b = parseInt(prompt("Enter the second value:"));
// let temp = a;
// a = b;
// b = temp;
// console.log("After swapping, the values are: a = " + a + ", b = " + b);

// 9. Write a program that calculates the area and circumference of a circle. Prompt the user to
// enter the radius of the circle and display the area and circumference.
// let radius = parseFloat(prompt("Enter the radius of the circle:"));
// let area = Math.PI * radius * radius;
// let circumference = 2 * Math.PI * radius;
// console.log("The area of the circle is: " + area);
// console.log("The circumference of the circle is: " + circumference);

// 10. Write a program that checks if a given string is a palindrome. Prompt the user to enter a
// string and display whether it is a palindrome or not.
// let str = prompt("Enter a string:");
// let reversedStr = str.split("").reverse().join("");
// if (str === reversedStr) {
//     console.log("The string is a palindrome.");
// } else {
//     console.log("The string is not a palindrome.");
// }

// <--------------------------------------Basics----------------------------------->
// <--------------------------------------Basics----------------------------------->
// <------------------Coding Exercises from Branching and Iterations--------------->
// <--------------------------------------Basics----------------------------------->
// <--------------------------------------Basics----------------------------------->

// 1. Write a program that prompts the user to enter their age. If the age is less than 18, display
// "You are a minor." Otherwise, display "You are an adult."
// let age = prompt("Enter your age:");
// if (age < 18) {
//     console.log("You are a minor.");
// } else {
//     console.log("You are an adult.");
// }

// 2. Write a program that checks whether a given number is positive, negative, or zero. Display
// an appropriate message based on the input.
// let number = prompt("Enter a number:");
// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }

// 3. Write a program that prompts the user to enter a number. If the number is divisible by 3,
// display "Fizz." If it is divisible by 5, display "Buzz." If it is divisible by both 3 and 5, display
// "FizzBuzz." Otherwise, display the number itself.
// let number = prompt("Enter a number:");
// if (number % 3 === 0 && number % 5 === 0) {
//     console.log("FizzBuzz");
// } else if (number % 3 === 0) {
//     console.log("Fizz");
// } else if (number % 5 === 0) {
//     console.log("Buzz");
// } else {
//     console.log(number);
// }

// 4. Write a program that takes three numbers as input and determines the largest among them.
// Display the result.
// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// let num3 = prompt("Enter the third number:");
// let largest = Math.max(num1, num2, num3);
// console.log("The largest number is: " + largest);

// 5. Write a program that prompts the user to enter a month (1-12) and displays the
// corresponding season based on the input. For example, if the user enters 3, the program
// should display "Spring."
// // Prompt the user to enter a month
// const month = prompt("Enter a month (1-12):");

// // Determine the corresponding season
// let season;

// if (month === 12 || month === 1 || month === 2) {
//     season = "Winter";
// } else if (month >= 3 && month <= 5) {
//     season = "Spring";
// } else if (month >= 6 && month <= 8) {
//     season = "Summer";
// } else if (month >= 9 && month <= 11) {
//     season = "Autumn";
// } else {
//     season = "Invalid month";
// }

// // Display the corresponding season
// console.log("The corresponding season is: " + season);


// 6. Write a program that generates and prints all prime numbers between 1 and 100.
// console.log("Prime numbers between 1 and 100:");
// for (let number = 2; number <= 100; number++) {
//     let isPrime = true;
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(number);
//     }
// }

// 7. Write a program that prompts the user to enter a positive integer and calculates its factorial.
// let num = parseInt(prompt("Enter a positive integer:"));
// let factorial = 1;
// for (let i = 1; i <= num; i++) {
//     factorial *= i;
// }
// console.log("The factorial of " + num + " is: " + factorial);

// 8. Write a program that prints the Fibonacci sequence up to a specified number of terms
// entered by the user.
// let numTerms = parseInt(prompt("Enter the number of terms:"));
// let firstTerm = 0, secondTerm = 1;
// console.log("Fibonacci sequence:");
// console.log(firstTerm);
// console.log(secondTerm);
// for (let i = 3; i <= numTerms; i++) {
//     let nextTerm = firstTerm + secondTerm;
//     console.log(nextTerm);
//     firstTerm = secondTerm;
//     secondTerm = nextTerm;
// }

// 9. Write a program that prompts the user to enter a string. Count and display the number of
// vowels (a, e, i, o, u) present in the string.
// let str = prompt("Enter a string:");
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         count++;
//     }
// }
// console.log("Number of vowels in the string: " + count);

// <--------------------------------------Basics----------------------------------->
// <--------------------------------------Basics----------------------------------->
// <-----------------------Coding Challenges for String Methods-------------------->
// <--------------------------------------Basics----------------------------------->
// <--------------------------------------Basics----------------------------------->

// Beginner Level:

// 1. Write a function that takes a string as input and returns its length using the length method.
// function getStringLength(str) {
//     return str.length;
// }

// console.log(getStringLength("Hello, World!"));

// 2. Write a function that takes a string as input and capitalizes the first letter using the
// toUpperCase and slice methods.
// function capitalizeFirstLetter(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(capitalizeFirstLetter("hello"));

// 3. Write a function that takes a string as input and checks if it ends with a question mark using
// the endsWith method.
// function endsWithQuestionMark(str) {
//     return str.endsWith("?");
// }

// console.log(endsWithQuestionMark("Hello, how are you?"));

// 4. Write a function that takes a string as input and splits it into an array of words using the split
// method.
// function splitIntoWords(str) {
//     return str.split(" ");
// }

// console.log(splitIntoWords("Hello, how are you?"));

// 5. Write a function that takes a string as input and replaces all occurrences of a specified word
// with another word using the replace method.
// function replaceWord(str, target, replacementWord) {
//     return str.replace(new RegExp(target, "gi"), replacementWord);
// }

// console.log(replaceWord("Hello, how are you?", "you", "I"));

// 6. Write a function that takes a string as input and checks if it starts with the word "Hello" using
// the startsWith method.
// function startsWithHello(str) {
//     return str.startsWith("Hello");
// }

// console.log(startsWithHello("Hello, how are you?"));

// 7. Write a function that takes a string as input and extracts the first three characters using the
// slice method.
// function extractFirstThreeChars(str) {
//     return str.slice(0, 3);
// }

// console.log(extractFirstThreeChars("Janarthanan!"));

// 8. Write a function that takes a string as input and checks if it contains only alphabetic
// characters using the match method and a regular expression.
// function containsOnlyAlphabeticChars(str) {
//     return /^[a-zA-Z]+$/.test(str);
// }

// console.log(containsOnlyAlphabeticChars("Hello"));
// console.log(containsOnlyAlphabeticChars("Hello, World!"));

// 9. Write a function that takes a string as input and counts the number of occurrences of a
// specified character using the split, filter, and length methods.
// function countOccurrences(inputString, character) {
//     const charArray = inputString.split("");
//     const filteredArray = charArray.filter(char => char === character);
//     return filteredArray.length;
// }

// const str = "Hello, World!";
// const character = "o";
// const count = countOccurrences(str, character);
// console.log("Number of occurrences of '" + character + "': " + count);

// 10. Write a function that takes a string as input and converts it to lowercase using the
// toLowerCase method.
// function convertToLowerCase(inputString) {
//     return inputString.toLowerCase();
// }

// const str = "Hi, Janarthanan!";
// const lowercaseStr = convertToLowerCase(str);
// console.log("Lowercase string: " + lowercaseStr);

// Intermediate Level:

// 1. Write a function that takes a string as input and checks if it contains any digits using the
// match method and a regular expression.
// function containsDigits(str) {
//     return /\d/.test(str);
// }

// console.log(containsDigits("Hello123"));
// console.log(containsDigits("Hello"));

// 2. Write a function that takes a string as input and returns the index of the first occurrence of
// the word "JavaScript" using the indexOf method.
// function indexOfJavaScript(str) {
//     return str.indexOf("JavaScript");
// }

// console.log(indexOfJavaScript("I love JavaScript! JavaScript is awesome."));

// 3. Write a function that takes a string as input and counts the number of vowels using the split,
// filter, and length methods.
// function countVowels(inputString) {
//     const vowels = ["a", "e", "i", "o", "u"];
//     const charArray = inputString.split("");
//     const filteredArray = charArray.filter(char => vowels.includes(char.toLowerCase()));
//     return filteredArray.length;
// }

// const str = "Hello, World!";
// const vowelCount = countVowels(str);
// console.log("Number of vowels: " + vowelCount);

// 4. Write a function that takes a string as input and extracts the domain name from a URL using
// the slice and indexOf methods.
// method 1
// function extractDomainName(url) {
//     const start = url.indexOf("//") + 2;
//     const end = url.indexOf("/", start);
//     return url.slice(start, end);
// }

// console.log(extractDomainName("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"));
// method 2
// function extractDomainFromURL(url) {
//     let domain = url;

//     if (domain.indexOf("://") !== -1) {
//         domain = domain.slice(domain.indexOf("://") + 3);
//     }
//     if (domain.indexOf("www.") !== -1) {
//         domain = domain.slice(domain.indexOf("www.") + 4);
//     }
//     if (domain.indexOf("/") !== -1) {
//         domain = domain.slice(0, domain.indexOf("/"));
//     }
//     return domain;
// }

// // Example usage
// const url = "https://www.example.com/products";
// const domain = extractDomainFromURL(url);
// console.log("Domain name: " + domain);

// 5. Write a function that takes a string as input and reverses the order of words using the split,
// reverse, and join methods.
// function reverseOrderOfWords(str) {
//     const words = str.split(" ").reverse();
//     return words.join(" ");
// }

// console.log(reverseOrderOfWords("Hello, how are you?"));

// 6. Write a function that takes a string as input and removes all leading and trailing spaces using
// the trim method.
// function removeLeadingAndTrailingSpaces(str) {
//     return str.trim();
// }

// console.log(removeLeadingAndTrailingSpaces("   Hello, World!   "));

// 7. Write a function that takes a string as input and checks if it is a valid email address using the
// match method and a regular expression.
// function isValidEmailAddress(email) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// console.log(isValidEmailAddress("hello@example.com"));
// console.log(isValidEmailAddress("helloexample.com"));

// 8. Write a function that takes a string as input and replaces all spaces with underscores using
// the replace method.
// function replaceWord(str, target, replacementWord) {
//     return str.replace(new RegExp(target, "gi"), replacementWord);
// }

// console.log(replaceWord("Hello, how are you?", " ", "_"));
// 9. Write a function that takes a string as input and returns the first and last characters as a new
// string using the charAt method.
// function getFirstAndLastChars(inputString) {
//     const firstChar = inputString.charAt(0);
//     const lastChar = inputString.charAt(inputString.length - 1);
//     return firstChar + lastChar;
// }

// const str = "Hello, World!";
// const result = getFirstAndLastChars(str);
// console.log("First and last characters: " + result);

// 10. Write a function that takes a string as input and sorts the characters in alphabetical order
// using the split, sort, and join methods.
// function sortStringAlphabetically(inputString) {
//     const sortedChars = inputString.split('').sort().join('');
//     return sortedChars;
// }

// const str = "Janarthanan";
// const sortedStr = sortStringAlphabetically(str);
// console.log("Sorted string: " + sortedStr);

// <--------------------------------------Basics----------------------------------->
// <--------------------------------------Basics----------------------------------->
// <-----------------------Coding Exercises from Arrays---------------------------->
// <--------------------------------------Basics----------------------------------->
// <--------------------------------------Basics----------------------------------->

// Beginner Level:

// 1. Create an array called colors with three favorite colors of your choice. Print the second color
// in the array.
// const colors = ["blue", "red", "green"];
// console.log(colors[1]);  // Output: "red"

// 2. Create an array called numbers with five integers. Add the number 10 to the end of the array
// using the push() method.
// const numbers = [1, 2, 3, 4, 5];
// numbers.push(10);
// console.log(numbers);  // Output: [1, 2, 3, 4, 5, 10]

// 3. Remove the last element from the numbers array using the pop() method. Print the modified
// array.
// const numbers = [1, 2, 3, 4, 5];
// numbers.pop();
// console.log(numbers);  // Output: [1, 2, 3, 4]

// 4. Create an array called fruits with four different fruits. Add two more fruits to the beginning
// of the array using the unshift() method.
// const fruits = ["orange", "apple", "banana"];
// fruits.unshift("grape", "kiwi");
// console.log(fruits);  // Output: ["grape", "kiwi", "orange", "apple", "banana"]

// 5. Given an array pets with the values ["cat", "dog", "bird"], use the splice() method to replace
// "bird" with "fish". Print the modified array.
// const fruits = ["orange", "apple", "banana"];
// fruits.unshift("grape", "kiwi");
// console.log(fruits);  // Output: ["grape", "kiwi", "orange", "apple", "banana"]

// Intermediate Level:

// 1. Given an array names with the values ["John", "Jane", "Bob", "Alice"], use the slice() method
// to create a new array containing only the first two names. Print the new array.
// const names = ["John", "Jane", "Bob", "Alice"];
// const firstTwoNames = names.slice(0, 2);
// console.log(firstTwoNames);  // Output: ["John", "Jane"]

// 2. Create an array called numbers with ten random integers. Use a for loop to calculate the sum
// of all the numbers in the array.
// const numbers = [5, 2, 9, 1, 7, 3, 8, 6, 4, 10];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);  // Output: 55

// 3. Given an array fruits with the values ["apple", "banana", "orange"], use the forEach() method
// to print each fruit in the array.
// const fruits = ["apple", "banana", "orange"];
// fruits.forEach(function(fruit) {
//   console.log(fruit);
// });
// // Output:
// // "apple"
// // "banana"
// // "orange"

// 4. Create an array called grades with five random numbers representing grades. Use a for loop
// to calculate the average grade.
// const grades = [85, 92, 78, 90, 87];
// let sum = 0;
// for (let i = 0; i < grades.length; i++) {
//   sum += grades[i];
// }
// const average = sum / grades.length;
// console.log(average);  // Output: 86.4

// 5. Given an array numbers with the values [1, 2, 3, 4, 5], use a for loop to double each number
// in the array. Print the modified array.
// const numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] *= 2;
// }

// console.log(numbers);  // Output: [2, 4, 6, 8, 10]

// Advanced Level:

// 1. Create an array called names with five names. Write a function that takes an array as a
// parameter and returns the length of the longest name in the array.
// const names = ["John", "Jane", "Bob", "Alice", "Mark"];

// function findLongestNameLength(arr) {
//   let maxLength = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > maxLength) {
//       maxLength = arr[i].length;
//     }
//   }
//   return maxLength;
// }

// console.log(findLongestNameLength(names));  // Output: 5

// 2. Given an array numbers with random integers, write a function that finds and returns the
// smallest number in the array.
// const numbers = [10, 5, 3, 8, 2];

// function findSmallestNumber(arr) {
//   let smallest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   return smallest;
// }

// console.log(findSmallestNumber(numbers));  // Output: 2

// 3. Create an array called words with five different words. Write a function that takes an array as
// a parameter and returns a new array with the lengths of each word.
// const words = ["apple", "banana", "orange", "kiwi", "grape"];

// function getWordLengths(arr) {
//   const lengths = [];
//   for (let i = 0; i < arr.length; i++) {
//     lengths.push(arr[i].length);
//   }
//   return lengths;
// }

// console.log(getWordLengths(words));  // Output: [5, 6, 6, 4, 5]

// 4. Given an array numbers with random integers, write a function that checks if all the numbers
// in the array are positive.
// const numbers = [1, -2, 3, 4, -5];

// function areAllPositive(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(areAllPositive(numbers));  // Output: false

// 5. Create a function called reverseArray that takes an array as a parameter and returns a new
// array with the elements in reverse order.
// function reverseArray(arr) {
//     const reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       reversed.push(arr[i]);
//     }
//     return reversed;
//   }
//   const originalArray = [1, 2, 3, 4, 5];
//   console.log(reverseArray(originalArray));  // Output: [5, 4, 3, 2, 1]

// Expert level

//<-----------------------Basics-----------------------> 
//<-----Coding Exercises for JavaScript Functions------>
//<-----------------------Basics-----------------------> 

// Easy Level:

// 1. Write a function called greet that takes a name as a parameter and prints a greeting message, like "Hello, [name]!".

// function greeting(name) {
//     return `Good Morning ${name}`
// }

// console.log(greeting("Janarthanan"))

// 2. Create a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area.

// function calculateArea(length, width) {
//     return length * width
// }

// let area = calculateArea(20, 10)
// console.log(area)

// 3. Write a function named isEven that takes a number as a parameter and returns true if it is even, and false otherwise.

// function isEven(num) {
//     if (num % 2 == 0) {
//         return true
//     } else {
//         return false
//     }
// }

// let even = isEven(23)
// console.log(even)

// 4. Implement a function called concatenateArrays that takes two arrays as parameters and returns a new array containing the elements of both arrays.

// function concatenateArrays(arr1, arr2) {
//     return arr1 + "," + arr2
// }

// let arr1 = [1, 2, 3, 4]
// let arr2 = [5, 6, 7, 8]

// let concat = concatenateArrays(arr1, arr2)

// console.log(concat)

// 5. Write a function called printNumbers that takes a number as a parameter and prints all numbers from 1 to that number.


// function printNumbers(num) {
//     for (let i = 1; i <= num; i++) {
//         console.log(i)
//     }
// }

// let print = printNumbers(10)

// Intermediate Level:
// • Create a function called reverseString that takes a string as a parameter and returns the reverse of the string.

// function reverseString(string) {
//     let reversedString = ""
//     for (let i = string.length - 1; i >= 0; i--) {
//         reversedString += string[i]
//     }
//     return reversedString;
// }

// let revStr = reverseString("jana")
// console.log(revStr)

// • Implement a function called calculateFactorial that takes a number as a parameter and returns its factorial.

// function calculateFactorial(number) {
//     let factorial = 1
//     for (let i = 1; i <= number; i++) {
//         factorial *= i
//     }
//     return factorial;
// }

// let factorial = calculateFactorial(5)
// console.log(factorial)

// • Write a function named filterEvenNumbers that takes an array of numbers as a parameter and returns a new array containing only the even numbers.

// function filterEvenNumbers(number) {
//     return number.filter(function (number) {
//         return number % 2 == 0
//     })
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let evenNumbers = filterEvenNumbers(arr)
// console.log(evenNumbers)

// • Create a function called checkPalindrome that takes a string as a parameter and returns true if it is a palindrome, and false otherwise.
// function checkPalindrome(string) {
//     // Reverse the cleaned string
//     let reversedStr = string.split("").reverse().join("");

//     // Check if the cleaned string and its reverse are equal
//     return string === reversedStr;
// }

// let palindromeStr = checkPalindrome("malayalam")
// console.log(palindromeStr)

// • Implement a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers

// function calculateAverage(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i]
//         console.log(`sum is ${sum}`)
//     }
//     let average = sum / numbers.length;
//     console.log(`lenght is ${numbers.length}`)
//     return average;
// }

// let grades = [20, 30, 40, 50, 60]
// let average = calculateAverage(grades)
// console.log(average)

// Advanced Level:
// 1. Write a function named findMax that takes an array of numbers as a parameter and returns the maximum number in the array.

// function findMax(numbers) {
//     let bigNum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (bigNum < numbers[i]) {
//             bigNum = numbers[i]
//             // console.log(bigNum)
//             // console.log(numbers[i])
//         }
//     }
//     return bigNum
// }

// let arrMax = [1, 2, 3, 4, 15, 8, 19, 8]
// let max = findMax(arrMax)
// console.log(`Max is ${max}`)

// 2. Create a function called removeDuplicates that takes an array of elements as a parameter and returns a new array with duplicates removed.

// function removeDuplicates(elements) {
//     let unique = []
//     for (let i = 0; i < elements.length; i++) {
//         console.log(!unique.includes(elements[i]))
//         if (!unique.includes(elements[i])) {
//             unique.push(elements[i]);
//         }
//     }
//     return unique;
// }

// let arrDup = ['jana', 'jana', 'sats', 'aswath']
// let remove = removeDuplicates(arrDup)
// console.log(remove)


// 3. Implement a function called isPrime that takes a number as a parameter and returns true if it is prime, and false otherwise.

// function isPrime(number) {
//     if (number <= 1) {
//         return false
//     }
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// let prime = isPrime(5)
// console.log(prime)

// 4. Write a function named capitalizeWords that takes a string as a parameter and returns a new string with the first letter of each word capitalized.

// function capitalizeWords(string) {
//     let words = string.split(" ");
//     console.log(words)
//     let capsWords = []

//     for (let i = 0; i < words.length; i++) {
//         let word = words[i]
//         // console.log(word)
//         let capWord = word.charAt(0).toUpperCase() + word.slice(1)
//         console.log(`Capitalized Words: ${capWord}`)
//         capsWords.push(capWord)
//     }
//     console.log(capsWords)

//     let displayNewArr = capsWords.join(' ')

//     return displayNewArr
// }

// let sentence = "hi bro, i'm janarthana"
// let caps = capitalizeWords(sentence)
// console.log(caps)

// 5. Create a function called sumAllNumbers that takes an array of numbers as a parameter and returns the sum of all numbers.

// function sumAllNumbers(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i]
//     }
//     return sum
// }

// let sumArr = [5, 5, 5, 5, 5]
// let sumOf = sumAllNumbers(sumArr)
// console.log(sumOf)

// Coding Exercises for JavaScript Objects
// Beginner Level Exercises:
// 1. Create an object called "person" with properties for "name", "age", and "city". Print the person's name to the console.
// let person = {
//     name: "jana",
//     age: 20,
//     city: "Palladam",
// }

// console.log(person.name)

// 2. Create an object called "car" with properties for "make", "model", and "year". Access the "model" property and store it in a variable. Print the variable.
// let car = {
//     make: "benze",
//     model: "d550",
//     year: "2022",
// }

// let carVar = car.model;
// console.log(carVar)

// 3. Create an object called "book" with properties for "title" and "author". Add a property called "year" and set it to the current year. Print the book object.
// let book = {
//     title: "Hitler",
//     author: "John"
// }

// // using dot notation we can update the object
// book.year = 2023

// console.log(book)

// 4. Create an object called "restaurant" with properties for "name", "cuisine", and "rating". Change the rating to 4.5 and print the updated restaurant object
// let restaurant = {
//     name: "Kappi",
//     cuisine: "good",
//     rating: 2
// }

// // using bracket notation also we can update the object
// restaurant["rating"] = 4.5

// console.log(restaurant)

// 5. Create an object called "student" with properties for "name" and "grades". Access the second grade in the "grades" array and print it.
// let student = {
//     name: "Jana",
//     grades: [20, 30, 40]
// }

// let grade = student.grades[1]

// console.log(grade)

// Intermediate Level Exercises:
// 6. Create an object called "circle" with properties for "radius" and "calculateArea" method that calculates and returns the area of the circle.
// let circle = {
//     radius: 2,
//     calculate: function () {
//         let area = 3.14 * this.radius * this.radius
//         return area
//     }
// }

// let areaOfCircle = circle.calculate()
// console.log(areaOfCircle)

// 7. Create an object called "bankAccount" with properties for "balance" and "withdraw" method that subtracts a given amount from the balance.
// let bankAccount = {
//     balance: 2500,
//     withdraw: function (number) {
//         let balance = this.balance - number
//         return balance
//     }
// }

// let balance = bankAccount.withdraw(500)
// console.log(balance)

// 8. Create an object called "product" with properties for "name", "price", and "quantity". Add a method called "calculateTotal" that returns the total cost of the product.
// let product = {
//     name: "Samsung M31",
//     price: 16000,
//     quantity: 2
// }

// product.calculateTotal = function () {
//     let total = this.price * this.quantity
//     return total
// }

// let total = product.calculateTotal()
// console.log(total)

// 9. Create an object called "playlist" with properties for "name" and "tracks". Add a method called "addTrack" that adds a track to the playlist.
// let playlist = {
//     name: "Vijay songs",
//     tracks: []
// }

// playlist.addTrack = function (track) {
//     this.tracks.push(track)
// }

// let playlistAdd = playlist.addTrack("Na ready")
// let playlistAdd1 = playlist.addTrack("Na ready")
// console.log(playlist.tracks)

// 10. Create an object called "inventory" with properties for "items" and "addItem" method that adds an item to the inventory.
// let inventory = {
//     items: [],
//     addItems: function (item) {
//         this.items.push(item)
//     }
// }

// let addItem = inventory.addItems("product1")
// console.log(inventory.items)


// Advanced Level Exercises:
// 11. Create an object called "timer" with properties for "startTime" and "start" method that starts the timer.
// let timer = {
//     startTime: 0,
//     start: function () {
//         this.startTime
//     }
// };

// let startTime = timer.start();
// console.log(timer.startTime)

// 12. Create an object called "calculator" with properties for "add", "subtract", "multiply", and "divide" methods that perform the respective operations on given numbers.
// let calculate = {
//     add: function (num1, num2) {
//         let sum = num1 + num2
//         return sum
//     },
//     subtract: function (num1, num2) {
//         let sub = num1 - num2
//         return sub
//     },
//     multipy: function (num1, num2) {
//         let multi = num1 + num2
//         return multi
//     },
//     divide: function (num1, num2) {
//         let divide = num1 + num2
//         return divide
//     }
// }

// console.log(calculate.add(10, 10))

// 13. Create an object called "weather" with properties for "temperature" and "convertTemperature" method that converts the temperature from Celsius to Fahrenheit.
// let weather = {
//     temper: "30",
//     convertTemperature: function () {
//         let fahrenheit = (this.temper * 9 / 5) + 32;
//         return fahrenheit
//     }
// }

// let convert = weather.convertTemperature()
// console.log(`Fahrenheit is ${convert}`)

// 14. Create an object called "shoppingCart" with properties for "items" and "checkout" method that calculates the total cost of all items in the shopping cart.
// let shoppingCart = {
//     items: [
//         { name: "one", price: 100, quantity: 1 },
//         { name: "two", price: 200, quantity: 2 },
//         { name: "three", price: 300, quantity: 3 }
//     ],
//     checkout: function () {
//         let total = 0;
//         for (let i = 0; i < this.items.length; i++) {
//             console.log(this.items[i].price * this.items[i].quantity)
//             total += this.items[i].price * this.items[i].quantity
//         }
//         return total
//     }
// }

// console.log(shoppingCart.items)
// console.log(shoppingCart.checkout())

// 15. Create an object called "game" with properties for "score" and "updateScore" method that updates the score based on the given points.
// let game = {
//     score: 0,
//     updateScore: function (points) {
//         this.score += points
//     }
// }

// console.log(game.updateScore(10))
// console.log(game.updateScore(20))
// console.log(game.score)


// Additional Exercises:
// // 16. Create an object called "movie" with properties for "title", "director", and "actors". Add a method called "addActor" that adds an actor to the movie.
// let movie = {
//     title: "PS",
//     director: "Mani Ratnam",
//     actors: [],
//     addActor: function (actor) {
//         this.actors.push(actor)
//     }
// }

// movie.addActor("Jeyam Ravi")
// movie.addActor("Vikram")

// console.log(movie.actors)

// 17. Create an object called "recipe" with properties for "name", "ingredients", and "cook" method that prints the recipe's cooking instructions.
// let recipe = {
//     name: "Sudu thani",
//     ingredients: ['aaduppu', 'kunda', 'thanni'],
//     cook: function () {
//         console.log(`${this.name} vaipathu yeppadi`)
//         console.log(`aaduppa yedukanum`);
//         console.log(`patha vekkanum`);
//         console.log(`kunda la thani oothanum`);
//         console.log(`adhu kodhikura vara vekanum`);
//         console.log(`apr yedhuku kudikanum`);
//     }
// }

// console.log(recipe.cook())

// 18. Create an object called "calendar" with properties for "events" and "addEvent" method that adds an event to the calendar.
// let calendar = {
//     events: [],
//     addEvent: function (event) {
//         this.events.push(event)
//     }
// }

// calendar.addEvent("6 mani ku yendhiri")
// calendar.addEvent("7 mani ku kulika po")

// let addEvents = calculate.event
// console.log(calendar.events)

// 19. Create an object called "contact" with properties for "name" and "email". Add a method called "sendEmail" that sends an email to the contact's email address.
// 20. Create an object called "blogPost" with properties for "title", "content", and "publish" method that publishes the blog post.
// // 21. Create an object called "employee" with properties for "name", "salary", and "calculateBonus" method that calculates and returns the bonus based on the salary.
// let employee = {
//     name: "Jana",
//     salary: 10000,
//     calculateBonus: function () {
//         let bonusPercentage = 0.1; // 10% bonus
//         let bonusAmount = this.salary * bonusPercentage;
//         return bonusAmount;
//     }
// };

// console.log("Employee:", employee.name);
// console.log("Salary:", employee.salary);
// console.log("Bonus:", employee.calculateBonus());

// 22. Create an object called "gameCharacter" with properties for "name", "health", and "attack" method that reduces the health of the character by User a given amount when attacked.
// let gameCharacter = {
//     player1: "satz",
//     player2: "Jana",
//     health: 100,
//     attack: function (damage) {
//         this.health -= damage;
//         console.log(`${this.player1} was attacked by ${this.player2} and lost ${damage} health points.`);
//         console.log("Current health:", this.health);
//     }
// };

// gameCharacter.attack(20); // Current health: 80
// gameCharacter.attack(40); // Current health: 60


// 23. Create an object called "musicPlayer" with properties for "playlist" and "play" method that plays the songs in the playlist.
// let musicPlayer = {
//     playlist: [],
//     play: function () {
//         if (this.playlist.length === 0) {
//             console.log("No songs in the playlist.");
//         } else {
//             console.log("Playing songs...");
//             this.playlist.forEach(song => {
//                 console.log(`Playing: ${song}`);
//             });
//         }
//     }
// };

// musicPlayer.play()

// 24. Create an object called "shipping" with properties for "weight" and "calculateShippingCost" method that calculates the shipping cost based on the weight.
// const shipping = {
//     weight: 2,
//     calculateShippingCost: function () {
//         const cost = this.weight * 2;
//         console.log(`Shipping cost is: ${cost}`);
//     }
// };

// shipping.calculateShippingCost()


// 25. Create an object called "restaurantMenu" with properties for "items" and "addItem" method that adds a new item to the menu.
// const restaurantMenu = {
//     items: [],
//     addItem: function (item) {
//         this.items.push(item);
//         console.log(`Added item: ${item}`);
//     }
// };

// restaurantMenu.addItem("Burger")
// restaurantMenu.addItem("Burger2")
// restaurantMenu.addItem("Burger3")
// console.log(restaurantMenu.items);

// 26. Create an object called "emailClient" with properties for "inbox" and "deleteEmail" method that deletes an email from the inbox.
// 27. Create an object called "bank" with properties for "name", "accounts", and "createAccount" method that creates a new bank account.
// 28. Create an object called "socialNetwork" with properties for "users" and "addFriend" method that adds a friend to a user's friend list.
// 29. Create an object called "gameBoard" with properties for "cells" and "checkWin" method that checks if a player has won the game.
// 30. Create an object called "quiz" with properties for "questions" and "gradeQuiz" method that grades a quiz based on the answers provided.



// javaScript assessment concepts

// function doSomething() {
//     console.log(this);
// }

// doSomething();

// let obj = {
//     name: "SkillSafari",
//     getName: function () {
//         console.log(this.name);
//     }
// }
// let getName = obj.getName;
// let obj1 = { name: "EduKeys", getName };
// obj1.getName();

// let obj2 = {
//     address: "Tirupur",
//     getAddress: function () {
//         console.log(this.address)
//     }
// }

// let getAddress = obj2.getAddress
// let obj3 = { name: "cbe", getAddress };
// obj3.getAddress();
// //output:undefined

// //call method
// function sayHello() {
//     return "Hello " + this.name;
// }
// let obj4 = { name: "SkillSafari" };
// sayHello.call(obj4);

// console.log(sayHello.call(obj4))

// let person = { age: 23, getAge: function () { return this.age; } }
// let person2 = { age: 54 };
// console.log(person.getAge.call(person2))

// //apply method
// function saySomething(message) {
//     return this.name + " is " + message;
// }
// let person4 = { name: "John" };
// console.log(saySomething.apply(person4, ['wow']))

// let bikeDetails = {
//     displayDetails: function (registrationNumber, brandName) {
//         return this.name + " , " + "bike details: " + registrationNumber + " , " + brandName;
//     },
//     displayDetails1: function (registrationNumber, brandName) {
//         return this.name + " , " + "bike details: " + registrationNumber + " , " + brandName;
//     }
// }
// let person1 = { name: "SkillSafari" };
// let detailsOfPerson1 = bikeDetails.displayDetails1.bind(person1, "tn", "tf")
// // Binds the displayDetails function to the person1 object
// console.log(detailsOfPerson1())
// // Returns SkillSafari, bike details: TN007, FZ

// function add(a) {
//     return function (b) {
//         return a + b
//     }
// }

// console.log(add(3)(6))

// function multiply(a, b) { return a * b; }

// function currying(fn) {
//     return function (f) {
//         return function (g) {
//             return fn(f, g);
//         }
//     }
// }
// let curriedMultiply = currying(multiply);
// // Returns 12 curriedMultiply(4)(3); // Also returns 12
// console.log(multiply(4, 3))
// console.log(curriedMultiply(4)(3))

// let jana = function (me) {
//     let name = me;
//     this.getName = function () {
//         return name.charAt(0).toUpperCase() + name.slice(1)
//     }
// }

// let jan = new jana("Jana")
// console.log(jan.getName())

// function randomFunc() {
//     let obj1 = {
//         name: "SkillSafari",
//         student: "jan",
//         age: 24,
//         getName: function (greeting) {
//             return this.student.charAt(0).toUpperCase() + this.student.slice(1) + ' ' + `${greeting}`

//         }
//     };
//     return function () {
//         console.log(`hi , ${obj1.getName("how are you?")}`); // Has access to obj1 even when the randomFunc function is executed
//     }
// }

// let initialiseClosure = randomFunc(); // Returns a function
// initialiseClosure();

// function divideByHalf(sum) {
//     console.log(Math.floor(sum / 2));
// }
// function multiplyBy2(sum) {
//     console.log(sum * 2);
// }
// function operationOnSum(num1, num2, operation) {
//     let sum = num1 + num2;
//     operation(sum);
// }
// operationOnSum(3, 3, divideByHalf); // Outputs 3
// operationOnSum(5, 5, multiplyBy2); // Outputs 20

// function Person(name, age, gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }
// let person1 = new Person("SkillSafari", 76, "male");
// console.log(person1);
// let person2 = new Person("EduKeys", 34, "female");
// console.log(person2);


//Destructuring concept 
// const arr = [20, 30, 40, 50, 60]

// const [a, b, c] = arr

// console.log(b, c) //output : 30

// const [d, , g, h] = arr

// console.log(g, h)



// function calculate(a, b) {
//     return [a + b, a - b, a * b, a / b, a % b]
// }

// console.log(calculate(20, 3))

// let result;

// let numberOne = prompt("What is your Number?")
// let numberTwo = prompt("What is your Number?")

// const [sum, sub, multi, div, mod] = calculate(Number(numberOne), Number(numberTwo))
// const [sum, sub, multi, div, mod] = calculate(30, 3)

// console.log(sum)
// console.log(sub)
// console.log(multi)
// console.log(div)
// console.log(mod)

// let studentDetails = {
//     name: "jana",
//     school: "SVM",
//     group: "CS-maths",
//     games: ['Cricket', 'ThrowBall', 'VolleyBall', 'Athletics'],
//     staff: ['Lavanya', 'Sutha', 'Vishwa', 'Prem', 'Ram'],

//     messageToThem: function ({ staffIndex, gameIndex }) {
//         console.log(`${this.name.charAt(0).toUpperCase() + this.name.slice(1)}'s favorite Staff in ${this.school} is ${this.staff[staffIndex]} and his favorite game is ${this.games[gameIndex]}`)
//     }
// }

// // studentDetails.messageToThem(0, 0)
// studentDetails.messageToThem({ staffIndex: 2, gameIndex: 0 })


// // const addDetails = { ...studentDetails }
// const addDetails = { ...studentDetails.games }

// console.table(addDetails)

// // 4. Write a function that takes a string as input and extracts the domain name from a URL using
// // the slice and indexOf methods.
// // method 1
// function extractDomainName(url) {
//     const start = url.indexOf("//") + 2;
//     const end = url.indexOf("/", start);
//     return url.slice(start, end);
// }

// console.log(extractDomainName("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"));
// // method 2
// function extractDomainFromURL(url) {
//     let domain = url;

//     if (domain.indexOf("://") !== -1) {
//         domain = domain.slice(domain.indexOf("://") + 3);
//     }
//     if (domain.indexOf("www.") !== -1) {
//         domain = domain.slice(domain.indexOf("www.") + 4);
//     }
//     if (domain.indexOf("/") !== -1) {
//         domain = domain.slice(0, domain.indexOf("/"));
//     }
//     return domain;
// }

// // Example usage
// const url = "https://www.example.com/products";
// const domain = extractDomainFromURL(url);
// console.log("Domain name: " + domain);

// function extractSKUQuantity(qty) {
//     const start = qty.indexOf(`---`) + 3
//     const end = qty.indexOf(`-`, start)
//     return qty.slice(start, end)
// }

// console.log(extractSKUQuantity(`CHN1000000-CBE---12.5"-1-13-22C`))

// const person = {
//     name: "jana",
//     age: 24,
//     city: "palladam",
// }

// for (let key in person) {
//     console.log(key + ":" + person[key])
// }

// const colors = ["red", "green", "yellow"]

// for (let color of colors) {
//     console.log(color)
// }

// const message = 'Jana';

// for (let char of message) {
//     console.log(char);
// }

// const student = {
//     name: "jana",
//     age: 24,
//     city: "palladam",
//     marks: [20, 30, 40, 50, 60],
// }

// function average(arr) {
//     let totalMark = 0

//     for (let mark in arr.marks) {
//         totalMark += arr.marks[mark] / arr.marks.length
//     }

//     return totalMark;
// }

// console.log(average(student))

// function sumNum(arr) {
//     let sum = 0

//     for (let add of arr) {
//         sum += add
//     }

//     return sum;
// }

// let array = [1, 2, 3, 4, 5]
// console.log(sumNum(array))

// higher order function

// function message(name, type) {
//     return type(name)
//     // return name
// }

// function upperCase(name) {
//     return name.toUpperCase()
// }

// function firstIsUpperCase(name) {
//     return name.charAt(0).toUpperCase() + name.slice(1)
// }

// console.log(message("Jana", upperCase))
// console.log(message("Jana", firstIsUpperCase))

// input: we are boys

// output : ew are syob

// function reverseCharactersOfWord(str) {
//     // const strArr = str.split(" ")
//     // const resultArr = strArr.map((ele) =>
//     //     ele.split("").reverse().join("")
//     // )

//     // for (const char of strArr) {
//     //     // console.log(char)
//     //     resultArr.push(char.split("").reverse().join(""))
//     // }

//     // return resultArr.join(" ")

//     return str.split(" ").map((ele) =>
//         ele.split("").reverse().join("")
//     ).join(" ")
// }

// console.log(reverseCharactersOfWord("we are boys"))

// -------------------------Functional programming------------------------------------
// -------------------------Functional programming------------------------------------
// -------------------------Functional programming------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const string = ["jana", "satz", "ash"]
// forEach
// let average = 0
// numbers.forEach((ele, index, arr) => {
//     average = average + ele / arr.length
// })

// let result = []
// string.forEach((ele, index, arr) => {
//     result.push(ele.split("").reverse().join(""))
// })

// let filter = []
// result.forEach((ele, index, arr) => {
//     if (ele.length == 3) {
//         filter.push(ele)
//     }
// })

// console.log(average)
// console.log(result)
// console.log(filter)

// Map
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const string = ["jana", "satz", "ash"]

// const someCalc = numbers.map((ele, index, arr) => {
//     return ele * 2 / arr.length
// })

// const someStrMethod = string.map((ele, index, arr) => {
//     return ele.split("").reverse().join("")
// })

// const someCondition = string.map((ele, index, arr) => {
//     let filter = []
//     if (ele.length !== 3) {
//         filter.push(ele)
//     }

//     //even if a condition fails on that case also map works on it and pushes the empty
//     return filter
// })

// why? answer is not what im expecting
// let filter = []
// const someCondition = string.map((ele, index, arr) => ele.length !== 3 ? filter.push(ele) : "")

// console.log(someCalc)
// console.log(someStrMethod)
// console.log(someCondition)

// let str = "Robert Andrew Geotge"

// let splited = str.split(" ")

// let result = splited.map((ele) => {
//     let firstChar = ele.charAt(0)
//     return firstChar
// })

// console.log(result.join(""))

// filter
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const string = ["jana", "satz", "ash"]

// const evenNumbers = numbers.filter((ele, index, arr) => {
//     return ele % 2 == 0
// })

// const oddNumbers = numbers.filter((ele, index, arr) => {
//     return ele % 2 !== 0
// })

// const pickString = string.filter((ele, index, arr) => {
//    if( ele.charAt(0) == "s"){
//     return ele
//    }
// })

// console.log(evenNumbers)
// console.log(oddNumbers)
// console.log(pickString)

// add all the positive integers
// let input = [6, -5, 7, -2, 4, 6, -1]

// let positiveValue = input.filter(positive => positive > 0).reduce((acc, curr) => acc + curr)

// console.log(positiveValue)

// find
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const string = ["jana", "satz", "ash"]

// const resultNum = numbers.find((ele, index, obj) => {
//     return ele > 4
// })

// const resultStr = string.find((ele, index, obj) => {
//     return ele.charAt(0) == "s"
// })

// console.log(resultNum)
// console.log(resultStr)

// every thing is similar to one another even its name it self says what was there work
// find
// findIndex
// findLast
// findLastIndex

// this two will return in boolean values
// some
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const string = ["jana", "satz", "ash"]

// const resultNum = numbers.some((ele, index, arr) => {
//     return ele > 6
// })

// const resultStr = string.some((ele, index, arr) => {
//     return ele === "jana"
// })

// console.log(resultNum)
// console.log(resultStr)
// every
// const resultNum = numbers.every((ele, index, arr) => {
//     return ele > 6
// })

// const resultStr = string.every((ele, index, arr) => {
//     return ele === "jana"
// })

// console.log(resultNum)
// console.log(resultStr)

// reduce
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const string = ["jana", "satz", "ash", "hari", "dharneesh"]

// const reduceNum = numbers.reduce((acc, curr, index, arr) => {
//     return acc + curr
// }, 0)

// let filterThree = []
// let filterRest = []
// const reduceStr = string.reduce((acc, curr, index, arr) => {
//     if (curr.length === 3) {
//         filterThree.push(curr.split(" "))
//     } else {
//         filterRest.push(curr.split(" "))
//     }
// })

// console.log(reduceNum)
// console.log(filterThree)
// console.log(filterRest)

// let result = { "a": 1, "b": 1, "c": 1 }
// result["d"] = 1
// console.log(result)

// // finding 2d array occurrence
// let array = [
//     ["a", "b", "c"],
//     ["c", "d", "e"],
//     ["d", "e", "f"]
// ]
// console.log(array.flat())

// let count = array.flat().reduce(
//     (acc, curr) => {
//         if (acc[curr]) {
//             acc[curr]++
//         } else {
//             acc[curr] = 1
//         }
//         return acc
//     }
//     , {})

// console.log(count)

// let arr = [4, 6, 2, 3, 1, 1, 3, 5, 7, 8, 4, 3]


// let unique = arr.reduce((acc, curr, index, arr) => {
//     if (!acc.includes(curr)) {
//         acc.push(curr)
//     }
//     return acc
// }, [])

// const removeDuplicates = (str) => {
//     let unique = str.reduce((acc, curr) => {
//         if (!acc.includes(curr)) {
//             acc.push(curr)
//         }
//         return acc
//     }, [])

//     return unique
// }

// console.log(removeDuplicates(["jana", "jana", "jana", "satz", "ash"]))

// closures gives you access to the outer functions scope from an inner function
// function makeAdd(x) {
//     return function (y) {
//         return x + y
//     }
// }

// let Add = makeAdd(10)
// console.log(Add(5))
// console.log(Add(10))
// sort
// toSorted

// let integer = 5
// let number = ""

// for (let i = 1; i <= integer; i++) {
//     for (let j = 1; j <= i; j++) {
//         number += i
//     }
//     number += "\n"
// }

// console.log(number)

// const arr = [5, 5, 5, 6, 5, 2, 1]
// const count = {}

// for (const num of arr) {
//     // console.log(num)
//     count[num] = count[num] ? count[num] + 1 : 1
// }

// console.log(count)

// let i = 10

// for (i = 1; i <= 10; i++) {
//     console.log(i)
// }

// for (i = 10; i >= 1; i--) {
//     console.log(i)
// }

// i = 1
// while (i <= 10) {
//     console.log(i)
//     i++
// }

// i = 10
// while (i >= 1) {
//     console.log(i)
//     i--
// }

// i = 10
// do {
//     console.log(i)
//     i--;
// } while (i >=1)


// let i = 10

// for (i = 1; i <= 10; i++) {
//     if (i % 3 == 0) {
//         continue
//     }
//     console.log(i)
// }