const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
   e.preventDefault();
   console.log("Button was clicked...");
   console.log(e);
   console.log(e.target.className);

   document.querySelector("#my-form").style.background = "yellow";
   document.querySelector(".items").lastElementChild.innerHTML =
      "<h1>Hello</h1>";
});

// const items = document.querySelector(".items");
// Uncomment each line...
// items.remove();
// items.lastElementChild.remove();
// items.firstElementChild.textContent = "Hello...";

// const btn = document.querySelector(".btn");
// btn.style.background = "red";

// Single selector...
// console.log(document.getElementById("my-form"));
// console.log(document.querySelector(".container"));

// Multiple selector...
// console.log(document.querySelectorAll(".item"));

// const items = document.querySelectorAll(".item");
// items.forEach((item) => console.log(item));

// const myArrowFunction1 = (a, b) => a + b;
// console.log(myArrowFunction1(3, 5));

// const myArrowFunction2 = (a, b) => {
//     // Do more complex stuff...
//     return a + b;
// }
// console.log(myArrowFunction2(3, 7));

// let myArray = [
//     {
//         id: 1,
//         name: "Milton Chandradas"
//     },
//     {
//         id: 2,
//         name: "Monika Gupta"
//     },
//     {
//         id: 3,
//         name: "Livingstone Chandradas"
//     }
// ]

// console.log(myArray);
// console.log(myArray[1].name);

// let myFunction = function(a, b) {
//     return a + b;
// }

// console.log(myFunction(3, 5));

// let myObject = {
//    firstName: `Milton`,
//    lastName: `Chandradas`,
//    age: 47,
//    employed: true,
// };

// console.log(myObject);
// console.log(myObject.firstName);

// let myArray = ["Milton", "Chandradas", 47, true];
// console.log(myArray);
// console.log(myArray[0]);

// let myNumber = 3;
// let myString = `Milton`;
// let myBoolean = true;
// let myNull = null;
// let myUndefined;

// console.log(myNumber);
// console.log(myString);
// console.log(myBoolean);
// console.log(myNull);
// console.log(myUndefined);
