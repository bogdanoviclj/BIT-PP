/* 1.	Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ] */
function switchMinMax (a) {
    var min = a[0];
    var max = a[0];
    var minIndex = 0;
    var maxIndex = 0;
    var temp;
    for (var i = 1; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
            minIndex = i;
        }
        if (a[i] > max) {
            max = a[i];
            maxIndex = i;
        }  
    }
    temp = a[minIndex];
    a[minIndex] = a[maxIndex];
    a[maxIndex] = temp;  
    return a;
}
console.log(switchMinMax([ 3, 500, 12, 149, 53, 414, 1, 19 ]));

/* 2.	Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ] */
function changeArray(a) {
    var b = [];
    for (var i = 0; i < a.length; i++) {
        b[i] = a[i] / 2 + 5;
        if (b[i] === 0) b[i] = 20;
    }
    return b;
}
console.log(changeArray([ 3, 500, -10, 149, 53, 414, 1, 19 ]));

/* 3.	Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam. */
function getGrades(names, points) {
    var result = "";
    for (var i = 0; i < names.length; i++) {
        if (points[i] < 51) result += names[i] + " acquired " + points[i] + " points and failed to complete the exam. \n";
        else if (points[i] < 61) result += names[i] + " acquired " + points[i] + " points and earned 6. \n";
        else if (points[i] < 71) result += names[i] + " acquired " + points[i] + " points and earned 7. \n";
        else if (points[i] < 81) result += names[i] + " acquired " + points[i] + " points and earned 8. \n";
        else if (points[i] < 91) result += names[i] + " acquired " + points[i] + " points and earned 9. \n";
        else result += names[i] + " acquired " + points[i] + " points and earned 10. \n"; 
    }
    return result;
}
console.log(getGrades([ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]));

/* 4.	(skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ] */
	
/* 5.	(skip :))Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ] */
	
/* 6.	Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000 */
function calculate() {
    var sum = 0;
    for (var i = 0; i < 1001; i++) {
        if (i % 2 === 0) sum += i;
        if (i % 2 !== 0 && i < 500) sum -= i;
    }
    sum *= 12.5;
    return sum;
}
console.log(calculate());

/* 7.	Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa  */
function makeStringFromArray (a) {
    var s = "";
for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i]. length; j++) {
        if (a[i].length > 1 && j < 2) s += a[i][j];
    }
}
    return s;
}
console.log(makeStringFromArray([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]));
	
/* 8.	Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  "Belgrade Institute of Technology"
Output: ygolonhceT fo etutitsnI edargleB */
function reverseString(string) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
        result += string[string.length - 1 - i];
    }
    return result;
}
console.log(reverseString("Belgrade Institute of Technology"));

/* 9.	Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...). */
function combineTwoNumbers() {
    var result = "";
    for (var i = 1; i <= 7; i++) {
        for (var j = 1; j <= 7; j++) {
            if (i !== j) result += "(" + i + ", " + j + ") ";
        }
    }
    return result;
}
console.log(combineTwoNumbers());

/* 10.	Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false */
function isNumberAPrime(n) {
    var result = "The number is a prime number.";
    if (n === 1) result = "The number is not a prime number.";
    else if (n > 1) {
        for (var i = 2; i < n; i++) {
            if (n % i === 0) result = "The number is not a prime number."
        }
    }
    return result;
}
console.log(isNumberAPrime(116));

/* 11.	Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true */
function checkIfStringIsPalindrome(string) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === string[string.length - i - 1]) result = "true";
        else result = "false";
    }
    return result;
}
console.log(checkIfStringIsPalindrome("a nut for a jar of tuna"));

/* 12.	Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9 */
function findTheGreatestDivisor(n, m) {
    var result;
    if (m < n) {
        for (var i = 0; i <= m; i++) {
            if (m % i === 0 && n % i === 0) result = i;
        }
    }
    if (n < m) {
        for (var i = 0; i <= n; i++) {
            if (m % i === 0 && n % i === 0) result = i;
        }
    }
    return result;
}
console.log(findTheGreatestDivisor(42, 192));
