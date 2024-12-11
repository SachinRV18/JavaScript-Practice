// alert("Hello Sachin!!")
// console.log(123)
// console.log("sachin")

// var my_name = "sachin";
// console.log(my_name)

// console.log([1,2,3,4]) //array

// console.log({a:1,b:2,c:3}) //dict

//variables

// var name = "sachin";
// // console.log(name)
// name = "gowtham";
// console.log(name) //gowtham is the output

// var greeting;  // conditionally rendering some data
// greeting = "hello"
// console.log(greeting) //undefined is the output

// var $name = "sachin";  // $ used more in Jquery
// console.log($name);

// let $name = "sachin";  // $ used more in Jquery
// console.log($name);

// const name = "sachin";
// console.log(name)
// name = "gowtham";
// console.log(name) // error , because we can't reassign a values

// const person = {
//     name : "sachin",
// };
// person.name = "Ganesh"
// console.log(person)
// Note: we cannot change the value of the constant variable, but we can change the "value of the object" of constant variable

// const numbers = [1,2,3,4,5,6]
// numbers.push(7)
// console.log(numbers)

// // string
// let name = "sachin"
// console.log(typeof name)

// // number
// let number = 123
// console.log(typeof number)

// // Boolen
// let bool = true
// console.log(typeof bool)

// // null
// let variable = null
// console.log(typeof variable) // there was one error in JS it will print object instead of null

// // undefiened
// let word;
// console.log(typeof word)  //if we dont assign any values it will define undefiend

// // symbol
// const sym = Symbol();
// console.log(typeof sym)

// Reference Datatypes

// //Array
// const hobbies = ['cricket', 'hobbies']
// console.log(typeof hobbies)

// //object Literals
// const person={
//     name : "sachin",
//     age : 22,
// }
// console.log(typeof person)

// // Dates
// const today = new Date()
// console.log(today)
// console.log(typeof today)

// let val;

// // Number to string

// val = 533;

// val= String(val)
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// let val;

// // Boolean to string

// val = true;

// val= String(val)
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// let val;

// // Boolean to string

// val = new Date();

// val= String(val)
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// let val;
// // Array to string
// val = [1,2,3,4,5];  // why 9 because it counts a spaces also
// val= String(val)
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// the above we can also done by using toString() method

// let val;
// // toString function
// val = 5;
// val= val.toString()
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// // string to a number
// let val;
// val = 5;
// console.log(val)
// console.log(typeof val)
// console.log(val.toFixed(2))

// let val;
// val = "5";
// val = "5";
// val= Number(val)
// console.log(val)
// console.log(typeof val)
// console.log(val.toFixed(2))

// // boolean value
// let val;
// val1 = Number(true)
// val2 = Number(false)
// val3 = Number(null)

// console.log(val1)
// console.log(val2)
// console.log(val3)
// console.log(typeof val1)
// console.log(typeof val2)
// console.log(typeof val3)
// console.log(val1.toFixed(2))
// console.log(val2.toFixed(2))
// console.log(val3.toFixed(2)) // null is always 0

// // using parseInt
// let val;
// val = "5";
// val= parseInt(val)
// console.log(val)
// console.log(typeof val)
// console.log(val.toFixed(2))

// // type cohesion
// const val1 = "5";
// const val2 = 6;
// const sum = val1 + val2

// console.log(sum)
// console.log(typeof sum)  //  if frst letter is string means it will convert next one also an string and concatinate its value

// // String and string methods
// let firstName = "Sachin";
// let lastName = "R V"
// let age = 25;
// let text = "Hello, everyone";
// let sent = "Books, Words, That's it okay"

// // concatination
// let val = firstName + " "+ lastName;
// console.log(val)

// // Append
// val = "Demo ";
// val += "notes";
// console.log(val)

// let val;
// val = " Hello my name is " + firstName +" "+ lastName + " "+"Nice to meet you guys!!"
// console.log(val)

// let val;
// // escaping
// val = "that's not a good job"
// console.log(val)

// let val;

// Length
// val = firstName.length;

// //concat
// val = firstName.concat(" " + lastName)

// // Upper and lower case (to change the case)
// val = firstName.toUpperCase();
// val = lastName.toLowerCase()

// indexing
// val = firstName[2];

// indexOf()
// let firstName = "Sachina";
// val = firstName.indexOf("a")
// val = firstName.lastIndexOf("a")

// //charAt()
// val = firstName.charAt("2")

// substring()  (divide the particular string)
// val = firstName.substring(0, 4)

// // slice  (divide the particular string)
// val = firstName.slice(0, 2)

// split()
// val = text.split(" ")
// val = sent.split(",")

// replace()
// val = firstName.replace("S","G")

// // includes()  // to search a string
// val = sent.includes("Books")

// console.log(val)

// Numbers and Math Object
// let val;
// val = Math.PI;
// val = Math.round(3.2)
// val = Math.ceil(3.1)  //above value
// val = Math.floor(3.1)  //lower/previous value
// val = Math.sqrt(4)
// val = Math.abs(-5)   // Absolute value.
// val = Math.pow(5, 2)   // power value.
// val = Math.min(2,3,5,67,887)  // Minimum
// val = Math.max(2,3,5,67,887)  // Maximum
// val = Math.random()  // Print the value within 0 to 1
// val = Math.random() * 20 // Print the value within 0 to 20
// val = Math.random() * 20 + 1// Print the value within 1 to 20
// val = Math.floor(Math.random() * 20 + 1)// Print the value within 1 to 20 (only whole number. Not Decimal values)

// console.log(val)

// // arrays and methods

