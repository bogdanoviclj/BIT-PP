/* 1.	Write a program that calculates the maximum of two given numbers. */
function getMax(a, b) {
    if (!isFinite(a) || !isFinite(b)) return "Invalid input!";
    if (a > b) return a;
    if (a < b) return b;
    return "Numbers are equal!";
}
console.log(getMax(2, -15));

/* 2.	Write a program that checks if a given number is odd. */
function checkIfNumberIsEvenOrOdd(n) {
    if (!parseInt(n)) return "Invalid input!";
    if (n % 2 === 0) return n + " is even.";
    return n + " is odd.";
}
console.log(checkIfNumberIsEvenOrOdd(12));

/* 3.	Write a program that checks if a given number is a three digit long number. */
function checkIfNumberIs3DigitLong(n) {
    if (!isFinite(n)) return "Invalid input!";
    if (n > 99 && n < 1000) return "This is a three digit long number.";
    return "This is not a three digit long number."
}
console.log(checkIfNumberIs3DigitLong(356));

/* 4.	Write a program that calculates an arithmetic mean of four numbers. */
function calculateArithmeticMean(a, b, c, d) {
    if (!isFinite(a) || !isFinite(b) || !isFinite(c) || !isFinite(d)) return "Invalid input!";
    var result = (a + b + c + d) / 4;
    return result;
}
console.log(calculateArithmeticMean(10, 20, 30, 40));
 
/* 5.	Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
*****
*    *
*    *
*    *
*****      */
function drawSquare(n) {
    var result = "";
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i === 0 || i === n - 1 || j === 0 || j === n - 1) result += "*";
            else result +=" ";
            }
        if (i !==n) result += "\n";
    }
    return result;
}
console.log(drawSquare(10));

/* 6.	Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *     */
function drawChart(a, b, c) {
    var result = "";
    for (var i = 0; i < a; i++) {
        result += "* ";
        }
    if (i !== a - 1) result += " \n";
    for (var i = 0; i < b; i++) {
        result += "* ";
        }
    if (i !== b - 1) result += " \n";
    for (var i = 0; i < c; i++) {
        result += "* ";
        }
    if (i !== c - 1) result += " \n";
    return result;
}
console.log(drawChart(5, 3, 7));

/* 7.	Write a program that calculates a number of digits of a given number. */
function numberOfDigits(n) {
    var a = n + "";
    return (a.length)
}
console.log(numberOfDigits(123456789));

/* 8.	Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3 */
function numberOfNumber(a, e) {
    var result = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) result++;
    }
    return result;
} 
console.log(numberOfNumber([2, 4, 7, 8, 7, 7, 1], 7));
 
/* 9.	Write a program that calculates the sum of odd elements of a given array. */
function sumOfOddElements(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) sum += array[i];
    }
    return sum;
}
console.log(sumOfOddElements([7, 2, 6, 1]));

/* 10.	Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A. */
function numberOfLetter(s) {
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === "a" || s[i] === "A") result ++;
    }
    return result;
}
console.log(numberOfLetter("abcdABCDabcdABCD"));

/* 11.	Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. */
function concatenateStringNTimes(string, n) {
    var result = "";
    for (var i = 0; i < n; i++) {
        result += string;
    }
    return result;
}
console.log(concatenateStringNTimes("abc", 4));