// Objects fundamentals
// Task 1
let person = {};
person.firstName = "Alex";
person.lastName = "Brown";
person.firstName = "Mike";
delete person.firstName;

// Task 2
function checkEmpty(object) {
  for (let prop in object) {
    return false;
  }
  return true;
}

// Task 3
let payments = {
  Alex: 120,
  Kate: 200,
  Sam: 180
};

let totalSalary = 0;
for (let key in payments) {
  totalSalary += payments[key];
}
alert(totalSalary);

// Task 4
function doubleNumbers(target) {
  for (let key in target) {
    if (typeof target[key] === "number") {
      target[key] = target[key] * 2;
    }
  }
}

// Object references and copying
let profile = {
  name: "Dana",
  dimensions: {
    height: 170,
    width: 55
  }
};

alert(profile.dimensions.height);

// Example 1
let greeting = "Hi!";
let copiedGreeting = greeting;

// Example 2
let account = { username: "Alex" };
Object.assign(account, { username: "Chris" });
alert(account.username);

// Garbage collection demo
function createFamily(man, woman) {
  man.partner = woman;
  woman.partner = man;

  return {
    dad: man,
    mom: woman
  };
}

let home = createFamily(
  { name: "Arman" },
  { name: "Aigerim" }
);

// Object methods and this
function buildUser() {
  return {
    name: "Tom",
    ref: this
  };
}

let newUser = buildUser();
alert(newUser.ref?.name);

// Calculator object
let mathTool = {
  readValues() {
    this.x = +prompt("Enter x:", 0);
    this.y = +prompt("Enter y:", 0);
  },
  add() {
    return this.x + this.y;
  },
  multiply() {
    return this.x * this.y;
  }
};

mathTool.readValues();
alert(mathTool.add());
alert(mathTool.multiply());

// Chaining example
let counter = {
  value: 0,
  increase() {
    this.value++;
    return this;
  },
  decrease() {
    this.value--;
    return this;
  },
  show() {
    alert(this.value);
    return this;
  }
};

counter.increase().increase().decrease().show().decrease().show();

// Constructor and new
let shared = {};
function X() { return shared; }
function Y() { return shared; }
alert(new X() === new Y());

// Calculator constructor
function Calc() {
  this.read = function () {
    this.a = +prompt("a:", 0);
    this.b = +prompt("b:", 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calcInstance = new Calc();
calcInstance.read();
alert("Sum = " + calcInstance.sum());
alert("Mul = " + calcInstance.mul());

// Accumulator constructor
function Storage(start) {
  this.total = start;
  this.add = function () {
    this.total += +prompt("Add value:", 0);
  };
}

let storage = new Storage(5);
storage.add();
storage.add();
alert(storage.total);

// Optional chaining
let client = {};
alert(client.location?.street);

// Symbols
let keyOne = Symbol.for("token");
let keyTwo = Symbol.for("userId");

alert(Symbol.keyFor(keyOne));
alert(Symbol.keyFor(keyTwo));

let secret = Symbol("secretKey");
let record = {
  [secret]: 999
};

let copyRecord = Object.assign({}, record);
alert(copyRecord[secret]);

// Object to primitive conversion
let wallet = {
  owner: "Alex",
  balance: 1500,
  toString() {
    return `{owner: "${this.owner}"}`;
  },
  valueOf() {
    return this.balance;
  }
};

alert(wallet);
alert(+wallet);
alert(wallet + 300);
