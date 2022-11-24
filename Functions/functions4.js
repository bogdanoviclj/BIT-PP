/* 1.	Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no  */
function checkIfElementIsInArray (e, array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === e) return "yes";
	}
	return "no";
}
console.log(checkIfElementIsInArray(3, [5, -4.2, 18, 7]));

/* 2.	Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */
function multiplieBy2 (array) {
	var b = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i] > 0) b[i] = array[i] * 2;
		else b[i] = array[i];
	}
	return b;
}
console.log(multiplieBy2([-3, 11, 5, 3.4, -8]));

/* 3.	Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */
function findMinAndMinIndex (array) {
	min = array[0];
	for (var i = 0; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i];
			var minIndex = i;
		}
	}
	return min + ", " + minIndex;
}
console.log(findMinAndMinIndex([4, 2, 2, -1, 6]));

/* 4.	Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2 */
function findSecondMin(array) {
	var min1 = array[0];
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i] < min1) min1 = array[i];
		else newArray[newArray.length] = array[i];
	}
	var min2 = newArray[0];
	for (var i = 0; i < newArray.length; i++) {
		if (newArray[i] < min2) min2 = newArray[i];
	}
	return min2;
}
console.log(findSecondMin([4, 2, 2, -1, 6]));

/* 5.	Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */
function calculatePosElements (array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] > 0) sum += array[i];
	}
	return sum;
}
console.log(calculatePosElements([3, 11, -5, -3, 2]));

/* 6.	Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
	Output: The array isn’t symmetric. */

function isArraySymmetric (array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === array[array.length - 1 - i]) return "The array is symmetric."
	}
	return "The array is not symmetric."
}
console.log(isArraySymmetric([3, 4, 12, 8]));

/* 7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] */
function intertwineArrays(a, b) {
	var c = [];
	for (var i = 0; i < a.length; i++) {
		c[c.length] = a[i];
		c[c.length] = b[i];
	}
	return c;
}
console.log(intertwineArrays([4, 5, 6, 2], [3, 8, 11, 9]));


/* 8.	Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */
function concatenateArrays(a, b) {
	var c = [];
	for (var i = 0; i < a.length; i++) {
		c[c.length] = a[i];
	}
	for (var i = 0; i < b.length; i++) {
		c[c.length] = b[i];
	}
	return c;
}
console.log(concatenateArrays([4, 5, 6, 2], [3, 8, 11, 9]));

/* 9.	Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8] */
function deleteElFromArray(e, a) {
	var b = [];
	for (var i = 0; i < a.length; i++) {
		if (a[i] !== e) b[b.length] = a[i];
	}
	return b;
}
console.log(deleteElFromArray(2, [4, 6, 2, 8, 2, 2]));

/* 10.	Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */
function insertElement(e, p, a) {
	var b = [];
	if (p > a.length) return "Error";
	for (var i = 0; i < a.length; i++) {
		if (i === p) b[b.length] = e;
		b[b.length] = a[i];
	}
	return b;
}
console.log(insertElement(78, 3, [2, -2, 33, 12, 5, 8]));