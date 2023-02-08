// 1.	Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
// 	Input array: [4, 5, 11, 9]
// 	Output array: [ 9, 5, 11, 4]
(function(array) {
       var temp = array[0];
       array[0] = array[array.length - 1];
       array[array.length - 1] = temp;
    console.log(array);
    return array;
})([4, 5, 11, 9]);


// 2.	Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
// Input: 4 5
// Output: 20 
(function(a, b) {
    console.log(a * b);
    return a * b;
}) (4, 5);

// 3.	Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
// 	Input: prograMming
// 	Output: progra**ing, 2
(function(string) {
    var s = "";
    var result = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "m" || string[i] === "M") {
            s += "*";
            result++;
        }
        else s += string[i];
    }
    console.log(s + ", " + result);
    return s + ", " + result;
}) ("prograMming");

// 4.	Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
// Input: pera peric
// 	Output: pera.peric@gmail.com
(function(name, surname) {
    var email = "";
    console.log(name + "." + surname + "@gmail.com");
    return name + "." + surname + "@gmail.com";
}) ("pera", "peric");

(function(name) {
    var email = "";
    for (var i = 0; i < name.length; i++) {
        if (name[i] === " ") email += ".";
        else email += name[i];
    }
    email += "@gmail.com";
    console.log(email);
    return email;
}) ("pera peric");

// 5.	Write a function that returns a function that calculates a decimal value of the given octal number. 
// Input: 034
// Output: 28
var result = (function returnFunction() {
    function decimalValue(a) {
        return (a);
    }
    return decimalValue(034);
}) ();

console.log(result);

// 6.	Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid. 
// Input: JSGuru 
// Output: Your password is invalid!

// 	Input: JSGuru123
// 	Output: Your password is cool! 
function isValidPassword(password, cb1, cb2) {
    var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (var i = 0; i < password.length; i++) {
        for (var j = 0; j < digits.length; j++) {
            if (password.length >= 6 && password[i] === digits[j]) {
                return successCallback();
            }
        }
    }
    return errorCallback();
}

function successCallback() { 
    return "Your password is cool!";
}

function errorCallback() {
    return "Your password is invalid!";
}

console.log(isValidPassword("JSGuru123", successCallback, errorCallback));

// 7.	Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3] 
function filter(arr, cb) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var el = arr[i];
        var isNumberIsOdd = cb(el);
        if (isNumberIsOdd) {
            newArr[newArr.length] = arr[i]
        }
    }
    return newArr;
}

function checkIfNumberIsOdd(n) {
    return n % 2 !== 0;
}

var result = filter([2, 8, 11, 4, 9, 3], checkIfNumberIsOdd);
console.log(result);