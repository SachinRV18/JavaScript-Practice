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

let n = prompt("Enter the value of 'n' ");

let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}
console.log(arr);

const newArr = arr.reduce((prev, curr) => {
  return prev + curr;
});
console.log(newArr);

// Factorial
const newArr1 = arr.reduce((prev, curr) => {
  return prev * curr;
});
console.log(newArr1);
