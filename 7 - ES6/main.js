// ECMAscript - ES6 (2015)
// class syntax
// arrow functions
// Promises
// Template literals
// modules (import e export)
// let e const - var scope/hoisting

let firstName = "Jim"
let lastName = "Halpert"

//concatenation
//console.log("Hello " + firstName + " " + lastName + "!")

//template literals
//console.log(`Hello ${firstName} ${lastName}!`)

// Modules
/* import { sum, subtract } from "./moduleExample.js"

console.log(sum(5, 6))
console.log(subtract(6, 4))
 */

import * as mathFunctions from './moduleExample.js'

console.log(mathFunctions.sum(5, 5))
console.log(mathFunctions.subtract(6, 3))

import sayHello from "./testDefault.js"
sayHello()














// let e const 
// var


let middleName = "Scott"
middleName = "Johnes"

/* if (true) {
  // block scope
  var varVariable = "This is a var"

  let letVariable = "This is a let"

}
 */
//Global scope pollution 
/* console.log(varVariable)
console.log(letVariable) */

// Hoisting
// var variable = undefined; -> var é inicializada como undefined
/* console.log(varVariable)
console.log(letVariable) 

var varVariable = "This is a var"
let letVariable = "This is a let" */

//Redeclarar a variavel
/* var varVariable = "This is a var"
var varVariable = 5;

let letVariable = "This is a let"
let letVariable = 5; 
*/

// let ou const

const planet = "Earth"
//planet = "Mercury"


//console.log(planet)

if(true){
  //block scope
  const scopedBlock = "Not accessible"
  //console.log(planet)
}

//console.log(scopedBlock)
