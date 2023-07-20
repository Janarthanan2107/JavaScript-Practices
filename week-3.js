// 1.Palindrome Checker: Write a function that takes a string as input and returns true if it
// is a palindrome (reads the same backward as forward), and false otherwise. Ignore
// spaces, punctuation, and capitalization.
function palindromeChecker(str) {
    let string = str.toLowerCase().replace(/[^a-z0-9]/g, '').split("").reverse().join("")

    return string
}

console.log(palindromeChecker("malayalam"))

// 2.FizzBuzz: Write a function that prints numbers from 1 to 100. For multiples of 3, print
// &quot;Fizz&quot; instead of the number. For multiples of 5, print &quot;Buzz&quot; instead of the number. For
// numbers that are multiples of both 3 and 5, print &quot;FizzBuzz.&quot;

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let number = i
        if (number % 3 === 0 && number % 5 === 0) {
            console.log("fizzBuzz")
        } else if (number % 3 === 0) {
            console.log("fizz")
        } else if (number % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzz()

// 3.Factorial: Write a function that calculates the factorial of a given positive integer. The
// factorial of a non-negative integer n is the product of all positive integers less than or
// equal to n.
function factorial(n) {
    let result = 1;
    if (n < 0) {
        return undefined;
    } else if (n === 0) {
        return 1;
    } else {
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

console.log(factorial(10));
console.log(factorial(-1));


// 4.Prime Number: Write a function that determines if a given number is a prime number
// (greater than 1 and only divisible by 1 and itself).
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(2));

// 5.Fibonacci Sequence: Write a function that generates the nth Fibonacci number. The
// Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the
// two preceding ones.
function fibonacci(n) {
    let prevPrev = 0;
    let prev = 1;
    let current;
    if (n <= 0) {
        return undefined;
    } else if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        for (let i = 3; i <= n; i++) {
            current = prevPrev + prev;
            prevPrev = prev;
            prev = current;
        }
        return current;
    }
}

console.log(fibonacci(2));


// 6.Missing Number: Given an array containing n distinct numbers taken from 0, 1, 2, ...,
// n, write a function to find the missing number. The array is not sorted, and there is only
// one missing number.
function findMissingNumber(nums) {
    const n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
    for (let i = 0; i < n; i++) {
        actualSum += nums[i];
    }
    return expectedSum - actualSum;
}

console.log(findMissingNumber([0, 1, 3, 4, 5]));

// 7.Reverse a String: Write a function that takes a string as input and returns the string
// reversed.
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("12345"));

// 8.Title Case: Write a function that takes a sentence as input and returns the sentence in
// title case (the first letter of each word is capitalized).
function titleCase(sentence) {
    let words = sentence.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    let titleCaseSentence = words.join(' ');

    return titleCaseSentence;
}

console.log(titleCase("i am a student"));

// 9.Anagram Checker: Write a function that checks whether two given strings are
// anagrams of each other (contain the same characters but in a different order).
function isAnagram(str1, str2) {
    const sanitizeString = function (str) {
        return str.toLowerCase().replace(/[^a-z0-9]/g, '');
    };

    const sanitizedStr1 = sanitizeString(str1);
    const sanitizedStr2 = sanitizeString(str2);

    if (sanitizedStr1.length !== sanitizedStr2.length) {
        return false;
    }

    const sortedStr1 = sanitizedStr1.split('').sort().join('');
    const sortedStr2 = sanitizedStr2.split('').sort().join('');

    const result = sortedStr1 === sortedStr2;
    return result
}

console.log(isAnagram("listen", "silent"));

// 10.Longest Word: Write a function that takes a sentence as input and returns the
// longest word in the sentence. If there are multiple words with the same length, return
// the first one.

function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
    let longestWordLength = 0;
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        const currentWordLength = currentWord.length;

        if (currentWordLength > longestWordLength) {
            longestWord = currentWord;
            longestWordLength = currentWordLength;
        }
    }
    return longestWord;
}

console.log(findLongestWord("Coding is fun")); 