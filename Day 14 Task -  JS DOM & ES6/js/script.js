"use strict";
const div = document.getElementById("test");
const img = document.querySelector("img");
const input = document.querySelector("input");
input.addEventListener("change", (e) =>
  console.log(e.target, "from change event")
);
input.addEventListener("focus", (e) =>
  console.log(e.target, "from change focus")
);
document.addEventListener("keydown", (e) => {
  if (e.target == "F12") {
    console.log("not allowed");
    e.preventDefault();
  }
});
document.body.addEventListener("contextmenu", (e) => {
  console.log("not allowed");
});
img.addEventListener("dragstart", (e) => {
  console.log(" img start move");
});
img.addEventListener("dragend", (e) => {
  console.log(" img end move");
});
div.addEventListener("click", () => {
  console.log("you clicked div");
});

//  * Template Literals
const userName = "Mustafa";
console.log(`my friend name is ${userName}`);

// * Tagged Templates
function getVars(string, ...params) {
  console.log(...params);
  console.log(string);
}
getVars`hello ${userName} how are you ?`;

// ! Spread Operator
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newList = [list];
console.log(newList);
let Obj = { name: "mohammed", age: 33, friend: { name: "mustafa", age: 22 } };
let newObj = { list };
console.log(newObj);
// ! Destructing
let [userName2, age2] = ["mohammed", 22];
console.log(userName2, age2);
let {
  name: userName3,
  age,
  friend: { name: userName4 },
} = Obj;
console.log(userName3, age, userName4);

// for of
for (let i of list) {
  console.log(i);
}
// for in
for (let i in list) {
  console.log(i); // index
}
for (let i in Obj) {
  console.log(i); // key
  console.log(Obj[i]); // value
}

// ! Higher Order Function

//  * map
let newList2 = newList.map((value) => {
  return value ** 2; // return new arr after custom
});
//  * forEach
let forEach = newList.forEach((value) => {
  console.log(value ** 2); // return new arr after custom
});
//  * filter
let newList4 = newList.filter((value) => {
  return value > 2; // return new arr after achieve condition
});
//  * find
let first = newList.find((value) => {
  return value > 2; // return ele after achieve condition
});
//  * find
let firstIndex = newList.find((value) => {
  return value > 2; // return index of ele after achieve condition
});
