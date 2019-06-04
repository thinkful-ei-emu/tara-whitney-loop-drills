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
    i++
  }
  return minNum;
}

//computes the average given an array of numbers
function average(arr) {
  let sum = 0;
  arr.forEach(i => sum += i);
  return sum / arr.length;
}
