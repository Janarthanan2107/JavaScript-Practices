// 1.Write a JavaScript program to find the sum of all the numbers in an array.

const sumArr = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum
}

let value = [2, 2, 2, 2,]

console.log(sumArr(value))

// 2.Write a JavaScript program to find the largest and smallest elements in an array.

const numbers = [10, 5, 3, 8, 2];

function findSmallestandLargestNumber(arr) {
    let smallest = arr[0];
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return { smallest, largest };
}

console.log(findSmallestandLargestNumber(numbers));

// 3.Write a JavaScript program to check if a given number is positive, negative, or
// zero.

function check(arr) {
    if (arr === 0) {
        console.log("num is zero")
    } else if (arr > 0) {
        console.log("num is positive")
    } else {
        console.log("num is negative")
    }
}

check(-20)

// 4. Write a JavaScript program to check if a given string, is a palindrome.

function palindrome(arr) {
    let str = arr
    let newStr = str.split("").reverse().join("")
    console.log(newStr)

    if (str === newStr) {
        console.log("it is a palindrom")
    } else {
        console.log("it is not a palindrom")
    }
}

let str = "malayalam"
palindrome(str)

// 5.Write a JavaScript program to reverse a string without using the built-in reverse ()
// method.

function reverse(arr) {
    let reverseStr = ""

    for (let i = arr.length - 1; i >= 0; i--) {
        reverseStr += arr.charAt(i)
    }

    console.log(reverseStr)

    return reverseStr;
}

reverse("janarthanan")

// 6. find the product of three numbers and display its sign positive or negative in alert

const product1 = 3;
const product2 = -7;
const product3 = 2;

const product = product1 * product2 * product3;

if (product > 0) {
    alert("The sign is +");
} else if (product < 0) {
    alert("The sign is -");
} else {
    alert("The product is zero");
}

// 7 .remove the items in dropdown using js

const remove = document.getElementById('remove');
const selectElement = document.getElementById('colorSelect');
const selectedIndex = selectElement.selectedIndex;
console.log(selectedIndex)

function removeColor() {
    if (selectedIndex !== -1) {
        selectElement.remove(selectedIndex);
    }
}

remove.addEventListener("click", removeColor)

// 8. Write a JavaScript conditional statement to sort three numbers. Display an alert
// box to show the results.

const num1 = 0;
const num2 = -1;
const num3 = 4;

let sortedNumbers;

if (num1 >= num2 && num1 >= num3) {
    if (num2 >= num3) {
        sortedNumbers = num1 + "," + num2 + "," + num3
    } else {
        sortedNumbers = num1 + "," + num3 + "," + num2
    }
} else if (num2 >= num1 && num2 >= num3) {
    if (num1 >= num3) {
        sortedNumbers = num2 + "," + num1 + "," + num3
    } else {
        sortedNumbers = num2 + "," + num3 + "," + num1
    }
} else {
    if (num1 >= num2) {
        sortedNumbers = num3 + "," + num1 + "," + num2
    } else {
        sortedNumbers = num3 + "," + num2 + "," + num1
    }
}

// alert("Sorted numbers: " + sortedNumbers);

// 9. Write a JavaScript function that returns a string that has letters in alphabetical
// order.
// Example string: &#39;webmaster&#39;
// Expected Output : &#39;abeemrstw&#39;

function sortString(str) {
    const sortedArray = str.split('').sort();
    const sortedString = sortedArray.join('');
    return sortedString;
}

const inputString = 'webmaster';
const sortedString = sortString(inputString);
console.log("Sorted string:", sortedString);


// 10.Write a JavaScript program that adds a keydown event listener to a text input to
// detect when the &quot;Enter key&quot; is pressed.

const inputElement = document.getElementById('textInput');

inputElement.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        console.log("Enter key pressed");
    }
});
