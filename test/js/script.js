const obj = {
  name: "mohammed",
  age: 22,
  friend: {
    name: "mustafa",
    age: 22,
  },
};

var test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(test.includes(1));
console.log(test.indexOf(3));
console.log(test);
console.log(test.splice(1, 2, 4));

console.log(test);
console.log(test.length);

console.log(test.pop());
console.log(test.push(86));
console.log(test.unshift(86));
console.log(test.shift());

console.log(test.slice(0, 8));
console.log(test);

var test2 = "sdgkagsdhwehg";
console.log(test2.charAt(0));
console.log(test2[0]);
console.log(test2.includes("g"));
console.log(test2.concat("gdagquek"));

var P = document.querySelector("p");
var ele1 = document.getElementById("p");
var ele2 = document.getElementById("test");
var allP = document.querySelectorAll("test");
ele1.innerHTML = "<span>test</span>";
ele2.innerText = "<span>test</span>";
console.log(ele2.textContent);
allP.forEach((e) => {
  e.style.color = "green";
  e.style.cssText = "font-size : 18px;";
});
ele1.addEventListener("click", (e) => {
  console.log(e);
});
ele2.addEventListener("dblclick", (e) => {
  console.log(e);
});
const newEle = document.createElement("p");
newEle.setAttribute("class", "test");
newEle.id = "test2";
newEle.appendChild(
  document.createTextNode(
    "lorem loremloremloremloremloremloremloremloremlorem "
  )
);
ele1.appendChild(newEle);
ele1.removeChild(newEle);

ele1.remove();
