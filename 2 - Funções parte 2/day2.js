//Callbacks

/* function firstMessage() {
  setTimeout(function () {
    console.log('first message');
  }, 1000);
}

function secondMessage() {
  console.log('second message');
}

firstMessage();
secondMessage();
 */

function firstMessage(callback) {
  setTimeout(function () {
    console.log('first message');
    callback();
  }, 1000);
}

function secondMessage() {
  console.log('second message');
}

function thirdMessage() {
  console.log('second message');
}

firstMessage(secondMessage);

// Funções anónimas

// a função é guardada para utilizar no futuro
const sum = function (a, b) {
  return a + b;
};

sum(2, 2);

// a função é utilizada apenas uma vez
/* setTimeout(function () {
  //
  console.log("I'm an anon function");
}, 1000);
 */
function processArray(numberArr, callback) {
  // logic
  // retorna um array novo com a transformação da callback aplicada a cada número
  let result = [];
  for (let i = 0; i < numberArr.length; i++) {
    result.push(callback(numberArr[i]));
  }
  return result;
}

let numbers = [1, 2, 3, 4, 5];

let squares = processArray(numbers, function (number) {
  return number * number;
});
// squares [1, 4, 9, 16, 25]

//console.log(squares);

// Arrow functions

const expressHello = function (firstName) {
  console.log('Hello' + firstName);
};

//arrow syntax
const sayHiArrow = (firstName) => {
  return `Hello ${firstName}`;
};

//arrow syntax curta
const sayHiShortArrow = (firstName) => `Hello ${firstName}`;

/* console.log(sayHiArrow('André'));
console.log(sayHiShortArrow('Ricardo')); */

const sumArrow = (a, b) => a + b;

const processArrow = (numberArr, callback) => {
  let result = [];
  for (let i = 0; i < numberArr.length; i++) {
    result.push(callback(numberArr[i]));
  }
  return result;
};

// Arguments Object
// arguments é um "array-like" object
//tem length e é indexado a zero
/// array methods (como map, forEach, etc...) não resultam

/* const getArguments = () => {
  console.log(arguments[0]);
}; */

function getArguments() {
  console.log(arguments[1]);

  //transformar num array
  const arrayArgs = Array.from(arguments);
}

getArguments(1, 'Hello', false);

function sumAll() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

sumAll(1, 5);
sumAll(1, 5, 7, 8);

// IIFE
// Immeddiately Invoked Function Expression

var myAge = 30;
//Global namespace pollution

(function () {
  // logic
  var testIIFE = 'Testing';
  console.log(testIIFE);
})();

//Async/await

console.log(testIIFE);
