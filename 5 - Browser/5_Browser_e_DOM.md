## | Motores Javascript

Quando escrevemos qualquer código Javascript que se destina a ser executado no navegador, é o trabalho do navegador interpretar e executar o código. Isso é feito através do uso do seu **motor de Javascript**.
O motor é responsável por coisas como análise, tokenização, tratamento de eventos e gestão de memória.
Alguns motores populares incluem:

- V8 - Desenvolvido pela Google e utilizado no Chrome e nos browsers baseados em chromium.
- SpiderMonkey - Desenvolvido pela Mozilla e utilizado no Firefox
- JavascriptCore - Desenvolvido pela Apple e utilizado no Safari

### BOM vs DOM

O **BOM** (Browser Object Model) representa o próprio navegador e fornece objetos e métodos para interagir com a janela do navegador (como `window`, `navigator`, `location`, `history`...). O conceito de BOM não é padronizado e pode diferir de navegador para navegador.
O **DOM** (Document Object Model) representa a estrutura do documento HTML (ou XML) que está a ser apresentado no browser. É normalmente representado como uma estrutura em forma de árvore (DOM Tree) e permite a manipulação do seu conteúdo de forma dinâmica através de código. É padronizado pelo W3C (World Wide Web Consortium)

### | DOM - Introdução & Seletores

### O que é o DOM

O DOM é uma API para documentos HTML e XML que fornece uma representação estruturada do documento e define uma forma de o aceder a partir de Javascript.

Vamos criar um exemplo de HTML e ver o DOM no navegador:

```html
<h1>Dom Manipulation</h1>
<div id="card">
	<div class="content"></div>
	<div class="content"></div>
	<div class="content"></div>
	<div class="bottom"></div>
</div>

<script src="script.js"></script>
<!-- devemos incluir o script que manipula o DOM no final do  documento para termos a certeza que tudo o resto já fez load->
```

### Aceder através de Javascript

Para aceder ao HTML através de Javascript usamos o objeto `document`. Este é instanciado automaticamente quando renderizamos a página.

### | Procurar elementos por ID

---

Isto irá retornar a primeira ocorrência do id procurado (deve ser uma string). Uma vez que não devemos ter id's repetidos, esta é uma boa maneira de obter um único elemento específico.

```javascript
let cardElement = document.getElementById("card");
```

### | innerHTML

---

Esta propriedade dos elementos permite alterar o html dentro dos mesmos:

```javascript
let cardElement = document.getElementById("card");
console.log(cardElement);
cardElement.innerHTML = "This is a card";
```

### | element.style

---

Também podemos alterar as propriedades de estilo do nosso elemento:

```javascript
cardElement.style.border = "2px solid black";
// Os valores passados devem ser strings

branchDiv.style.backgroundColor = "grey";
// o nome das propriedades devem ser em camel case
```

Agora podemos utilizar a lógica de programação juntamente com os estilos. Por exemplo:

```javascript
let changeColor = element => {
  if (element.style.backgroundColor === "gray") {
    element.style.backgroundColor = "blue";
  } else {
    element.style.backgroundColor = "gray";
  }
};

setInterval(changeColor, 1000, cardElement); // o terceiro elemento a ser passado no setInterval é de facto o argumento que a função changeColor aceita
```

### Obter elementos por nome de classe

---

`.getElementsByClassName` retorna um array de todos os elementos que possuem a classe dada.

```javascript
let contentElements = document.getElementsByClassName("content");
// podemos utilizar este método em qualquer elemento, não apenas no "document", no entanto desta maneira garantimos que estamos a procurar no nosso HTML inteiro

console.log(contentElements);
```

A `HTML collection` devolvida é um **objeto do tipo array**, não um array puro, portanto não podemos utilizar métodos de array (forEach, map, etc...).  
Podemos transformá-lo num array (...spread operator) ou usar um for loop.

Exemplo:

```javascript
const randomNumbers = () => {
  for (let i = 0; i < contentElements.length; i++) {
    contentElements[i].innerHTML = Math.floor(Math.random() * 10).toString();
  }
};

setInterval(randomNumbers, 1000);
```

### Obter elementos por tag

---

Podemos selecionar todos os elementos com a mesma tag.

```javascript
let divs = document.getElementsByTagName("div");
console.log(divs);
```

### | querySelector

---

`.querySelector()` retorna o primeiro elemento com a _query_ especificada, para que possamos direcionar os elementos pelo seu id, classe, tags...

```javascript
let firstContent = document.querySelector(".content"); // a pesquisa usa notação como css
console.log(firstContent);
```

Repare que para encontrar uma classe usamos a mesma notação de css, usando um ponto `.` (`.content`). Se estivéssemos a selecionar um id usaríamos um `#`, e para selecionar tags escrevemos apenas o seu nome (`div`)

### | querySelectorAll

---

Se quisermos obter todos os elementos com a query especificada:

```javascript
let allDivs = document.querySelectorAll(".content, #card");
console.log(allDivs);
```

Ao utilizar uma vírgula, podemos procurar várias coisas.

### | .className

---

Podemos obter e alterar a classe de elementos usando o atributo `className`:

```javascript
let bottomElement = document.querySelector(".bottom");
console.log(bottomElement.className);

bottomElement.className = "top";
console.log(bottomElement.className);
```

### .classList

---

Embora `.classList` seja somente leitura, podemos modificar a lista de classes associadas com `.add()` , `.remove()` e `.toggle()`.

```javascript
bottomElement.classList.add("contrast"); // adiciona uma class
bottomElement.classList.toggle("dark-mode"); // faz toggle de uma class
bottomElement.classList.remove("contrast"); // remove uma class
console.log(bottomElement.className);
```

### | .id

---

Da mesma forma que usamos `classname`, podemos recuperar e alterar o id:

```javascript
console.log(cardElement.id);

cardElement.id = "poker";
console.log(cardElement.id);
```

### | Criar e remover elementos

Podemos criar elementos através do método `createElement`, especificando a tag:

```js
let myTitle = document.createElement("h1");
```

Podemos inserir o elemento na nossa página através dos métodos `appendChild` e `insertBefore`:

```javascript
let myFooter = document.createElement("footer");
//aqui adcicionamos o footer a seguir ao último elemento do nosso documento, ficando portanto no fim
document.appendChild(myFooter);

//aqui adicionamos o titulo antes do card
document.insertBefore(myTitle, cardElement);
```

Para remover um elemento podemos utilizar os métodos `remove` ou `removeChild`:

```js
//O método remove, remove o próprio elemento
myFooter.remove();

//O método removeChild remove um elemento dentro do parent:
cardElement.removeChild(bottomElement);
```

## Alterar o conteúdo

Podemos alterar o conteúdo de um elemento através de duas propriedades, `textContent` e `innerHTML` :

```js
myTitle.textContent = "Hello world";

cardElement.innerHTML = "<h3> New content </h3>";
```

### Exercício :

Crie um novo div.
Altere o conteúdo do div para incluir um h1 com algum texto.
Através dos métodos de query, guarde o h1 numa variável.
Altere o estilo do h1 de maneira a que o texto seja vermelho.

Solução:

```js
let newDiv = document.createElement("div");

newDiv.innerHTML = "<h1>I'll be red</h1>";

let newh1 = newDiv.querySelector("h1");

newh1.style.color = "red";
```
