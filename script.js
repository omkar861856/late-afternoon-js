const myObj = {
  name: "John Doe",
  age: 30,
  coords: {
    lat: 37.7749,
    lng: -122.4194,
  },
  greet: function () {
    console.log(`Hello, my name is ${this.name}!`);
  },
};

const myObj2 = myObj;

//by default objects mutable even when declared with const

console.log(myObj === myObj2);

// function declaration

function Cook(utensils, rawMaterial) {
  console.log("I cook");
}

function Tutor() {
  console.log("I deliver tutorials");
}

const sum = Sum(1, 2);

function Sum(param1, param2) {
  return param1 + param2;
}

//convention = generally accepted norms

console.log(sum);

//anonymous function

const multiply = function (param1, param2) {
  return param1 * param2;
};

console.log(multiply(3, 4));

const myObj3 = {
  speech: function (a) {
    console.log(`I am speaking ${a} times`);
  },
  walk: function () {},
};

console.log(myObj3.speech(3));

//let  and const not hoisted

// modern js

//var caused too - many problemns - and hence recommended less

// es6 - 2015

Name();

// arrow function

function Name() {
  console.log("Hello, my name is Name");
}

const multiplyArrow = (param1) => param1 * 2;

console.log(multiplyArrow(3));

// IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function (a, b, c) {
  console.log("I am an IIFE" + " " + a + b + c);
})(1, 2, 3);

//scoping

let globalVar = "I am global";

function outerFunction() {
  let outerVar = "I am outer";

  return function innerFunction() {
    let innerVar = "I am inner";

    return outerVar; //I am outer
  };
}

const store = outerFunction();

console.log(store); //I am global

function outerCounter() {
  let count = 0;

  return function innerCounter() {
    count++;
    return count;
  };
}

const AnjanadrisCounter = outerCounter();

const AbdulsCounter = outerCounter();

console.log(AnjanadrisCounter()); // 1

console.log(AnjanadrisCounter()); // 2

console.log(AbdulsCounter()); // 1

console.log(AnjanadrisCounter()); // 3


// examples 

