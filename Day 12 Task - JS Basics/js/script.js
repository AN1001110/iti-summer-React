var firstName = "Mohammed";
var age = 22;
var NotNum = NaN;
var boolData = true;
var ObjData = {
  name: "Mohammed",
  age: 22,
};
var Undefined = undefined;
var nothing = null;
console.log(
  "\\ 'name' ==> \\ " + firstName + ' "Type of Data" \t \n' + typeof firstName
);
age += 2;
age *= 2;
age /= 2;
age %= 2;
age -= 2;
age--;
age++;
age = 22;
console.info(age);
var userAge = prompt("enter your age");
if ((age > userAge && age <= 50) || age === userAge) {
  console.warn("your age is closer than we have");
  if (age) {
    console.log(age);
  }
} else if (userAge > 51) {
  1 > 2 ? console.log(true) : console.log(false);
  console.error("your age is  not closer than we have");
} else {
  console.log("none of them");
}

switch (age) {
  case 22:
    console.log("your age is ", age);
    break;

  default:
    console.log("no data");
    break;
}
for (let index = 0; index < array.length; index++) {
  console.log(index);
}
var i = 0;
do {
  i++;
  console.log(i);
} while (i != 3);
while (i !== 6) {
  console.log(i);
}
function func1() {
  return true;
}
var func2 = function () {
  return false;
};
var func3 = () => {
  return "Hi ";
};
