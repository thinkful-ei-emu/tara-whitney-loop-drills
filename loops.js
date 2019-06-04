'use strict';
// Max and Min
// Max: Take an array of numbers, return the largest number in the array
function max(array) {
  let i = 0;
  let maxNum = array[0];

  while (i < array.length) {
    if(array[i] > maxNum) {
      maxNum = array[i];
    }
    i++;
  }
  return maxNum;
}

// Min: Take an array of numbers, return the smallest number in the array
function min(array) {
  let i = 0;
  let minNum = array[0];

  while (i < array.length) {
    if(array[i] < minNum) {
      minNum = array[i];
    }
    i++;
  }
  return minNum;
}

//computes the average given an array of numbers
function average(arr) {
  let sum = 0;
  arr.forEach(i => sum += i);
  return sum / arr.length;
}

//create a function that takes in a function and number
function repeat(fn, n) {
  for(let i=0; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye(){
  console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);

hello();

//filters an array based on the conditions in fn
function filter(arr, fn) {
  newArray = [];
  arr.forEach(function(element) {
    if (fn(element)) {
      newArray.push(element);
    }
  })
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES