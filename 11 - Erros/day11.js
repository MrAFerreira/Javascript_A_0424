// Erros



/* try {
  let result = nonExistentFunction()
  console.log(result)
} catch (error) {
  console.error(error.message)
} */


//console.log("Hello")

try {

 // Syntax error
 // let x : 10;
// console.log(x)

// ReferenceError
//nonExistentFunction()
/* const sayHello = () => {
  const hello = "Hello"
}
console.log(hello) */

// TypeError
//let x = "Hello"
//x.sort()
//console.log(x.name.first) -> undefined
//console.log(x.name?.first) -> erro

// RangeError
//const myArr = new Array(-1)
//const repeated = "Hello".repeat(250**250)

//stack overflow

/* function recursive(){
  recursive()
} */

//recursive()
  //throw new Error("401 ")
} catch (error) {
  console.log(error)
}

/* class CustomError extends Error {
  constructor(message, statusCode){
    super(message)
    this.statusCode = statusCode
  }
} */

/* try {
  throw new CustomError("Server error", 500)
} catch (error) {
 console.error(error) 
} */

function foo(){
  throw new Error("Something went wrong!")
}


function bar(){
  try {
    foo()
  } catch (error) {
    console.log("Error occured")
  }
}

/* try {
  bar()
} catch (error) {
  console.log("An error occured", error.stack)
}
 */
// Melhores práticas
// Mensagens de erro claras e descritivas
// Tratar os erros o mais próximo possível da origem
// usar catch 
// Utilizar objectos de erro customizados


const users = ["Jim", "Pam", "Michael"]

function getUser(idx){

  if(!users[idx]) throw new CustomError("Error fetching user by Id", 500)

  return users[idx]
}

/* try {
  getUser(10)
} catch (error) {
  console.log(error.message)
 error.statusCode
} */

/* class CustomError extends Error {
  constructor(message, statusCode){
    super(message)
    this.statusCode = statusCode
  }
}
 */
// Criar uma class de erro chamada MathError, que aceita message, operation

// Criar uma função divide que aceita numerator, denominator
// verificamos se estamos a tentar dividir por 0
// fazer throw do erro, usando a class criada e passando a informação
// caso contrário, retornar (numerator / denominator)

// testar a função divide(7, 0)

  class MathError extends Error {
  constructor(message, operation) {
    super(message);
    this.operation = operation;
  }
} 
 
function divide(value1, value2) {
  if (value1 === 0 || value2 === 0 ) {
    throw new MathError("Não é permitido dividir um valor por zero", "divisão");
  }
  return value1 / value2;
}
 
try {
  console.log("value: " + divide(7, 20)); 
  console.log("value: " + divide(7, 0)); 
  divide(7, 0)
} catch (error) {
  console.error(error.message); 
  console.error(error.operation); 
} 

/// 

/* class MathError extends Error {
  constructor(message, operation) {
    super(message);
    this.operation = operation;
    }
  }

  function divide(numerator, denominator) {
    try {
    if (denominator === 0) {
    throw new MathError('Error trying to divide by 0', 'divide');
    }

    if (isNaN(numerator) || isNaN(denominator)) {
    throw new MathError('Invalid value for numerator or denominator', 'divide');
    }
    return numerator / denominator;
    } catch (error) {
    console.log(error);
    }
    }
    console.log(divide("A", "B"));  */