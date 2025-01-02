// const product = {
//   title: "CT Ball Pen",
//   ratings: 4,
//   offer: 5,
//   deal: true,
//   totalPrice: 285,
//   discount: "5% off",
// };

// console.log(product);

/* const profile = {
  userName: "iamsachinrv",
  posts: 36,
  followers: 569,
  following: 800,
  isFollowed: true,
  fullName: "Sachin R V",
  designation: "Creator",
  bio: "Empty Bio",
};
console.log(profile);

console.log(profile.userName);
console.log(profile["userName"]); */

// let a = 5;
// // console.log("a:", a);
// // console.log("a++:", a++);
// console.log("a++:", a++);

// let num = prompt("Enter the number");
// if (num % 5 === 0) {
//   console.log(num, "Multiple of 5");
// } else {
//   console.log(num, "Not a multiple of 5");
// }

// let marks = prompt("Enter your marks");
// if (marks >= 90 && marks <= 100) {
//   console.log("Your Grade is A");
// } else if (marks >= 70 && marks < 90) {
//   console.log("Your Grade is B");
// } else if (marks >= 60 && marks < 70) {
//   console.log("Your Grade is C");
// } else if (marks >= 50 && marks < 60) {
//   console.log("Your Grade is D");
// } else {
//   console.log("You Grade is F");
// }

// let count = "apna college";
// for (i = 1; i <= 5; i++) {
//   console.log(count);
// }

// sum of 1 to 5 numbers
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum = sum + i;
// }
// console.log("sum: ", sum);

// let i = 1;
// while (i <= 5) {
//   console.log("i is", i);
//   i++;
// }

// let sum = 0;
// let i = 1;
// while (i <= 5) {
//   sum = sum + i;
//   i++;
// }
// console.log(" sum is ", sum);

// i = 20;
// do {
//   console.log("Hello World!");
//   i++;
// } while (i < 10);

// let i = 1;
// do {
//   console.log("i is", i);
//   i++;
// } while (i <= 5);

// let str = "sachin";
// for (let i of str) {
//   console.log(" i is ", i);
// }

// const student = {
//   name: "sachin",
//   age: 20,
//   place: "shikaripur",
//   isPass: true,
// };
// for (let key in student) {
//   console.log("key is", key, " Value is", student[key]);
// }

// even numbers from 1 to 100

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//game number
// let number = 10;
// let userInput = prompt("Enter the number");

// if (userInput == number) {
//   console.log("you guessed the correct number");
// } else {
//   console.log("wrong number");
// }

// let number = 10;
// let guessNumber = prompt("enter your number");

// while (number != guessNumber) {
//   guessNumber = prompt("Wrong number, Guess again!!");
// }
// console.log("Correct number, Hurrahh!!");

// STRING METHODS

// let str = "sachin is a good boy's!";
// let str2 = "He is active";
// // let res = console.log(str);
// // let res = console.log(str.length);
// // let res = console.log(str[0]);
// // let res = console.log(str.toLowerCase());
// // let res = console.log(str.toUpperCase());
// // let res = console.log(str.trim());
// // let res = console.log(str.slice(0, 5));
// // let res = console.log(str.replace("s", "m"));
// // let res = console.log(str.replaceAll("s", "m"));
// // let res = console.log(str.charAt(1));
// // let res = str.concat(str2);
// console.log(res);

// let fullName = prompt("Enter your name: ");
// let userName = "@" + fullName + fullName.length;
// console.log(userName);

// Array
// let marks = [85, 97, 44, 37, 76, 60];
// let total = marks.length;
// let sum = 0;

// for (let val of marks) {
//   //   console.log(val);
//   sum = sum + val;
// }
// console.log("sum is ", sum);
// console.log("Avg is ", sum / total);

// console.log(`The sum of marks is ${sum} and the avg is ${sum / total}`);

// let prices = [10, 20, 30, 40, 50];
// for (let i = 0; i < prices.length; i++) {
//   let offer = prices[i] / 10;
//   prices[i] -= offer;
// }
// console.log(prices);

