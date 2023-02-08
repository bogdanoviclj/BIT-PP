"use strict";

// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

var arr = [2, 4, 7, 11, -2, 1];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    newArr.push(arr[i]);
}
console.log(newArr);

// 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

var arr = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
function removeDuplicates(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {  
        if (newArr.indexOf(arr[i]) === -1) {  
            newArr.push(arr[i]);
            newArr.sort(function(a, b) {return a - b});
        }  
    }
     return newArr;
}
console.log(removeDuplicates(arr));

// 3.
// a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
// b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

function checkOdd(arr) {
    if (arr.length % 2 !== 0) {
            return true;
        }
}
console.log(checkOdd([1, 2, 9, 2, 1]));

function countEl(arr) {
    var count = 0;
    if (arr.length % 2 === 0) {
        return "Error";
    } 
    else {
        var m = Math.floor (arr.length / 2);
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < arr[m]) {
                count++;
            }
        }
        return count;
    }
}
console.log(countEl([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

// 4. Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }

// function findSEl(arr) {
//     var s = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < s) {
//             s = arr[i];
//         }
//     }
//     return {minValue: s, minLastIndex: arr.lastIndexOf(s)};
// }
// console.log(findSEl([1, 4, -2, 11, 8, 1, -2, 3]));

function findSmallestEl(arr) {
    var min = Math.min(...arr);
    var lastIndex = arr.lastIndexOf(min);
    return {minValue: min, minLastIndex: lastIndex};
}
console.log(findSmallestEl([1, 4, -2, 11, 8, 1, -2, 3]));

// 5.
// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

function findElLessThanGivenEl(arr, el) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < el) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(findElLessThanGivenEl([2, 3, 8, -2, 11, 4], 6));

// b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]
// program to check if an array contains a specified value

// function findPro(arr) {
//     var low = arr.map(function (e) {
//         return e.toLowerCase();
//     });
//     var result = low.filter(function (e) {
//         return e.includes("pro");
//         });   
//     return result; 
// }
// console.log(findPro(["JavaScript", "Programming", "fun", "product"]));

function findPro(arr) {
    var newArr = [];
    var string = arr.join(" ");
    for (var i = 0; i < arr.length; i++) {
        string = arr[i].toLowerCase();
        if (string.startsWith("pro")) {
        newArr.push(arr[i]);
        }       
    }
    return Array.from(newArr)
}
console.log(findPro(["JavaScript", "Programming", "fun", "product"]));

// c. Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it.

function filterEl(arr, cb) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(filterEl([2, 3, 8, -2, 11, 4], function(e) {return e<6}));
console.log(filterEl(["JavaScript", "Programming", "fun", "product"], function(e) {return e.toLowerCase().startsWith("pro")}));

// 6.
// a. Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,
// [

// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}
// ]

var list = [
    {name: "milk", price: 150.2},
    {name: "eggs", price: 200.356}, 
    {name: "apples", price: 100.569741},  
    {name: "bananas", price: 180.6523},
    {name: "potato", price: 90.4631}
];

// b. Write a function that calculates the total price of your shopping list.

function calculateTotal(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i].price;
    };
    return total;
};
console.log(calculateTotal(list));

// c. Write a function that calculates the average product price of your shopping list.
// Print this value with the precision of three decimals.

function calculateAverage(arr) {
    var average = calculateTotal(arr) / arr.length;
    return average.toFixed(3); 
}
console.log(calculateAverage(list));

// d. Write a function that prints out the name of the most expensive product on your
// shopping list. Write the name in uppercase.

function printMostExpensive(arr) {
    var ex = arr[0].price;
    var result;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].price > ex) {
            ex = arr[i].price;
        }
        result = arr[i].name;
    }
    return result.toUpperCase();
}
console.log(printMostExpensive(list));

// 7.
// a. Write a function that checks if a given string is written in all capitals.

function isAllCapitals(string) {
    if(string === string.toUpperCase()) {
        return "String is written in all capitals.";
    } else {
        return "String is not written in all capitals.";
    }
};
console.log(isAllCapitals("lorem"));
console.log(isAllCapitals("LoReM"));
console.log(isAllCapitals("LOREM"));

// b. Write a function that checks if a given string contains any digits.

function isDigits(string) {
    for (var i = 0; i < string.length; i++) {
        if (isFinite(string[i])) {
            return "String contains a digit.";
        }
    }
    return "String does not contain a digit.";
};
console.log(isDigits("Lorem"));
console.log(isDigits("Lorem3"));
console.log(isDigits("Lor3em"));

