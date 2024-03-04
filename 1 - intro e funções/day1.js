// Funções

// declarar a função
function myFunction(parameters){
  // lógica
  return "Hello"
  // retorna undefined por default
}

// Invocar a função

console.log(myFunction())


// Parametros vs Argumentos ?

// name é o parametro
function greetClient(name1, name2){
  return `Hello ${name1} and ${name2}`
}

greetClient("André", "Ricardo")

function greetCheck(name1, name2, name3){

  return [name1, name2, name3]
 /* return "Hello";
   if(name.length === 0) {
    return "Name missing"
  } else {
    return name
  } */
}

const averageArr = [350, 560, 680, 10]

// Criar uma função chamada avg
// A função recebe um array de números como parametro
// A função retorna a média desses números


/* function avg(array) {
  if (!array.length) return;

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  //console.log(sum /array.length)
  return sum / array.length;
} */

function sum(array){
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function avg(array) {
  return sum(array) / array.length
}



//avg(averageArr)

//console.log(avg(averageArr))


myDeclaredFunction()

// Function Declaration
function myDeclaredFunction(){
  console.log("Function declaration - hoisting")
}

/* const myOtherAvg = avg;
console.log(myOtherAvg) */


// Function Expression
myExpressedFunction()

const myExpressedFunction = function (){
  console.log("Function expression - hoisting")
}

const mySum = function (a, b) {
  return a + b;
}
//console.log(mySum(10, 8))


// Hoisting