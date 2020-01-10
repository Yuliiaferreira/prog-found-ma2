/*
  Module Assignment 2
*/

// question 1
// create an array with 3 items

var petArray = ["cat", "cow", "dog"];

// question 2
// console log the value of the second item

console.log(petArray[1]);

// question 3
// add the new item

petArray.push("sheep");

// question 4
// console log how many items there are now

console.log(petArray.length);

// question 5
// create an object

var catObject = {
  name: "Snow",
  colour: "white",
  age: 2,
}

// question 6
// console log the value of the third property

console.log(catObject.age);

// question 7
// create an array with the value of object

var catArray = [
  {
    "Katt",
    "gray",
    2
  }
];

// question 8
// console log each property of each object inside

for (var i = 0; i < catArray.length; i++) {
  console.log(catArray[i].name);
  console.log(catArray[i].colour);
  console.log(catArray[i].age);
}

// question 9
// create a function

function logToConsole(moduleAssignment) {
  console.log(moduleAssignment);
}

// question 10
// call the function and pass in the value
var newValue = "donkey";
logToConsole(newValue);
