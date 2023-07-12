// 1. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red","Green","White","Black"];

const myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join("+"))
console.log(myColor.join())
console.log(myColor.join(""))

// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"


// 4.Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function mostFrequentItem(arr) {
    let frequentItems = [];
    let maxCount = 0;
    let maxItems = '';

    for (let i = 0; i < arr.length; i++) {
        let currentItem = arr[i]
        console.log(`This is iteration value:`, currentItem)
        // if (frequentItems[currentItem] === undefined || frequentItems[currentItem] === null || frequentItems[currentItem] === '' ) {
        //     frequentItems[currentItem] = 1
        // } else {
        //     frequentItems[currentItem]++
        // }

        frequentItems[currentItem] = frequentItems[currentItem] ? frequentItems[currentItem] + 1 : 1;

        console.log(`This is count:`, frequentItems[currentItem])

        if (frequentItems[currentItem] > maxCount) {
            maxCount = frequentItems[currentItem];
            maxItems = currentItem;
        }
    }

    let result = `${maxItems}(${maxCount} times)`

    return result
}

const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

console.log(`Output:`, mostFrequentItem(arr))
// Sample Output : a ( 5 times )

// 5.Write a JavaScript program to find all the unique values in a set of numbers.
// Test Data :
// [1, 2, 2, 3, 4, 4, 5]
// [1, 2, 3, 4, 5]
// [1, -2, -2, 3, 4, -5, -6, -5]

function removeDup(value) {
    let unique = [];

    for (let i = 0; i < value.length; i++) {
        let currentValue = value[i]
        if (!unique.includes(currentValue)) {
            unique.push(currentValue);
        }
    }

    return unique
}

const arr1 = [1, 2, 2, 3, 4, 4, 5]
console.log(removeDup(arr1))

// Expected Output:
// [1,2,3,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]

// 6. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder. 

let cylinder = {
    radius: 2,
    height: 7,
    calculate: function () {
        let volume = 3.14 * this.radius * 2 * this.height
        return volume
    }
}

// 7.Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

let volumeOfCylinder = cylinder.calculate()
console.log(volumeOfCylinder)

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

const length = Object.keys(student).length;
console.log(`Length of the object: ${length}`);
