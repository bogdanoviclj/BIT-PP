/* 1. Create several variables using different letter cases and beginning characters. Check if they still exist if you refer to them in different case - does case matter here? Try to declare a variable starting with number as the first character. */
var P = 15;
console.log(P);
var name = "Ljubica";
console.log(name);
var Surname = "Bogdanovic";
console.log(Surname);

/* 2. Save a string (text) describing your current mood in a variable and print it out in console. */
var mood = "I am happy!";
console.log(mood);

/* 3. Feel free to play around in the console and get familiar with it. */

/* 4. Play around in the console: add, subtract, multiply and divide some numbers. Use numbers stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3. Why do we get these results? */
var a = 10;
var b = 15;
var c = 5;
console.log(a/c);
console.log(b*c);
console.log(a+b);
console.log(a-b+c);
console.log(a-b);
var d = 3 - 2 - 31;
var e = 3 * 5 - 7 / 3;
var f = 4 / 2 - 1.14 * 3;
console.log(d);
console.log(e);
console.log(f);

/* 5. How many grams weight 1.2kg of bananas?  */
var bananas = 1.2;
var k = 1000;
var result = "";
result = "1.2 kg of bananas is " + bananas * k + " grams.";
console.log(result);

/* 6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What about Tom who is being late half an hour? It is hard to be on time these days… */
var Anna = 5;
var Tom = 30;
var m = 60;
var resultAnna = "";
var resultTom = "";
resultAnna = "We wait for Anna " + Anna * m + " seconds.";
resultTom = "We wait for Tom " + Tom * m + " seconds";
console.log(resultAnna);
console.log(resultTom);

/* 7. How many MB of additional memory we have if we buy a 4GB USB stick? How many news articles each in size 98KB can fit in it? */
var usb = 4;
var g = 1024;
var news = 98;
var m = 1024;
var result = "";
var resultNews = "";
result = "We have " + usb * g + " MB of memory.";
resultNews = usb * g * m / news + " news articles can fit in our 4 GB USB stick."
console.log(result);
console.log(resultNews);

/* 9. Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7? */
var a = 1;
console.log(a = a * 2);
var a = 1;
console.log(a *= 2);
var b = 2;
console.log(b = b + 3);
var b = 2;
console.log(b += 3);
var c = 5;
console.log(c = c / 5);
var c = 5;
console.log(c /= 5);
var d = 4;
console.log(d = d - 7);
var d = 4;
console.log(d -= 7);

/* 10. Create the following variables:
	- a variable containing your name,
	- a variable containing your age,
	- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types. */
var name = "Ljubica";
var _age = 30;
var Cat = "I do not have a cat.";
console.log(name);
console.log(typeof name);
console.log(_age);
console.log(typeof _age);
console.log(Cat);
console.log(typeof Cat);

/* 11. Check which type are these values:
	- “number”
	- true
	- null
	- “false”
	- 56 */

console.log(typeof "number");
console.log(typeof true);
console.log(typeof null);
console.log(typeof "false");
console.log(typeof 56);

/* 12. Check how good you are at guessing the Boolean equivalent of different values using the console. Do you remember how to check for a Boolean equivalent of a value? */
var a = "number";
var b = true;
var c = null;
var d = "false";
var e = 56;
console.log(typeof !!a);
console.log(typeof !!b);
console.log(typeof !!c);
console.log(typeof !!d);
console.log(typeof !!e);

/* 13. Use the console to check the results you think should go in the following table: */
var p = true;
var q = true;
console.log(p && q);
console.log(p || q);
var p = true;
var q = false;
console.log(p && q);
console.log(p || q);
var p = false;
var q = true;
console.log(p && q);
console.log(p || q);
var p = false;
var q = false;
console.log(p && q);
console.log(p || q);

/* 14. If the variable age stores the information about user’s age, how we can check whether it contains a correct value? Write expressions for checking:
●	Is age negative value
●	Is age greater than 120 */

var age = 30;
var negative = age < 0;
var greater = age > 120;
console.log(negative);
console.log(greater);

/* 15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If we store the current speed value in the variable speed. Write an expression which will check if we are driving drive safely or not? (true if we are driving safe and false if not)  */
var speed = 110;
console.log(speed < 120 && speed > 60);

