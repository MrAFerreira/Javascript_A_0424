## Callbacks

Na sua essência, callbacks são apenas funções passadas como argumentos para outras funções (como são objetos, isto pode ser feito)

### Porquê?

Por vezes o código pode levar mais tempo para ser executado, o que pode interferir com a sua ordem de execução natural.

Exemplo forçado:

```javascript
function firstMessage() {
  setTimeout(function () {
    console.log('This message first!');
  }, 1000);
}

function secondMessage() {
  console.log('This message after!');
}

firstMessage();
secondMessage();
```

Isto pode acontecer numa situação real em que estamos a obter dados de uma API.

Para alterar a função acima para usar callbacks:

```javascript
function firstMessage(callback) {
  //callback é um placeholder, pode ser qualquer palavra
  setTimeout(function () {
    console.log('Do this first!');
    callback();
  }, 1000);
}

function secondMessage() {
  console.log('Do this only after!');
}

firstMessage(secondMessage); // não esrtamos a invocar a função secondMessage por isso não precisamos de parênteses ()
```

Podíamos chamar a função pelo seu nome (secondMessage()), mas com este padrão a nossa função torna-se mais genérica e permite-nos usar diferentes funções como callbacks.

### | Funções anónimas

---

As funções anónimas são funções que não têm nomes, por isso, se não as armazenarmos em variáveis , normalmente não podem ser utilizadas após a sua criação inicial. Elas são úteis principalmente quando não precisamos de executar essa ação novamente.

Um exemplo comum é a função que passamos a um setTimeout (um método nativo do javascript):

```javascript
setTimeout(function () {
  console.log("I'm anon and I'm going to take a while. I don't need to be repeated");
}, 2000);
```

São também utilizadas com event listeners (que veremos na aula de Eventos)

### Exercício:

Cria uma função chamada `processArray` que aceite um array de números e uma função de callback que irá aplicar uma transformação num número. A função deve retornar um novo array com a transformação aplicada. Por exemplo:

```javascript
function processArray(numbers, callback) {
  // lógica da função
  // ...
}

let numbers = [1, 2, 3, 4, 5];
let squares = processArray(numbers, function (number) {
  return number * number;
});
console.log(squares); // output: [1, 4, 9, 16, 25]
```

No exemplo acima passamos um array de números e uma função anónima que multiplica os números por si próprios (quadrados).

Solução:

```javascript
function processArray(numbers, callback) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(callback(numbers[i]));
  }
  return result;
}
```

### | Arrow Functions =>

---

As **arrow functions** são uma nova sintaxe para **function expressions** introduzidas com o ES6.
Além de terem uma sintaxe mais curta são também uteis para lidar com alguns problemas de scoping.

Sintaxe:

```javascript
//expression syntax
const sayHi = function (name) {
  console.log(`Hello, ${name}!`);
};

//arrow syntax
const sayArrowHi = (name) => {
  console.log(`Hello, ${name}!`);
};

//versão curta
const sayShortHi = (name) => `Hello, ${name}!`;
//Quando retornamos apenas uma expressão (uma linha de código) podemos omitir a palavra return e os { curly brackets }

// Se a função não precisar de argumentos, usamos parenteses vazios
const noParamsArrow = () => console.log('Hey hey');
```

## | Arguments Object

Dentro de uma função podemos aceder a um objeto chamado `arguments` que contém todos os argumentos passados para a função:

```javascript
function getArguments() {
  console.log(arguments);
}

getArguments('hey', 1, false);
```

Arguments é um **array-like object** :

- tem .length e é indexado a zero
- **não** tem métodos de array como forEach, map, etc
- podemos usar notação de parêntesis para aceder a um argumento (como arguments[0] )

**Exemplo:**
Podemos usar os argumentos em um `for loop` se não soubermos a quantidade de argumentos que a função receberá, por exemplo:

```javascript
function sumArguments() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
  return sum;
}

sumArguments(1, 45, 2123, 987, 90);
sumArguments(1, 45);
```

Se for necessário transformar `arguments` num array podemos fazê-lo através de:

```javascript
const args = Array.from(arguments);
```

### IIFE

IIFE , que significa _immediately invoked function expression_ , é um padrão de design em Javascript em que uma função é declarada e executada imediatamente.

```javascript
(function () {
  // logic here
})();

(() => {
  // logic here
})();

(async () => {
  // logic here
})();
```

A principal utilização dos IIFE's consistia em evitar a poluição do espaço de nomes global, criar variáveis privadas (com o padrão de módulo) , utilizar async/await em browsers mais antigos e lidar com questões de scoping, uma vez que antes do ES6 **let** , **const** e o **block scope** não estavam disponíveis.

```javascript
//Exemplo para evitar poluir o espaço global
(function () {
  var localVar = 'IIFE example'; // localVar não é acessível fora desta função
})();

//Module pattern
var myModule = (function () {
  var privateVar = 'IIFE data privacy';

  return {
    getPrivateVar: function () {
      return privateVar;
    },
  };
})();

console.log(myModule.getPrivateVar()); // Outputs: IIFE data privacy
//privateVar não é directamenten acessivel fora desta IIFE
```
