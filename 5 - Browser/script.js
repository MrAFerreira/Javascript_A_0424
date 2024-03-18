
// Motores de Javascript
// V8 - Google
// SpiderMonkey - Firefox
// JavascriptCore - Safari

// BOM - Browser Object Model (navigation, location, window)

// DOM - Document Object Model - W3C (World Wide Web Consortium) W3C schools
// Documento, DOM Tree


let cardElement = document.getElementById("card")
console.log(cardElement)


//cardElement.innerHTML = "<h1> Hello world </h1>"

cardElement.style.height = "300px"
cardElement.style.border = "2px solid black"
cardElement.style.backgroundColor = "grey"

let changeColor = (element) => {
  if(element.style.backgroundColor === "grey") {
    element.style.backgroundColor = "red"
  } else {
    element.style.backgroundColor = "grey"
  }
}

//setInterval(changeColor, 1000, cardElement)

// obter por class

let contentElements = document.getElementsByClassName("content")
console.log(contentElements)

const randomNumbers = () => {
  for (let i = 0; i < contentElements.length; i++){
    contentElements[i].innerText = Math.floor(Math.random() * 10).toString();
  }
} 

//setInterval(randomNumbers, 1000)

//let bottomElement = document.getElementsByClassName("bottom")
//bottomElement.style.backgroundColor = "red"


//getElementsByTagName
let h1Elements = document.getElementsByTagName("h1")
//console.log("h1Elements", h1Elements)

//querySelector - retorna apenas o primeiro elemento que cumprir com a query

// Pesquisa pelo documento inteiro
let firstContent = document.querySelector("div .content")
//console.log(firstContent) 

//pesquisa no div com id card
/* let firstContent = cardElement.querySelector(".content")
console.log(firstContent) */


//querySelectorAll - retorna sempre um array-like object com todos os elementos que cumprirem a query
let allDivs = document.querySelectorAll(".content, #card")
//console.log(allDivs)


let googleATag = document.querySelector('a[href="https://www.google.com"]')
//console.log(googleATag)


// className

let bottomElement = document.querySelector('.bottom')
/* console.log(bottomElement.className)
bottomElement.className = "top"
console.log(bottomElement.className) */

//classList

/* bottomElement.classList.add("contrast")
bottomElement.classList.remove("bottom")
bottomElement.classList.toggle("dark-mode") */

//console.log(bottomElement.className)

// alterar id

//console.log(cardElement.id)

//cardElement.id = "poker"

//console.log(cardElement.id)


// Criar um elemento
let myFooter = document.createElement('footer')
//console.log(myFooter)

// appendChild

document.body.appendChild(myFooter)
//cardElement.appendChild(myFooter)

let cardTitle = document.createElement('h3')
cardTitle.innerText = "Title for this card"

// insertBefore
// aqui estamos a adicionar o elemento cardTitle antes do cardElement
document.body.insertBefore(cardTitle, cardElement)


//remover
myFooter.remove()

cardElement.removeChild(bottomElement)

cardElement.innerHTML = ""

//através de javascript / DOM manipulation

// criar um div
//adicionar um h1 com algum texto ao div
// fazer target/ obter o elemento h1
// alterar a cor do texto para vermelho

//Solução para o exercício:


/* 

let newDiv = document.createElement('div');
newDiv.innerHTML = '<h1>new h1 inside new div</h1>';
let h1InNewDiv = newDiv.querySelector('h1');
h1InNewDiv.style.color = 'red';
document.body.appendChild(newDiv);

 */