// c. Write a function that checks if a given string is a valid hexadecimal color.

function isHexColor(string) {
    if (string.charAt(0) !== "#") {
        return "String is not a valid hexadecimal color.";
    };
    if (string.length !== 4 && string.length !== 7) {
        return "String is not a valid hexadecimal color.";
    }
    for (var i = 1; i < string.length; i++) {
        if (string[i] === 0 || string[i] === 1 || string[i] === 2 || string[i] === 3 || string[i] === 4 || string[i] === 5 || string[i] === 6 || string[i] === 7 || string[i] === 8 || string[i] === 9 || string[i] === "A" || string[i] === "B" || string[i] === "C" || string[i] === "D" || string[i] === "E" || string[i] === "F" || string[i] === "a" || string[i] === "b" || string[i] === "c" || string[i] === "d" || string[i] === "e" || string[i] === "f") {
            return "String is a valid hexadecimal color.";
        } 
    }
}
console.log(isHexColor("#614e71"));

// d. Write a function that checks if a given number belongs to the interval from 1900
// to 2018.

function checkIfNumBelongsToInterval(number) {
    if (number >= 1900 && number <= 2018) {
        return "The number " + number + " belongs to the interval from 1900 to 2018."
    } else {
        return "The number " + number + " not belong to the interval from 1900 to 2018."
    };
};
console.log(checkIfNumBelongsToInterval(200));
console.log(checkIfNumBelongsToInterval(2009));

// e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).

// function validator(str1, str2, str3, number) {
//     return {stringValidator: isAllCapitals(str1), passwordValidator: isDigits(str2), colorValidator: isHexColor(str3), yearValidator: checkIfNumBelongsToInterval(number)}
// }
// console.log(validator("Password", "password123", "#614E71", 2017));

function Validator(str1, str2, str3, number) {
    this.stringValidator = isAllCapitals(str1);
    this.passwordValidator = isDigits(str2);
    this.colorValidator = isHexColor(str3);
    this.yearValidator = checkIfNumBelongsToInterval(number);
}
var v = new Validator("Password", "password123", "#614E71", 2017);
console.log(v);

// 8. Write a function that calculates a number of days to your birthday.

// Input: 25 February
// Output: 5 days

function calculateDays(string) {
    var birthday = Date.parse(string);
    var today = Date.parse(new Date ());
    return Math.round((birthday - today)/1000/60/60/24);
}; 
console.log(calculateDays("31 May 2023"));

// 9. Write a function that for a given departure and arrival time calculates the time the trip
// takes.
// Input: 8:22:13 11:43:22
// Output: 3 hours 21 minutes 9 seconds

function calculateTripTime(departure, arrival) {
    var hours, minutes, seconds;
    hours = arrival.hours - departure.hours;
    minutes = arrival.minutes - departure.minutes;
    seconds = arrival.seconds - departure.seconds;
    return hours + " hours " + minutes + " minutes " + seconds + " seconds";
};
var departure = {
    hours: 8,
    minutes: 22,
    seconds: 13
};
var arrival = {
    hours: 11,
    minutes: 43,
    seconds: 22
};
console.log(calculateTripTime(departure, arrival));

// 10.
// a. Write a constructor function that creates points in space. Each point in space has
// its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.

function Points(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
};
var fun = new Points(3, 5, 1)
console.log(fun);

// b. Write a function that calculates the distance between two points in the space.

function calculateDistance(a, b) {
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2) + Math.pow(b.z - a.z, 2));
};
var a = new Points (2, 5, 3);
var b = new Points (4, 7, 9);
console.log(calculateDistance(a, b));

// 11.
// a. Write a function that generates a random integer value between 5 and 20.

function randomNumber(a, b) {
    return Math.round(((b - a) * Math.random() + a));
};
console.log(randomNumber(5, 20));

// b. Write a function that generates a random integer value between 50 and 100.

var randomNumber = function(a, b) {
    return Math.round(((b - a) * Math.random() + a));
};
console.log(randomNumber(50, 100));

// c. Write a function which expects a number and a callback generator function and
// returns an array of numbers produced by the generator function.

function generateAnArray(n, cb) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        if (cb(i)) {
            arr.push(cb(i));
        }
    }
    return arr;
}
console.log(generateAnArray(15, function(e) {return e * 2}));

// 12. Write a function that shuffles the elements of a given array.

// Input: [3, 6, 11, 2, 9, 1]

// Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)

function shuffleArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};
console.log(shuffleArray([3, 6, 11, 2, 9, 1]));