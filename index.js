function ans() {
  console.log("Hello Upasana");
}
ans();

function sum(a, b) {
  console.log(`Sum of ${a} ans ${b} is ${a + b}`);
}
sum(3, 4);

// Create one Arrow function
let squre = (x) => {
  console.log(`squre of ${x} is ${x * x}`);
};
squre(8);

var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl();

var x = 21;
girl();
console.log(x);
function girl() {
  console.log(x);
  var x = 20;
}

var x = 21;
a();
b();

function a() {
  x = 20;
  console.log(x);
}
function b() {
  x = 40;
  console.log(x);
}

function factorial(n) {
  if (n < 0) {
    console.log("Error! Factorial for negative number does not exist.");
  } else if (n === 0) {
    console.log(`The factorial of ${n} is 1.`);
  } else {
    let fact = 1;
    for (i = 1; i <= n; i++) {
      fact *= i;
    }
    return `The factorial of ${n} is ${fact}.`;
  }
}
let ans1 = factorial(5);
console.log(ans1);

function FindSum(a, b) {
  return a + b;
}

function DisplayData(data, batch) {
  console.log(`i am from ${data} and My batch is EA${batch}`);
}

DisplayData("PrepBytes", FindSum(10, 13));

var a = 10;
(function () {
  console.log(a);
  var a = 20;
})();

const greet = function (name) {
  return function (m) {
    console.log(`Hi!! ${name}, ${m}`);
  };
};

const greet_message = greet("EA23");
greet_message("Welcome To PrepBytes");