// Array methods

// let arr1 = [10, 20, 30, 40, 50];
// let arr2 = ["arr1", "break", "caches", "debugger"];

// console.log("array 1 is ", arr1);
// // let res = arr1.push("sachin");
// // let res = arr1.pop("30");
// // let res = arr1.toString();
// // let res = arr1.concat(arr2);
// // let res = arr1.shift();
// // let res = arr1.slice(0, 3);
// let res = arr1.splice(1, 1, 101);
// console.log(res);

// let comp = ["Microsoft", "google", "IBM", "Amazon"];
// console.log("The total array and its value is ", comp);

// // // Remove the first company from the array
// // let res = comp.shift();
// // console.log(comp);

// // // remove google and add coextrix
// // let res = comp.splice(1, 1, "coextrix");
// // console.log(comp);

// // add coextrix at end
// let res = comp.push("coextrix");
// console.log(comp);

// Function
// function mySumFunction(x, y) {
//   return x + y;
// }

// let res = mySumFunction(5, 4);
// console.log(res);

// ARROW Function
// const sum = (x, y) => {
//   console.log(x + y);
// };

// const sum = (x, y) => console.log(x + y);

// function myFun(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//       //   console.log(char);
//     }
//   }
//   return count;
// }

// // myFun(count);
// myFun("hello");

// const count = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//       //   console.log(char);
//     }
//   }
//   return count;
// };

