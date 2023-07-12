'use strict';
// 1.	Subarray Sum Equals K: Given an array of integers and a target sum k, write a function that returns the total number of continuous subarrays whose sum equals k. For example, for the input array [1, 1, 1] and k = 2, the output should be 2.


// 2.	Merge Intervals: Given an array of intervals representing start and end times, write a function that merges overlapping intervals and returns a new array of non-overlapping intervals. For example, for the input array [[1, 3], [2, 6], [8, 10], [15, 18]], the output should be [[1, 6], [8, 10], [15, 18]].
// let inputArr = [[1, 3], [2, 6], [8, 10], [15, 18]]
// let newArr = []

// let interval = inputArr.slice(1)
// let pushing = newArr.push(interval)
// console.log(newArr)

// 3.	Climbing Stairs: Write a function that calculates the number of distinct ways to climb to the top of a staircase with n steps. You can either climb 1 or 2 steps at a time. For example, for n = 3, the output should be 3.
// let n = 3

// for (let i = 1; i < n; i++) {
//     // n[i] = n
//     console.log(i)
// }

// 4.	Longest Substring Without Repeating Characters: Given a string, write a function that returns the length of the longest substring without repeating characters. For example, for the input "abcabcbb", the output should be 3.
// let longName = "acbcabcbb";

// let splits = longName.split("")
// console.log(splits)

// let newName = [];

// for (let i = 0; i < splits.length; i++) {
//     console.log(!newName.includes(splits[i]))
//     if (!newName.includes(splits[i])) {
//         newName.push(splits[i]);
//     }
// }

// console.log(newName.length)

// 5.	Container With Most Water: Given an array of non-negative integers representing the heights of vertical lines, write a function that calculates the maximum area of water that can be contained between two lines. For example, for the input [1, 8, 6, 2, 5, 4, 8, 3, 7], the output should be 49.


// 6.	Next Permutation: Implement a function that generates the next permutation of a given sequence of integers in lexicographic order. If there is no next permutation, return the permutations in ascending order. For example, for the input [1, 2, 3], the output should be [1, 3, 2].


// 7.	First Missing Positive: Given an unsorted integer array, write a function that finds the smallest missing positive integer. For example, for the input [3, 4, -1, 1], the output should be 2.


// 8.	Meeting Rooms: Given an array of meeting time intervals, write a function that determines if a person could attend all meetings without any overlap. For example, for the input [[0, 30], [5, 10], [15, 20]], the output should be false


// 9.	Implement a function to get elements by tag name (document.getElementsByTagName() method)
// •	The getElementsByTagName method of Document interface returns an HTMLCollection of elements with the given tag name.
// •	For example, document.getElementsByTagName('div') returns a collection of all div elements in the document.


// 10.	Find the missing letter
// •	Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// •	You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// •	The array will always contain letters in only one case.


// Example:
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'


// 1.	String Compression: Write a function that takes a string as input and compresses it by replacing consecutive repeated characters with the character followed by the count. If the compressed string is longer than the original string, return the original string. For example, if the input is "aabcccccaaa", the output should be "a2b1c5a3".

function compressedString(str) {
    let compressed = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        let nextChar = str[i + 1]
        // console.log(currentChar)
        // console.log(nextChar)
        if (currentChar === nextChar) {
            count++
            // console.log(count)
        } else {
            compressed += currentChar + count;
            count = 1;
            console.log(compressed)
        }
    }

    return compressed;
}

const input = 'aabcccccaaa';
console.log(compressedString(input))

// 2.	Longest Common Prefix: Write a function that takes an array of strings as input and returns the longest common prefix among them. If there is no common prefix, return an empty string. For example, if the input is ["flower", "flow", "flight"], the output should be "fl".

function commonPrefix(str) {
    if (str.length === 0) {
        return ' '
    }

    let prefix = ''

    for (let i = 0; i < str[0].length; i++) {
        const char = str[0][i]
        console.log(char)
        for (const string of str) {
            if (string[i] !== char) {
                return prefix;
            }
        }
        prefix += char
    }
    return prefix
}

const content = [`flower`, `flow`, `flight`]
commonPrefix(content);

function isPrime(number) {
    if (number <= 1) {
        return false
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

// let value = prompt("prime Number is?")
// let prime = isPrime(value)
// if (isPrime !== true) {
//     console.log(`${value} is a prime Number`)
// } else {
//     console.log(`${value} is not a prime Number`)
// }

function isBalancedBrackets(str) {
    const stack = []

    for (let char of str) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char)
        } else {
            const top = stack.pop();
            if ((char === ')' && top !== '(') || (char === '}' && top !== '{') || (char === ']' && top !== '[')) {
                return false;
            }
        }
        stack.length === 0
    }
    console.log(stack)

}

isBalancedBrackets("{[()()]}")

// 7.	Anagram Check: Write a function that takes two strings as input and determines if they are anagrams of each other. Anagrams are words or phrases formed by rearranging the letters of another word or phrase. For example, "listen" and "silent" are anagrams.

let str1 = 'ACT'
let str2 = 'CAT'

str1 = str1.toLowerCase()
str2 = str1.toLowerCase()

str1 = str1.split("")
str2 = str2.split("")

str1 = str1.sort()
str2 = str2.sort()

str1 = str1.join("")
str2 = str2.join("")

if (str1 === str2) {
    console.log(`it is anagram`)
} else {
    console.log(`it is not anagram`)
}



let subarrays = [1, 1, 1]
let sum = 0;
const k = 2

for (let i = 0; i < subarrays.length; i++) {
    sum += subarrays[i]
    console.log(sum += subarrays[i])
}

if (sum == k) {
    console.log(true)
} else {
    console.log(false)
}

function longestSubstring(elements) {
    let unique = ''
    for (let i = 0; i < elements.length; i++) {
        // console.log(!unique.includes(elements[i]))
        if (!unique.includes(elements[i])) {
            unique += elements[i];
        }
    }
    return unique;
}

let arr = "abcdabcdea"
let remove = longestSubstring(arr)
// console.log(remove.length)


function findMissingNumber(arr) {

    let array = arr.sort().slice(1)
    //after slice [1,3,4]
    let missingNumber = null;

    for (let i = 1; i <= array.length + 1; i++) {
        
        console.log(i)
        console.log(array)
        console.log(array.length + 1)
        console.log(i++)

        if (!arr.includes(i)) {
            missingNumber = i
        }
    }

    return missingNumber
}

let number = [3, 4, -1, 1]
findMissingNumber(number)