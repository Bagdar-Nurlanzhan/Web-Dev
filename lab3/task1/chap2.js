// Code quality examples
// Debugging example
function greetUser(userName) {
  const message = `Hi, ${userName}!`;
  debugger;
  showMessage(message);
}

// Console logging
for (let index = 0; index < 5; index++) {
  console.log("current index:", index);
}

// Coding style practice
// Task: power function
function calculatePower(base, exponent) {
  let output = 1;

  for (let i = 0; i < exponent; i++) {
    output *= base;
  }

  return output;
}

let baseValue = prompt("Enter base:", "");
let exponentValue = prompt("Enter exponent:", "");

if (exponentValue <= 0) {
  alert(`Exponent ${exponentValue} is invalid. Please enter a positive number.`);
} else {
  alert(calculatePower(baseValue, exponentValue));
}

// Avoid unclear (ninja) code
function processElement(element) {
  const copiedElement = duplicate(element);
  return copiedElement;
}

// Automated testing with Mocha
describe("Power function tests", function () {

  it("returns 3 when base is 3 and exponent is 1", function () {
    assert.equal(calculatePower(3, 1), 3);
  });

  it("returns 9 when base is 3 and exponent is 2", function () {
    assert.equal(calculatePower(3, 2), 9);
  });

  it("returns 27 when base is 3 and exponent is 3", function () {
    assert.equal(calculatePower(3, 3), 27);
  });

});

// Polyfills and transpilers example
let pageHeight;
pageHeight = pageHeight ?? 100;

pageHeight = (pageHeight !== null && pageHeight !== undefined)
  ? pageHeight
  : 100;
