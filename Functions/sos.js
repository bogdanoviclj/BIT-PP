// 1.	Write a function that checks if a given string contains digit 5.
// Input: “1b895abd” 
// Output: true

// Input: “1bser9re”
// Output: false
function checkIf5IsInString(string) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "5") return true;
    }
    return false;
}
console.log(checkIf5IsInString("1b895abd"));
console.log(checkIf5IsInString("1bser9re"));

// 2.	Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”
function replaceStringInString(string) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "J" || string[i] === "S") result += "*";
        else result += string[i];
    }
    return result;
}
console.log(replaceStringInString("Programming in JS is super interesting!"));

// 3.	Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’ 
// Output: “Good morning” 
function insertCharInString(string, pos, char) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if (i === pos - 1)  result += char + " ";
        else result += string[i];
    }
    return result;
}
console.log(insertCharInString("Goo morning", 4, "d"));

// 4.	Write a function that deletes a character from the given position in the string. 
// Input: “Goodd morning!”, 3 
// Output: “Good morning!” 
 function deleteCharFromString(string, pos) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if (i !== pos) result += string[i];
    }
    return result;
 }
 console.log(deleteCharFromString("Goodd morning!", 3));

// 5.	Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]
function deleteEverySecondElFromArray(array){
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) result[result.length] = array[i];
    }
    return result;
}
console.log(deleteEverySecondElFromArray([3, 5, 1, 8, 90, -4, 23, 1, 67]));

// 6.	Write a function that replaces the elements of the given array between two positions with their doubled values. 
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]
function replaceElWithDoubleValue(array, from, to) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (i >= from && i <= to) result[result.length] = array[i] * 2;
        else result[result.length] = array[i];
    }
    return result;
}
console.log(replaceElWithDoubleValue([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));

// 7.	Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
// Output: true
function checkIfFirstArrIsInSecondArr(a, b) {
    var result = "";
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            if (a[i] === b[j]) result = "true";
            else result = "false";
        }
    }
    return result;
}
console.log(checkIfFirstArrIsInSecondArr([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));

// 8.	Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
// Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
// Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]
function sortArray(array) {

    function countAInString(string) {
        var count = 0;
        for (var i = 0; i < string.length; i++) {
            if (string[i] === "a" || string[i] === "A") {
                count++;
            }
        }
        return count;
    }

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (countAInString(array[i]) < countAInString(array[j])) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
console.log(sortArray(["apple", "tea", "amazing", "morning", "JavaScript"]));

// 9.	Write a function that prints out the date of the next day. 
// Output:  25. 10. 2018. 
function printNextDay(d, m, y) {
    if (m === 2) {
        if (d < 28) {
            d++;
        } else if (d === 28) {
            d = 1; 
            m++; 
        }
    } else if (m === 4 || m === 6 || m === 9 || m === 11) {
        if (d < 30) {
            d++;
        }
        else if (d === 30) {
            d = 1; 
            m++; 
        }
    } else if (m === 12 && d === 31) {
        d = 1;
        m = 1;
        y++;
    }
    else {
        if (d < 31) {
            d++;
        } 
        else if (d === 31) {
            d = 1; 
            m++; 
        }
    }
    console.log(d + ". " + m + ". " + y + ".")
    return d + ". " + m + ". " + y + ".";
}
printNextDay(30, 4, 2022);

// 10.	Write a function that prints out the date of the previous day. 
// Output:  23. 10. 2018. 
function printPreviousDay(d, m, y) {
    if (m === 3) {
        if (d > 1) {
            d--;
        }
        else if (d === 1) {
            d = 28; 
            m--; 
        }
    } else if (m === 5 || m === 7 || m === 10 || m === 12) {
        if (d > 1) {
            d--;
        }
        else if (d === 1) {
            d = 30; 
            m--; 
        }
    } else if (m === 1 && d === 1) {
        d = 31;
        m = 12;
        y--;
    }
    else {
        if (d > 1) {
            d--;
        } 
        else if (d === 1) {
            d = 31; 
            m--; 
        }
    }
    console.log(d + ". " + m + ". " + y + ".")
    return d + ". " + m + ". " + y + ".";
}
printPreviousDay(1, 3, 2022);

// 11.	Write a function that prints out an array of the numbers aligned from the right side.
// Input: [78, 111, 4, 4321]
// Output: 
//   78
//  111  
//    4
// 4321
function printNumbers(array) {
    var result = "";
    var max = 0;
    for (var i = 0; i < array.length; i++) {
        var element = array[i] + "";
        if (element.length > max) {
            max = element.length;
        }
    }

    function generateEmptySpace(n) {
        var res = "";
        for (var i = 0; i < n; i++) {
            res += " ";
        }
        return res;
    }

    for (var i = 0; i < array.length; i++) {
        var element = array[i] + "";
        var diff = max - element.length;
        result += generateEmptySpace(diff) + element + "\n";
    }
    return result;
}
console.log(printNumbers([78, 111, 4, 4321]));