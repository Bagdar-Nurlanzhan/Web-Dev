/* =======================
   Primitive methods demo
   ======================= */
let greetingText = "Hi";
greetingText.temp = 10;
alert(greetingText.temp);

/* =======================
   Numbers
   ======================= */
// Task 1
let firstNum = +prompt("Enter first value:", "");
let secondNum = +prompt("Enter second value:", "");
alert(firstNum + secondNum);

// Task 2 (rounding problem)
alert((6.35 * 10).toFixed(20));
alert(Math.round(6.35 * 10) / 10);
alert((1.35).toFixed(20));

// Task 3
function inputNumber() {
  let value;
  do {
    value = prompt("Type a numeric value:", "");
  } while (!isFinite(value));

  if (value === null || value === "") return null;
  return +value;
}
alert("Result: " + inputNumber());

// Task 4 (floating point)
let counter = 0;
while (counter < 11) {
  counter += 0.2;
  if (counter > 9.8 && counter < 10.2) {
    alert(counter);
  }
}

// Task 5
function randomFloat(min, max) {
  return min + Math.random() * (max - min);
}
alert(randomFloat(2, 6));

// Task 6
function randomWhole(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}
alert(randomWhole(1, 3));

/* =======================
   Strings
   ======================= */
// Task 1
function capitalize(word) {
  if (!word) return word;
  return word[0].toUpperCase() + word.slice(1);
}
alert(capitalize("alex"));

// Task 2
function containsSpam(text) {
  let t = text.toLowerCase();
  return t.includes("spam") || t.includes("xxx");
}
alert(containsSpam("Buy SPAM now"));
alert(containsSpam("Clean message"));

// Task 3
function shorten(text, maxLen) {
  return text.length > maxLen
    ? text.slice(0, maxLen - 1) + "…"
    : text;
}

// Task 4
function getPrice(str) {
  return Number(str.slice(1));
}

/* =======================
   Arrays
   ======================= */
// Task 1
let food = ["Apple", "Orange", "Pear"];
let basket = food;
basket.push("Banana");
alert(food.length);

// Task 2
let music = ["Rock", "Jazz"];
music.push("Pop");
music[Math.floor(music.length / 2)] = "Classical";
alert(music.shift());
music.unshift("Rap", "Hip-Hop");

// Task 3
let letters = ["x", "y"];
letters.push(function () {
  alert(this);
});
letters[2]();

// Task 4
function sumValues() {
  let list = [];
  while (true) {
    let val = prompt("Enter number:", "");
    if (val === "" || val === null || !isFinite(val)) break;
    list.push(+val);
  }
  return list.reduce((a, b) => a + b, 0);
}
alert(sumValues());

// Task 5
function maxSubArray(arr) {
  let best = 0;
  let current = 0;
  for (let num of arr) {
    current = Math.max(num, current + num);
    best = Math.max(best, current);
  }
  return best;
}
alert(maxSubArray([-1, 2, 3, -9]));

/* =======================
   Array methods
   ======================= */
// Task 1
function toCamel(text) {
  return text
    .split("-")
    .map((w, i) => (i === 0 ? w : w[0].toUpperCase() + w.slice(1)))
    .join("");
}

// Task 2
function selectRange(arr, from, to) {
  return arr.filter(v => v >= from && v <= to);
}

// Task 3
function selectRangeInPlace(arr, from, to) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < from || arr[i] > to) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// Task 4
let nums = [4, 1, -2, 10];
nums.sort((a, b) => b - a);

// Task 5
function SimpleCalc() {
  this.ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };

  this.compute = function (expr) {
    let [a, op, b] = expr.split(" ");
    return this.ops[op] ? this.ops[op](+a, +b) : NaN;
  };

  this.addOp = function (key, fn) {
    this.ops[key] = fn;
  };
}

// Task 6
let people = [
  { name: "Aruzhan", age: 19 },
  { name: "Dana", age: 21 },
  { name: "Aliya", age: 20 }
];
let namesOnly = people.map(p => p.name);

// Task 7
function sortAges(list) {
  list.sort((a, b) => a.age - b.age);
}

// Task 8
function mix(arr) {
  arr.sort(() => Math.random() - 0.5);
}

// Task 9
function averageAge(list) {
  return list.reduce((s, p) => s + p.age, 0) / list.length;
}

// Task 10
function uniqueValues(arr) {
  return [...new Set(arr)];
}

// Task 11
function indexById(list) {
  return list.reduce((obj, el) => {
    obj[el.id] = el;
    return obj;
  }, {});
}

/* =======================
   Map / Set
   ======================= */
function cleanAnagrams(words) {
  let map = new Map();
  for (let w of words) {
    let key = w.toLowerCase().split("").sort().join("");
    map.set(key, w);
  }
  return [...map.values()];
}

/* =======================
   Date
   ======================= */
function secondsPassedToday() {
  let now = new Date();
  return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

function lastDay(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

/* =======================
   JSON
   ======================= */
let profile = {
  fullName: "Aruzha N.",
  age: 18
};

let copyProfile = JSON.parse(JSON.stringify(profile));
