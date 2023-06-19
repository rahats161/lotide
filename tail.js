const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion Passed ${actual} === ${expected}`);
  else
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
};
const arrayTail = [];
let j = 0;
const tail = function(arrayElement) {
  for (let i = 1; i < arrayElement.length; i++) {
    arrayTail[j] = arrayElement[i];
    j++;
  }
};


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length,3);