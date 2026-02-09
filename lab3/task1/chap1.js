/* Intro */
alert("JavaScript is running!");

/* Code layout example */
alert('Hi');
alert('Everyone');

alert(4 + 2 + 1);

alert("Test message");
[10, 20].forEach(alert);

(function () {
  'use strict';
})();

/* Variables */
let manager, userName;
userName = "Aruzhan";
manager = userName;
alert(manager);

let planetName = "Earth";
let activeUser = "Dana";

const birthDate = '15.03.2006';
const userAge = calculateAge(birthDate);

// Constant examples
const FIXED_BIRTHDAY = '01.01.2000';
const dynamicAge = calculateAge(FIXED_BIRTHDAY);

/* Data types */
let studentName = "Ali";
alert(`result ${2}`); 
alert(`result ${"studentName"}`); 
alert(`result ${studentName}`);

/* User interaction */
let visitor = prompt("Enter your name:", "");
alert(visitor);

alert("Welcome!");

let answer = confirm("Do you like JavaScript?");

/* Type conversion */
// String
let flag = false;
alert(typeof flag);
flag = String(flag);
alert(typeof flag);

// Number
alert("10" / "5");
let inputValue = "456";
alert(typeof inputValue);
let converted = Number(inputValue);
alert(typeof converted);

// Boolean
alert(Boolean(5));
alert(Boolean(0));
alert(Boolean("JS"));
alert(Boolean(""));

/* Operators */
let y = 3;
y = -y;
alert(y);

alert(7 % 3);
alert(9 % 4);
alert(6 % 3);

alert(3 ** 2);
alert(2 ** 5);

let phrase = "Java" + "Script";
alert(phrase);

alert('5' + 1);
alert(1 + '5');
alert(1 + 2 + '3');

let pears = "4";
let bananas = "6";
alert(pears + bananas);

/* Assignment */
let counter = 3;
counter += 2;
counter *= 3;

/* Tasks */
let c = "3";
let d = "4";
alert(c + d);

let first = +prompt("Enter first number:", 0);
let second = +prompt("Enter second number:", 0);
alert(first + second);

/* Comparison */
alert(3 > 2);
alert(3 == 5);
alert(3 != 5);

let check = 10 > 5;
alert(check);

alert('C' > 'A');
alert('Tree' > 'Rock');
alert('Cat' > 'Car');

/* Conditional */
let releaseYear = prompt("When was ES6 released?", "");
if (releaseYear == 2015) {
  alert("Correct!");
} else {
  alert("Wrong answer");
}

if ("1") {
  alert("Shown");
}

/* Official name task */
let jsName = prompt("What is the official JS name?", "");
if (jsName === "ECMAScript") {
  alert("Correct!");
} else {
  alert("Answer is ECMAScript");
}

/* Number sign */
let number = prompt("Enter a number:", 0);
if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}

/* Ternary */
let resultText = (c + d < 10) ? "Small" : "Big";

/* Logical operators */
alert(null || 5 || undefined);
alert(1 && null && 3);
alert(null || 2 && 5 || 8);

/* Login simulation */
let loginUser = prompt("Login:", "");
if (loginUser === "Admin") {
  let pass = prompt("Password:", "");
  if (pass === "Root") {
    alert("Access granted");
  } else {
    alert("Access denied");
  }
} else {
  alert("Unknown user");
}

/* Nullish */
let profile;
alert(profile ?? "Guest");

let profileName = "Amina";
alert(profileName ?? "Guest");

/* Loops */
let i = 0;
while (i < 3) {
  alert(i);
  i++;
}

do {
  alert(i);
  i--;
} while (i > 0);

for (let j = 0; j < 3; j++) {
  alert(j);
}

/* Break */
let total = 0;
while (true) {
  let num = +prompt("Enter number:", "");
  if (!num) break;
  total += num;
}
alert("Total: " + total);

/* Functions */
function isAdult(age) {
  return age >= 18 || confirm("Permission from parents?");
}

function smaller(a, b) {
  return a < b ? a : b;
}

function power(base, exp) {
  let res = 1;
  for (let i = 0; i < exp; i++) {
    res *= base;
  }
  return res;
}

/* Function expression */
let years = prompt("Your age:", 18);
let greeting =
  years < 18
    ? function () { alert("Hi!"); }
    : function () { alert("Hello!"); };
greeting();

/* Arrow functions */
function confirmAction(text, yesFn, noFn) {
  confirm(text) ? yesFn() : noFn();
}

confirmAction(
  "Continue?",
  () => alert("Accepted"),
  () => alert("Canceled")
);

/* Switch */
let ageCheck = prompt("Age?", 18);
switch (ageCheck) {
  case "18":
    alert("Exactly 18");
    break;
  default:
    alert("Different age");
}
