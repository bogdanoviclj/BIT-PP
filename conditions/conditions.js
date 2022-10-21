/* Task 1. Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
Sample numbers: 3, -7, 2 
Output: The sign is -  */
var a = 3;
var b = -7;
var c = 2;
var result = "";
if (a * b * c < 0) {
    result = "The sign is -";
} 
else if (a * b * c > 0) {
result = "The sign is +";
}
console.log(result);

/* Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
Sample numbers: -5, -2, -6, 0, -1 
Output: 0 */
var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;
var result;
if (a > b && a > c && a > d && a > e){
    result = a;
} else if (b > a && b > c && b > d && b > e ){
    result = b;
} else if (c > a && c > b && c > d && c > e ){
    result = c;
} else if (d > a && d > b && d > c && d > e ){
    result = d;
} else if (e > a && e > b && e > dc && e > d ){
    result = e;
}
console.log(result);

/* Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
var a = 0;
var b = -1; 
var c = 4;
if (a > b && b > c){
    console.log(a, b, c);
} else if (a > c && c > b){
    console.log(a, c, b);
} else if (b > a && a > c){
    console.log(b, a, c);
} else if (b > c && c > a){
    console.log(b, c, a);
} else if (c > a && a > b){
    console.log(c, a, b);
} else if (c > b && b > a){
    console.log(c, b, a);
}

/* Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10  					Sample input: 7
Output: 10 / 2 = 5					Output: X  */
var a = 10;
var result = "";
var b;
if (typeof a === "number"){
    if (a % 2 ===0){
        b = a / 2;
        result = a + " / 2 = " + b;
        console.log(result);
    }
    else {
        console.log("X");
    }    
}

/* Task 5. Write a program that compares two numbers and display the larger. Result should be displayed in the console. */
var a = 26;
var b = 21;
if (a > b) {
    console.log(a);
}
else if (b > a){
    console.log(b);
}
else {
    console.log("a = b");
}

/* Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
Sample Input: 60°C
	Output : 60°C is 140 °F */
var c = 60;
var f;
var result = "";
if (f = (9 * c / 5) + 32){
    result = c + "°C is " + f + "°F";
}
    console.log(result);

/* Task 7. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double difference between that number and 13.
	Sample Input: 11					Sample Input: 32
	Output : 2						Output : 38 */
var a = 32;
var result;
if (a > 13){
     result = (a - 13) * 2;
    } else {
        result = 13 - a;
    }
 console.log(result);

 /* Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
	Sample Input: 12,5					Sample Input: 8,8
	Output : 17						Output : 48 */
var a = 8;
var b = 8;
var sum;
if (a !== b){
    sum = a + b;
} else {
    sum = 3 * (a + b);
}
console.log(sum);

/* Task 9. Write a JavaScript program to check two given numbers and print “true” if one of the number is 50 or if their sum is 50.
Sample Input: 5,54			Sample Input: 6,50			Sample Input: 40,10
	Output : -				Output : true				Output : true */
var a = 40;
var b = 10;
if (a === 50 || b === 50 || a + b === 50){
    console.log("true")
}

/* Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400, and print range in which number belongs.
Sample Input: 13			Sample Input: 34			Sample Input: 256
	Output : -				Output : 20 ⇔ 100			Output : 100 ⇔ 400 */
var a = 256;
if (a > 20 && a < 100){
    console.log("20 ⇔ 100");
} else if (a > 100 && a < 400){
    console.log("100 ⇔ 400");
} else {
    console.log("-");
}

/* Write a program to check if the number is divisible by 2. If it is, print even, if not, print odd. 
Sample numbers: 3, 4, 9 (check one at the time) 
Output: odd, even, odd */
var a = 9;
var result = "";
if (a % 2 === 0) {
    result = "even";
} else {
    result = "odd";
}
console.log(result);

/* Write a program to check if the number is divisible by 3 and 5. If it is, print that number.
Sample numbers: 15, 12 (check one at the time) 
Output: 15 */
var a = 15;
if (a % 3 === 0 && a % 5 === 0 ) {
console.log(a);
}
