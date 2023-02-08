// 1.	Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 
function countVowels(string) {
    var result = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "a" || string[i] === "A" || string[i] === "e" || string[i] === "E" || string[i] === "i" || string[i] === "I" || string[i] === "o" || string[i] === "O" || string[i] === "u" || string[i] === "U") result++; 
    }
    return result;
}
console.log(countVowels("Vowels are a, e, i, o, and u as well as A, E, I, O, and U."));

// 2.	Write a function that combines two arrays by alternatingly taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
function combineArrays(a, b) {
    var c = [];
    for (var i = 0, j = 0; i < a.length, j < b.length; i++, j++) {
        c[c.length] = a[i];
        c[c.length] = b[j];
    }
    return c;
}
console.log(combineArrays(["a", "b", "c"], [1, 2, 3])); 

// 3.	Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
function rotateElements(a, k) {
    var b = [];
    for (var i = 0; i < a.length; i++) {
        if (i < a.length - k) b[b.length] = a[k + i];
        else b[b.length] = a[i + k - a.length];
    }
    return b;
}
console.log(rotateElements([1, 2, 3, 4, 5, 6, 7, 8 , 9, 10], 4)); 

// 4.	Write a function that takes a number and returns array of its digits.
function makeArrayFromNumber(n) {
    var a =[];
    n = n + "";
    for (var i = 0; i < n.length; i++) {
        a[i] = parseInt(n[i]);
    }
    return a;
}
console.log(makeArrayFromNumber(123456)); 

// 5.	Write a program that prints a multiplication table for numbers up to 12. 
function multiplicateTable(n) {
    var result = "";
    for (var i = 1; i <= 12; i++) {
        result += n + " * " + i + " = " + n * i + "\n";
    }
    return result;
}
console.log(multiplicateTable(2));

// 6.	Write a function to input temperature in Centigrade and convert to Fahrenheit.
function convertCtoF(C) {
    return C + "°C is " + (C * 9 / 5 + 32) + "°F.";
}
console.log(convertCtoF(40));

// 7.	Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
function findMax(a) {
    var max = a[0];
    var b = [];
    for (var i = 0; i < a.length; i++) {
        if (isFinite(a[i])) b[b.length] = a[i];
    }
    for (var i = 0; i < b.length; i++) {
        if (b[i] > max) max = b[i];
    }
    return max;
}
console.log(findMax([1, 2, 6, 16, -4, 3, Infinity, NaN, null])); 

// 8.	Write a function to find the maximum and minimum elements. Function returns an array.
function findMinMax(a) {
    var min = a[0];
    var max = a[0];
    var b = [];
    for (var i = 1; i < a.length; i++) {
        if (isFinite(a[i])) b[b.length] = a[i];
    }
    for (var i = 0; i < b.length; i++) { 
        if (b[i] < min) min = b[i];
        if (b[i] > max) max = b[i];
    }
    return [min, max];
}
console.log(findMinMax([1, 2, 6, 16, -4, 3, Infinity, NaN, null]));

// 9.	Write a function to find the median element of array.

function mediana(array) {
    for(i=0;i<array.length;i++){
        for(j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    arr=[];
    var al = array.length;
    var res = al/2;

    if(al%2!=0){
        res+=0.5;
        arr[arr.length] = array[res];
        
    }else{
        console.log(res);
        arr[arr.length] = array[res-1];
        arr[arr.length] = array[res];
    }
    return arr;    
}
console.log(mediana([3, 1, 5, 6, 1, 9]));

// 10.	Write a function to find the element that occurs most frequently.
function findMostFrequent(array) {
    var frequent = 0;
    var mostFrequent = 0;
    var element = 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] === array[j]) frequent++;
        }
        if (frequent > mostFrequent) {
            mostFrequent = frequent;
            element = array[i]
        }
        frequent = 0;
    }
    return element;
}
console.log(findMostFrequent([1, 2, 3, 1, 2, 1, 3, 1, 5, 4])); 

// 11.	Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.
function returnSomeElements(array) {
    if (array.length === 0) return array;
    if (array.length % 2 !== 0) return array[0] + ", " + array[(array.length - 1) / 2] + ", " + array[array.length - 1];
    else return array[0] + ", " + array[array.length - 1];
}
 console.log(returnSomeElements([1, 2, 3, 4, 5, 6]));
 console.log(returnSomeElements([1, 2, 3, 4, 5]));
 console.log(returnSomeElements([]));

// 12.	Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.
function findAverage(array) {
    var average;
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    average = sum / array.length
    return average;
}
console.log(findAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
 
// 13.	Write a function to find all the numbers greater than the average.
function findElGreaterThanAverage(array) {
    var average;
    var sum = 0;
    var result = [];
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    average = sum / array.length;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > average) result[result.length] = array[i];
    }
    return result;
}
console.log(findElGreaterThanAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 14.	The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// ●	Starvation: less than 15
// ●	Anorexic: less than 17.5
// ●	Underweight: less than 18.5
// ●	Ideal: greater than or equal to 18.5 but less than 25
// ●	Overweight: greater than or equal to 25 but less than 30
// ●	Obese: greater than or equal to 30 but less than 40
// ●	Morbidly obese: greater than or equal to 40
function BMI(weight, height) {
    var bmi = weight / (height * height);
    if (bmi < 15) return "Starvation";
    else if (bmi < 17.5) return "Anorexic";
    else if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 25) return "Ideal";
    else if (bmi >= 25 && bmi < 30) return "Overweight";
    else if (bmi >= 30 && bmi < 40) return "Obese";
    else if (bmi >=40) return "Morbidly obese" + bmi;
}
console.log(BMI(80, 1.85));

// 15.	Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********
function printRectangular(array) {
    var result = "";
    var count = 0;
    var max = 0;
    var dif;

    for (var i = 0; i < array.length; i++) {
        if (array[i].length > max) {
            max = array[i].length;
        }
    }

    function printStars() {
        var res = "";
        for (var i = 0; i < max + 4; i++) {
            res += "*";
        }
        return res;
    }

    function printEmpty(n) {
        var res = "";
        for (var i = 0; i < n; i++) {
            res += " ";
        }
        return res;
    }

    result += printStars() + "\n";

    for (var i = 0; i < array.length; i++) {
        dif = max - array[i].length + 1;
        result += "* " + array[i] + printEmpty(dif) + "*" + "\n";
        count = 0;
    }

    result += printStars();
    return result;
}
console.log(printRectangular(["Hellooooo", "World", "in", "a", "frame"]));