// FOR EACH loop

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function myFunction(val) {
//   console.log(val);
// });

// USING ARROW FUNCTION
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((val, idx) => {
//   console.log(val, idx);
// });

// let arr = [1, 2, 3, 4, 5];
// arr.forEach((val) => {
//   console.log(val * val); // num**2
// });

// or

// let arr = [1, 2, 3, 4, 5];

// let calSquare = (val) => {
//   console.log(val ** 2); // num**2
// };

// arr.forEach(calSquare);

// MAP

// let arr = [1, 2, 3, 4, 5];

// let newArr = arr.map((val) => {
//   return val ** 2;
// });

// console.log(newArr);

// Filter

// let arr = [1, 2, 3, 4, 5, 6];
// const newArr = arr.filter((val) => {
//   return val % 2 === 0;
// });

// console.log(newArr);

// frst element is result and second ele is current
// 1 + 2 = 3
// 3 + 3 = 6
// 6+ 4 = 10
// o/p is 10
// let arr = [1, 2, 3, 4];
// let newArr = arr.reduce((res, val) => {
//   return res + val;
// });

// console.log(newArr);

//to find the largest number in the array
// //  return pre > current ? prev : current;  If prev is greater than current then return previous or return current
// let arr = [1, 2, 3, 4];
// let newArr = arr.reduce((pre, current) => {
//   return pre > current ? prev : current;
// });

// console.log(newArr);

// let marks = [95, 80, 70, 98, 50];

// const newArr = marks.filter((val) => {
//   return val >= 90;
// });

// console.log(newArr);

// let n = prompt("Enter the value of 'n' ");

// let arr = [];
// for (let i = 1; i <= n; i++) {
//   arr[i - 1] = i;
// }
// console.log(arr);

// const newArr = arr.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(newArr);

// // Factorial
// const newArr1 = arr.reduce((prev, curr) => {
//   return prev * curr;
// });
// console.log(newArr1);

// DOM

// let ele = window.document;
// console.log(ele); // prints the HTML elements
// console.dir(ele); // prints the JS objects

// DOM MANIPULATION

// console.dir(document.body); // null - it will not load untill or DOM elements are not accessable when we write the script tag before the body tag.

// // get element by ID
// let idVal = document.getElementById("heading");
// console.dir(idVal);

// get element by className
// let idVal = document.getElementsByClassName("myClass");
// console.dir(idVal);

// // get element by ID
// let idVal = document.getElementsByTagName("p");
// console.dir(idVal);

// // get element by querySelector     // returns a first element
// let ele = document.querySelector("p");
// console.dir(ele);

// let ele = document.querySelectorAll("p");  // returns all element
// console.dir(ele);

// just a tag : name("p")
// using ID: # need to be used
// using class: need to use .

// let ele = document.querySelector(".myClass");
// console.dir(ele);

// browser codes
// ele
// <h2 class=​"myClass">​Hello class​</h2>
// ele.tagName
// 'H2'

// let elememt = document.querySelector("div");
// console.dir(elememt);

// let elememt = document.querySelector("h1");
// console.dir(elememt);
// elememt.innerText = "New Heading"; // aigning a new value

// elememt.textContent;

// elememt.innerText;
// ("");
// elememt.textContent;
// (" Old Heading");

// let elem = document.querySelector("#heading");
// console.dir(elem.innerText);
// elem.innerText = elem.innerText + " from sachin!"; // concatination

// let box = document.querySelectorAll(".box");
// console.dir(box);

// box[0].innerHTML = "new value 1";
// box[1].innerHTML = "new value 2";
// box[2].innerHTML = "new value 3";

// or

// let box = document.querySelectorAll(".box");
// let idx = 1;
// for (div of box) {
//   div.innerText = `new value ${idx}`;
//   idx++;
// }

// let divs = document.querySelector("div");
// console.log(divs);

// let id = divs.getAttribute("class");
// console.log(id);

// let divs = document.querySelector("p");
// console.log(divs);

// // let name = divs.getAttribute("name");
// // console.log(name);

// // let para = divs.getAttribute("class");
// // console.log(para);

// let para = divs.setAttribute("class", "newClass"); //change the classname
// console.log(para);

// let divs = document.querySelector("div");
// console.log(divs);

// divs.style.backgroundColor = "blue";
// divs.style.fontSize = "26px";
// divs.innerText = "hello from JS";
// divs.style.visibility = "hidden"; // it will perform inline styling.

// create an element

// let elem = document.createElement("button");
// elem.innerText = "ClickMe!";
// console.log(elem);

// let divs = document.querySelector("div");

// divs.append(elem); // added a button at end
// divs.prepend(elem); // added a button at first
// divs.before(elem); // added a button before the strt of node
// divs.after(elem); // added a button at the end of the node]

// let par = document.querySelector("p");
// par.after(elem); // added a btn after the paragraph
// console.log(divs);

// // let newHeading = document.createElement("h1");
// // newHeading.innerText = " this is a heading added through JS";

// // let body = document.querySelector("div");
// // body.before(newHeading);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>This is a new Heading </i>";
// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p");
// para.remove("p"); // remove an element

// let bodyElem = document.querySelector("body");
// console.log(bodyElem);

// let newBt = document.createElement("button");
// newBt.innerText = "Submit!";

// bodyElem.append(newBt);

// let elem = document.querySelector("button");
// elem.style.backgroundColor = "red";
// elem.style.color = "white";

// optimized way
// let newBt = document.createElement("button");
// newBt.innerText = "Submit!";

// newBt.style.backgroundColor = "red";
// newBt.style.color = "white";

// document.querySelector("body").prepend(newBt);

// let newPara = document.createElement("p");
// newPara.innerHtml = "<i> This is added by Sachin!";

// let oldPara = document.querySelector("p");
// console.log(oldPara);

// //Browser
// p.para
// para
// oldPara
// oldPara.setAttribute("class", "newClass);
// VM19419:1 Uncaught SyntaxError: Invalid or unexpected token
// oldPara.setAttribute("class", "newClass");

// using classList

// p.para
// oldPara.classList
// DOMTokenList ['para', value: 'para']
// 0
// :
// "para"
// length
// :
// 1
// value
// :
// "para"
// [[Prototype]]
// :
// DOMTokenList
// oldPara.classList.add("newClass");
// undefined
// oldPara.classList
// DOMTokenList(2) ['para', 'newClass', value: 'para newClass']
// 0
// :
// "para"
// 1
// :
// "newClass"
// length
// :
// 2
// value
// :
// "para newClass"
// [[Prototype]]
// :
// DOMTokenList

// // Events

// Inline Event handling example
// <button onclick="console.log('Hello Sachin'); alert('hello')">
// Click me!
// </button>
// <button ondblclick="console.log('hello you clicked twice!')">
// Click me twice!
// </button>
// <div onmouseover="console.log('MouseOver done!')">This is a div</div>
// <script src="/JS/first.js"></script>

// from external Js file
// let btn1 = document.querySelector("#button1");
// btn1.onclick = () => {
//   console.log("hello Button was clicked!");
// };

// Event Object : it is a spcl object that contain the details about the event like target and type, clientX, clientY..

// let btn1 = document.querySelector("#button1");
// btn1.onclick = (evt) => {
//   console.log(evt);
//   console.log(evt.target);
//   console.log(evt.type);
//   console.log(evt.clientX, evt.clientY);
// };

// we can also pass event Object
// btn1.addEventListener("click", (evt) => {
//   console.log("button was clicked");
//   console.log(evt.type);
// });

// let div1 = document.querySelector("#division1");
// div1.addEventListener("mouseover", () => {
//   console.log("hovered");
// });

// let btn1 = document.querySelector("#button1");
// btn1.addEventListener("click", () => {
//   console.log("button was clicked - 1");
// });

// btn1.addEventListener("click", () => {
//   console.log("button was clicked - 2");
// });

// const handler3 = () => {
//   console.log("button was clicked - 3");
// };

// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//   console.log("button was clicked - 4");
// });

// btn1.removeEventListener("click", handler3);

// it was not removed because the memory location is not same

// that's why we store it in one variable and we can remove it.

//Practice mode
// let btn = document.querySelector("#btn");
// let currentMode = "light";

// btn.addEventListener("click", () => {
//   console.log("current mode", currentMode);
//   // console.log("you are trying to change mode");
//   if (currentMode === "light") {
//     currentMode = "dark";
//     document.querySelector("body").style.backgroundColor = "black";
//   } else {
//     currentMode = "light";
//     document.querySelector("body").style.backgroundColor = "white";
//   }
//   console.log("changed currentMode", currentMode);
// });

// or
// let btn = document.querySelector("#btn");
// let currentMode = "light";
// let body = document.querySelector("body");

// btn.addEventListener("click", () => {
//   console.log("current mode", currentMode);
//   // console.log("you are trying to change mode");
//   if (currentMode === "light") {
//     currentMode = "dark";
//     body.classList.add("dark");
//     body.classList.remove("light");
//   } else {
//     currentMode = "light";
//     body.classList.add("light");
//     body.classList.remove("dark");
//   }
//   console.log("changed to", currentMode);
// });

//classes and objects

// const student = {
//   fullName: "Sachin",
//   marks: 9.4,
//   fullMarks: function () {
//     console.log("marks is", this.marks); // this points to the current object that is student
//   },
// };

// const MyStudent1 = {
//   subject: "DBMS",
// };

// MyStudent1.__proto__ = student;
// // we can now access one function from object 1 to another one.

//constructor

// class ToyotaCar {
//   constructor(brand, milage) {
//     console.log("This is a constructor");
//     this.brand = brand;
//     this.milage = milage;
//   }
//   start() {
//     console.log("start");
//   }
//   stop() {
//     console.log("stop");
//   }
// }

// let fortuner = new ToyotaCar("ABC", 10); // constructor
// console.log(fortuner); // object is type toyota

// let lexus = new ToyotaCar("DCS", 20); // constructor
// console.log(lexus); // object is type toyota

//Inheritance
// class Parent {
//   hello() {
//     console.log("hello");
//   }
// }
// class child extends Parent {}

// let obj = new Parent();

// class Person {
//   constructor(name) {
//     this.species = "Homo sapiens";
//     this.name = name;
//   }
//   eat() {
//     console.log("eat");
//   }
//   sleep() {
//     console.log("sleep");
//   }
// }

// class Enginner extends Person {
//   constructor(name) {
//     super(name);
//   }
//   Work() {
//     console.log("Building a Project");
//   }
// }

// let SachinObj = new Enginner("sachin");

// class user {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   viewData() {
//     console.log("Website View");
//   }
// }

// class admin extends user {
//   editData() {
//     data = "new some value";
//   }
// }

// let student1 = new user("sachin", "abc@gmail.com");
// let student2 = new user("aman", "aman@gmail.com");

// error handling

// let a = 10;
// let b = 20;

// console.log("a+b", a + b);
// console.log("a+b", a + b);
// console.log("a+b", a + b);
// try {
//   console.log("a+b", a + bb); // error
// } catch (error) {
//   console.log("error", error);
// }
// console.log("a+b", a + b);
// console.log("a+b", a + b);
// console.log("a+b", a + b);
// console.log("a+b", a + b);

//sync and Async Programming

// sync programming
// console.log("a");
// console.log("b");
// console.log("c");
// console.log("d");
// console.log("e");

// Async programming

// function hello() {
//   console.log("hello");
// }

// setTimeout(hello, 5000); // 5Sec = 5000 milliseconds

// console.log("a");
// console.log("b");

// setTimeout(function () {
//   console.log("hello");
// }, 5000);

// // same function in arrow function
// setTimeout(() => {
//   console.log(" arrow hello");
// }, 3000);

// console.log("c");
// console.log("d");
// console.log("e");

// callbackhell

// function getData(dataId, getNextData) {
//   //2s
//   setTimeout(() => {
//     console.log("dataId", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// // getData(1, 2); // we get an error getdata is not a function so to solve this
// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });

// // solution using promise chain

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("dataId", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }

// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// // solution using async await
// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("dataId", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }

// async function getAllData() {
//   await getData(1);
//   await getData(2);
//   await getData(3);
// }

// console.log(getAllData());

// solution using async await
// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("dataId", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }

// (async function () {
//   await getData(1);
//   await getData(2);
//   await getData(3);
// })();

// promises

// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise"); // pending
//   // resolve("success"); // success
//   // reject("fail"); // fail
// });

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     //2s
//     setTimeout(() => {
//       console.log("dataId", dataId);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

// O / P
// let promise = getData(123)
// undefined
// promise
// Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "success"
// first.js:831 dataId 123
// promise

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise"); // pending
//     // resolve("success"); // success
//     reject("fail"); // fail
//   });
// };
// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise fulfilled:", res);
// });

// promise.catch((err) => {
//   console.log("promise not fulfilled:", err);
// });

// example async function

// function asyncFun() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");

//       reject("fail");
//     }, 4000);
//   });
// }

// console.log("fetching data");
// let p1 = asyncFun();
// p1.then((res) => {
//   console.log(res);
// });

// Promise then
// function asyncFun1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");

//       // reject("fail");
//     }, 4000);
//   });
// }

// function asyncFun2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success");

//       // reject("fail");
//     }, 4000);
//   });
// }

// console.log("fetching data...1");
// let p1 = asyncFun1();
// p1.then((res) => {
//   console.log(res);
// });

// console.log("fetching data...2");
// let p2 = asyncFun2();
// p2.then((res) => {
//   console.log(res);
// }); // it will fetch same time

// console.log("fetching data...1");
// let p1 = asyncFun1();
// p1.then((res) => {
//   console.log(res);
//   console.log("fetching data...2");
//   let p2 = asyncFun2();
//   p2.then((res) => {
//     console.log(res);
//   });
// }); // adding 2nd then in the 1st one

// simplified Way
// console.log("fetching data...1");
// asyncFun1().then((res) => {
//   console.log(res);
//   console.log("fetching data...2");
//   asyncFun2().then((res) => {
//     console.log(res);
//   });
// }); // adding 2nd then in the 1st one
