/* 1.	Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000] */
function makeNumberArray(array) {
	newArray = [];
	for (var i = 0; i < array.length; i++) {
		if (isFinite(array[i])) newArray[newArray.length] = parseFloat(array[i]);
	}
	return newArray;
}
console.log(makeNumberArray(["1", "21", undefined, "42", "1e+3", Infinity]));

/* 2.	Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
	Output: “015false-2247” */
function joinArrayIntoString(array) {
	var string = "";
	for (var i = 0; i < array.length; i++) {
		if (isFinite(array[i]) && array[i] !== null) string += array[i];
	}
	return string;
}
console.log(joinArrayIntoString([NaN, 0, 15, false, -22, '', undefined, 47, null, Infinity]));

/* 3.	Write a program to filter out falsy values from the array.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47] */
function noFalsy(array) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		if (!!array[i] === true) newArray[newArray.length] = array[i];
	}
	return newArray;
}
console.log(noFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/* 4.	Write a program that calculates a number of integer values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3 */
function countIntegers(array) {
	var result = 0;
	for (var i = 0; i < array.length; i++) {
		if (parseInt(array[i]) === array[i]) result++;
	}
	return result;
}
console.log(countIntegers([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));

/* 5.	Write a program that calculates a number of float values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2 */
function countFloats(array) {
	var result = 0;
	for (var i = 0; i < array.length; i++) {
		if (parseFloat(array[i]) === array[i] && parseInt(array[i]) !== array[i]) result++;
	}
	return result;
}
console.log(countFloats([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));
