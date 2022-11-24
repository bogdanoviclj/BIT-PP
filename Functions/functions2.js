/* 1.	Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false  */
function checkString(s) {
    if (typeof s === "string") return "true";
    else return "false";
}
console.log(checkString(12));

/* 2.	Write a function to check whether a string is blank or not.

"My random string" -> false
" " -> true
12 -> false
false -> false  */
function checkStringIsBlank(s) {
    if (s === " ") return "true";
    else return "false";
}
console.log(checkStringIsBlank(false));

/* 3.	Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"  */
function concatenateString(string, n) {
    var result = "";
    for (var i = 0; i < n; i++) {
        result += string;
    }
    return result;
}
console.log(concatenateString("Ha", 3));

/* 4.	Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2  */
function numberOfLetter(string, l) {
    var number = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === l) number ++;
    }
    return number;
}
console.log(numberOfLetter("My random string", "n"));

/* 5.	Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1. */
function findFirstPosition(string, l) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === l) return i;
    }
    return -1;
}
console.log(findFirstPosition("My random string", "n"));

/* 6.	Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1. */
function findLastPosition(string, l) {
    for (var i = string.length - 1; i >= 0; i--) {
        if (string[i] === l) return i;
    }
    return -1;
}
console.log(findLastPosition("My random string", "n"));

/* 7.	Write a function to convert string into an array. Space in a string should be represented as “null” in new array. 

"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]  */
function stringToArray(string) {
    var a = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            a[i] = null;
        }
        else {
            a[i] = string[i];
        }
    }
    return a;
}
console.log(stringToArray("My random string"));

/* 8.	Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. */
function checkIfNumberIsPrime(n) {
    var result = "It is a prime number.";
    if (n === 1) return "1 is not a prime number";
    else if (n > 1) {
        for (var i = 2; i < n; i++) {
            if (n % i === 0) {
                result = "The number is not a prime";
                break;
            }
        }
    }
    return result;
}
console.log(checkIfNumberIsPrime(10));

/* 9.	 Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"  */
function spaceToSeparator(string, separator) {
    if (!separator) separator = "-";
    var result = "";
    for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") result += separator;
    else result += string[i];
    }
    return result;
}
console.log(spaceToSeparator("My random string"));

/* 10.	 Write a function to get the first n characters and add “...” at the end of newly created string.  */
function getFirstNChar(string, n) {
    var result = "";
    if (n > string.length) return ("Ivalid input");
    for (var i = 0; i < string.length; i++) {
        if (i < n) {
            result += string[i];
        }
    }
    result += "...";
    return result;
}
console.log(getFirstNChar("Random", 4));

/* 11.	 Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]  */
function arrayStringToNumber(a) {
    var b = [];
    for (var i = 0; i < a.length; i++) {
        if (isFinite(a[i])) b[b.length] = parseFloat(a[i]);
    }
    return b;
}
console.log(arrayStringToNumber(["1", "21", undefined, "42", "1e+3", Infinity]));
  
/* 12.	 Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.  */
function calculateYearsUntilRetirement(sex, n) {
    var result = "You are already retired";
    var years = "";
    if (sex === "Male" || sex === "male") {
        years = 65 - n;
        if (n < 65) result = "You still have " + years + " years until retirement";
    }
    if (sex === "Female" || sex === "female") {
        years = 60 - n;
        if (n < 60) result = "You still have " + years + " years until retirement";
    }
    return result;
}
console.log(calculateYearsUntilRetirement("female", 40));

/* 13.	Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th  */
function makeNumberSuffix(n) {
    if (n % 100 >= 11 && n % 100 <= 13) {
        return n + "th";
    }
    switch(n % 10) {
        case 1: 
        return n + "st";
        case 2: 
        return n + "nd";
        case 3:
        return n + "rd";
    }
    return n + "th";
}
console.log(makeNumberSuffix(22));
