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
  let newArray = [];
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

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

//Hazard alert that tells you the location of the hazard and how many times that alert has been issued
function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function(location){
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    if(warningCounter === 1) {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    } else {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    }
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const flashFloodWarning = hazardWarningCreator('Flash Flood');
const mudSlide = hazardWarningCreator('Giant Mud Slide');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');

//takes an array of movements by a turtle, returns new array with total steps taken each instance//
function turtleSteps(arr) {

  const filteredArray = arr.filter(instance => instance[0] >= 0 && instance[1] >= 0)

  const stepsArray = filteredArray.map(element => element[0] + element[1]);

  stepsArray.forEach(function(element, index) {
    if (element === 1) {
      console.log(`Movement ${index+1}: ${element} step`)
    }
    else {
      console.log(`Movement ${index+1}: ${element} steps`)
    }  
  })
}

turtleSteps([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]);

// Reduce

// iterate through an array of words, make a string
// critera: length = 3 -> add a space character, + add to acumulator
// critera: otherwise, captialize the LAST character, + add to acumulator

function decode(string) {
  
  const newArray = string.split(' ');
  
  const newSentence = newArray.reduce(
    function(accumulator, word) {
      if(word.length === 3) {
        accumulator += ' ';
      } else {
        accumulator += word[word.length - 1].toUpperCase();
      }
      return accumulator;
    }, ''
  );
  return newSentence;
}

decode('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest');