"use strict";

// 1.	Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

// 	12345 -> 54321

function reverseNumber(n) {
    var string = n.toString();
    var arr = string.split("");
    var result = arr.sort(function(a, b) {
        return b - a;
    })
    string = arr.join("");
    return +string;
}
console.log(typeof(reverseNumber(12345)));

// 2.	Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

// “Webmaster” -> “abeemrstw”

function sortStringAlphabetical(string) {
    var arr = string.toLowerCase().split("");
    var sortedArr = arr.sort();
    return sortedArr.join("");
}
console.log(sortStringAlphabetical("Webmaster"));

// 3.	Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"

function alphabetizeWords(string) {
    var arr = string.split(" ");
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        var newArr = arr[i].split("").sort();
        result += newArr.join("") + " "; 
    }
      return result;
}
console.log(alphabetizeWords("Republic Of Serbia"));

// 4.	Write a function to split a string and convert it into an array of words.

// 	"John Snow" -> [ 'John', 'Snow' ] 
  
function splitString (string) {
    return string.split(" ");
}
console.log(splitString("John Snow"));

// 5.	Write a function to convert a string to its abbreviated form. 

// 	"John Snow" -> 	"John S."

function abbreviatedString(string) {
    var newString = string.substring(0, 6);
    return newString + ".";
}
console.log(abbreviatedString("John Snow"));

// 6.	Write a function that adds string to the left or right of string, by replacing it’s characters.

// 	'0000', ‘123’, 'l' -> '0123'
// '00000000', ‘123’, 'r' -> '12300000'

function addString(string1, string2, side) {
    var result = "";
    var length;
    if (side === "l") {
        length = string1.length - string2.length;
        result = string1.slice(0, length) + string2;
    };
    if (side === "r") {
        length = string2.length - 1;
        result = string2 + string1.slice(length, -1);
    };
    return result;
}
console.log(addString("0000", "123", "l"));
console.log(addString("00000000", "123", "r"));

// 7.	Write a function to capitalize the first letter of a string and returns modified string.

// "js string exercises" -> "Js string exercises"

function capitalizeFirstLetter(string) {
    var first = string.charAt(0).toUpperCase();
    return first + string.substring(1, string.length);
}
console.log(capitalizeFirstLetter("js string exercises"));

// 8.	Write a function to hide email addresses to protect them from unauthorized users.

// 	"somerandomaddress@example.com" -> "somerand...@example.com"

function hideEmailAddress(email) {
    var s = email.split("@");
    var first = s[0];
    var last = s[1];
    first = first.substring(0, first.length / 2);
    return first + "...@" + last;
}
console.log(hideEmailAddress("somerandomaddress@example.com"));

// 9.	Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
//        var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//        var LOWER = 'abcdefghijklmnopqrstuvwxyz';

// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"

function swapCaseChar(string) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            newString += string[i].toLowerCase();
        } else {
            newString += string[i].toUpperCase();
        };
    };
    return newString;
}
console.log(swapCaseChar("The Quick Brown Fox"));