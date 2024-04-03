Async / await são keywords que nos ajudam a escrever melhores promessas e podem até suspender a execução do código até que algo seja feito.

### | Async

---

A sintaxe para criar funções assíncronas pode ser usada tanto com function declaration como com function expressions/arrow functions:

```javascript
// Async function syntax
async function myFunc() {}

// Async arrow function syntax
const myFunc = async () => {};
```

Assim que declaramos uma função como async, o retorno da mesma será na forma de uma promessa:

```javascript
async function someFunction() {
  return true;
}

someFunction().then(value => console.log(value)); // true
```

### | Await

---

Podemos utilizar a keyword await dentro de funções assíncronas para executar código assíncrono, de forma síncrona (por ordem:)

```javascript
async function getNames() {
  await obtainNames(0);
  await obtainNames(1);
  await obtainNames(2);
  await obtainNames(3);
  console.log("Finished promises!");
}

getNames();
```

Usar await antes de uma promessa interrompe a função assíncrona até que essa promessa seja resolvida.

### | Try/Catch block

---

O bloco try catch permite-nos executar o nosso código e gerir quaisquer erros que ocorram dentro dele. Usando o exemplo anterior:

```javascript
async function getNames() {
  try {
    await obtainNames(0);
    await obtainNames(1);
    await obtainNames(2);
    await obtainNames(3);
    console.log("Finished promises!");
  } catch (err) {
    console.log(err);
  }
}

getNames();
```

Com um erro:

```javascript
async function getNames() {
  try {
    await obtainNames(0);
    await obtainNames(1);
    await obtainNames(2);
    await obtainNames(3);
    await obtainNames(4);
    console.log("You arrived at your destination!");
  } catch (err) {
    console.log(err);
  }
}

getNames();
```

### | Fetch API

---

Quando obtemos dados de um servidor a operação pode demorar algum tempo, por isso devemos executar esse código de forma assíncrona, utilizando para isso a API fetch.

**API** - ou Application Programming Interface é um programa que fornece alguma funcionalidade e pode ser acedido por outro programa ou sistema.

**API REST** - é um servidor (computador) na rede que fornece dados a outros programas e dispositivos. Um programa ou dispositivo pode obter os dados do servidor enviando um pedido HTTP.

### |.fetch()

---

O método `.fetch()` aceita um argumento, o URL onde vai fazer o pedido de informação e retorna uma promessa que resolve a resposta desse pedido, mesmo que tenha sido um Erro HTTP:

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      http-equiv="X-UA-Compatible"
      content="IE=edge"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Fetch API</title>
  </head>
  <body>
    <!-- Link the javascript file -->
    <script src="index.js"></script>
  </body>
</html>
```

```javascript
// index.js

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log("Parsed response: ", data);
  })
  .catch(err => console.log(err));
```

### |.json()

---

A resposta que recebemos de um `.fetch()` não contém os dados diretamente acessíveis, por isso devemos usar `.json()` para analisá-los num formato legível. Este método também retorna uma promessa que é resolvida com os dados analisados.

Agora podemos usar a informação e até passá-la para nossa página html (atualizando o exemplo anterior: )

```javascript
// index.js

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => response.json())
  .then(data => {
    const pokemonImage = data.sprites.front_default;
    const imgElement = document.createElement("img");

    const pokemonName = data.name;
    const titleElement = document.createElement("h1");
    titleElement.innerText = pokemonName;

    imgElement.setAttribute("src", pokemonImage);
    imgElement.setAttribute("width", 200);
    document.body.appendChild(titleElement);
    document.body.appendChild(imgElement);
  })
  .catch(err => console.log(err));
```

### | Async and Fetch

---

Podemos mudar o nosso código para usar async await em vez de .then:

```javascript
const getPokemon = async query => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    const data = await response.json();

    const pokemonImage = data.sprites.front_default;
    const imgElement = document.createElement("img");

    const pokemonName = data.name;
    const titleElement = document.createElement("h1");
    titleElement.innerText = pokemonName;

    imgElement.setAttribute("src", pokemonImage);
    imgElement.setAttribute("width", 200);
    document.body.appendChild(titleElement);
    document.body.appendChild(imgElement);
  } catch (error) {
    console.log(error);
  }
};

getPokemon("bulbasaur");
```

Solução para o exercício:

```javascript
// adicionar um input de texto com o id search e um botão com o id search-btn ao html
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("search-btn");

const getPokemon = async query => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    const data = await response.json();

    const pokemonImage = data.sprites.front_default;
    const imgElement = document.createElement("img");

    const pokemonName = data.name;
    const titleElement = document.createElement("h1");
    titleElement.innerText = pokemonName;

    imgElement.setAttribute("src", pokemonImage);
    imgElement.setAttribute("width", 200);
    document.body.appendChild(titleElement);
    document.body.appendChild(imgElement);
  } catch (error) {
    console.log(error);
  }
};

searchButton.addEventListener("click", () => {
  const value = searchInput.value;
  getPokemon(value);
});
```
