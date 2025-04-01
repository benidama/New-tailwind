const num = [12, 45, 66, 75];
function Add(a, d) {
  console.log(a + d);
}
Add(78, 34);

//Rest parameter
function RestFUN(...numbers) {
  var Sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) Sum = Sum + numbers[i];
  }
  return Sum;
}
console.log(RestFUN(34, 23, 6, 90, 32, 19));

//closure
function closureFun(el1) {
  console.log(el1);
  function Amabuye() {
    console.log("Nibyo kbx ntakubeshya kurimo.");
  }
  Amabuye();
}
closureFun("Ese koko nibyo cg nukubeshya?");
//callback function
// const num = [23, 45, 67];
function addNum(arr) {
  arr(56, 89, 12, 10);
}

addNum((...num) => {
  let sum = 0;
  for (i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log(sum);
});

//example 2
function names(n) {
  console.log(n);
}

function students(na, na1, call) {
  const name = na + ", " + na1;
  call(name);
}
students("Joanes", "Quintus", names);

//Pure or inpure function, high order function,iife, call stack, recursion...

(function () {
  console.log("I am IIFE");
})();

//string methods in js
const str = "I am here and here for you for undefined";
const index = str.indexOf("");
console.log(index);

const sl = console.log(str.slice(3, -5));
const sli = console.log(str.substring(7, 2));
const spi = console.log(str.split());
const spit = console.log(str.split(" ", 3));

//Array methods in js
const arr = [23, 56, 34, 13];

const sum = arr.map((el) => el + el);
console.log(sum);

function summation() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(summation());

const array = ["Allo", "Hello", "Hey"];

const great = arr.filter((num) => num > 30);
console.log(great);

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.
// All inputs will be valid.
function last(x) {
  const wordsAlph = x
    .split(" ")
    .sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));

  return wordsAlph;
}
console.log(last("If two words have the same last letter"));

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  for (i = 0; i <= array.length - 1; i++) {
    if (array[i] <= array[i + 1]) {
      return "yes, ascending";
    }
    if (array[i] >= array[i + 1] && array[i + 1] >= array[i + 2]) {
      return "yes, descending";
    } else {
      return "no";
    }
  }
}
console.log(isSortedAndHow([78, 23, 123, 78, 35, 98]));

// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

function logicalCalc(array, op) {
  //your code here
  let arr = array[0];
  for (let i = 1; i < array.length; i++) {
    if (op == "AND") {
      arr = arr && array[i];
    }
    if (op == "OR") {
      arr = arr || array[i];
    }
    if (op == "XOR") {
      arr = arr != array[i];
    }
  }
  return arr;
}
//another challenge
const array = [45, 34, 12, 89, 57];