// const number = [1,2,3,45,6,7,8,9,32];
// const number2 = new Array(1,2,3,45,6,7,8,9,32);  // another way of creating an array
// const fruits = new Array("apple", "bananana", "orange");  // astoring strings in array
// // const mixed = new Array("apple", "bananana", " orange", 1, 2,3,4,5, true, undefined, null);  // storing multiple types of data's in array
// // // console.log(number2)
// // // console.log(fruits)
// // // console.log(mixed)

// let val;
// // val = number.length; // array length

// // val = Array.isArray(number); // to check its an array or not

// // val = number[3] // to get a single value using indexing

// // // insert or replace
// // number[1] = 100;

// // // find the index value
// // val = number.indexOf(45);

// // //Mutating the array
// // //add a number to the end of an array
// // number.push(2590);

// // // add to the front
// // number.unshift(120);

// // //remove the last number from the array.
// // number.pop(2590);

// // // remove the frst number from the array.
// // number.shift(120)

// // console.log(number);

// // //splicing
// // number.splice(1,1)  // remove an element from pointing the index
// // console.log(number);

// // reverse the number
// // number.reverse();

// // concat the numbers
// // val = number.concat(number2);

// // sort the array
// // val = fruits.sort();

// // // sort the numbers
// // val = number.sort()  // it will sort based on the first digit.

// // // sort ascending order
// // val = number.sort(function(x, y) {
// //     return x-y;
// // });

// // sort decending order
// val = number.sort(function(x, y) {
//     return y - x;
// });

// console.log(val)

// // template literals
// const name = "sachin";
// const age = 25;

// let html;

// // //without using a template literals, ES5, we are going to render HTML to browser with JS

// // html = '<ul><li>Name:' +name + '</li><li>Age:' + age + '</li></ul>';

// // document.body.innerHTML = html;

// // by using template literals
// html = `
// <ul>
// <li>Name:${name}</li>
// <li>Age:${age}</li>
// </ul>
// `;
// document.body.innerHTML = html;  // its easy

// // Object literals
// const person = {
//     firstName: "sach",
//     age:25,
//     email:"sachin@gmail.com",
//     hobbies : ['eat','sleep', 'code'],
//     address: {
//         city: 'skp',
//         state: 'karnataka'
//     },

//     // getBirthYear: function(){
//     //     return 1999;
//     // },  //hardcoded
//     getBirthYear: function(){
//         return 2024 - this.age;  //this keyword is used to get the value of particlar object. It will points to the same object
//     },  //hardcoded

//    };
// //   console.log(person.firstName);
// //   console.log(person.age);
// let val;
// val = person;
// console.log(person)
// // console.log(person.firstName)
// // console.log(person.age)
// // console.log(person.address)
// // console.log(person.address.city)
// // console.log(person.address.state)
// // console.log(person.hobbies)
// // console.log(person.hobbies[2])
// // console.log(person.email)
// console.log(person.getBirthYear()) //calling a function

//Array of objects

// const people = [
//   {
//     FirstName: "Mani",
//     age: 25,
//   },
//   {
//     FirstName: "sachin",
//     age: 25,
//   },
//   {
//     FirstName: "Rakesh",
//     age: 25,
//   },
// ];

// // console.log(people[0].FirstName);

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].FirstName);
// }

// conditional and comparisions
// syntax
// if (something){
//     do something;
// }else{
//     do something else
// }

// const id = 100; // assignment operator

// if (id == 100) {
//   // Comparision operator
//   console.log("Yes the ID is 100");
// } else {
//   console.log("Yes the ID is not 100");
// }

// const sid = "100"; // assignment operator
// // if we use === it checks the value and also the type of a variable
// if (sid === 100) {
//   // Comparision operator
//   console.log("Yes the ID is 100");
// } else {
//   console.log("Yes the ID is not 100");
// }

// if (id) {
//   console.log(id);  //if id is present it will print otherwise its an error
// } else {
//   console.log("NO ID");  //error
// }

// if (typeof id !== "undefined") {
//   console.log(id);
// } else {
//   console.log("NO ID");
// } // it will not print an error

// //if elseif else
// const color = "blue";

// if (color === "black") {
//   console.log("colour is black");
// } else if (color === "white") {
//   console.log("color is white");
// } else {
//   console.log("color is undefined");
// }

//Logical operator
// logical and , logical or

// const age = 100;

// if (age > 0 && age < 18) {
//   console.log("the person is not eligible to vote");
// } else {
//   console.log("the person is eligible to vote");
// } //if both conditon pass it will execute

// const age = 100;
// if (age > 10 || age < 50) {
//   console.log("the person can't participate.");
// } else {
//   console.log("the person can participate.");
// }  //if any one conditon pass also it will execute

// // Ternary operator
// const id = 100;
// console.log(id === 100 ? "yes correct" : "no it's not correct");

// // "?" Yes and ":" NO

//loops in JS

// for loops
// for (let i = 0; i < 10; i++) {
//   console.log(` hi ${i}`);
// }

// const names = ["Mani", "sachin", "Gagan", "deepak"];
// // for (let i = 0; i < names.length; i++) {
// //   console.log(names[i]);
// // }

// // for of loop
// for (name of names) {
//   console.log(name);
// } // comparatively it was slow  rather than the for loop.

// while loop
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// // do while loop
// let i = 0;
// do {
//   i++;
//   console.log(i);
// } while (i < 10);  at least once it will pass the execution as true, it must executes once everytime

// // for in loop.  // it helps to loops through the objects
// const person = {
//   firstName: "sachin",
//   lastName: "RV",
// };
// for (x in person) {
//   console.log(x); // x is the key
//   console.log(person[x]); // it gives the value
// }
