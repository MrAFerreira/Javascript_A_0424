Erros são eventos inesperados que interrompem o fluxo normal de um programa. Em JavaScript, os erros podem ocorrer devido a erros de sintaxe, erros de tempo de execução ou erros lógicos.

### Mecanismos de tratamento de erros

---

JavaScript fornece mecanismos para lidar com erros de forma graciosa, impedindo-os de parar todo o programa. O bloco try...catch é um desses mecanismos que nos permite capturar e tratar erros dentro de um bloco de código.
O bloco try contém o código que pode lançar um erro, e o bloco catch trata o erro se ele ocorrer.

```javascript
try {
  // Código que pode conter erros
  let result = nonExistentFunction();
  console.log(result);
} catch (error) {
  // Tratar o erro
  console.log("An error occurred:", error.message);
}
```

### Tipos de erros:

---

**SyntaxError**:
Os erros de sintaxe ocorrem quando o código não cumpre as regras da linguagem. Estes erros são detectados pelo motor JavaScript durante a fase de análise, antes de o código ser executado. As causas comuns incluem pontuação em falta ou mal colocada, palavras-chave mal escritas e atribuições incorrectas de variáveis.

Exemplo:

```javascript
let x: 10; // SyntaxError: Unexpected token ':'
console.log(x);
```

**ReferenceError**:
Os erros de referência ocorrem quando se tenta aceder a uma variável ou função que não está definida. Isto pode acontecer devido à escrita incorrecta do nome de uma variável ou função, ao acesso a variáveis fora do scope ou à utilização de variáveis antes de serem declaradas.

Exemplo:

```javascript
console.log(y); // ReferenceError: y is not defined
```

**TypeError**:
Os erros de tipo ocorrem quando uma operação é executada num valor do tipo errado. Isto pode acontecer ao tentar aceder a propriedades ou métodos de valores nulos ou indefinidos, ao efetuar operações em valores não numéricos ou ao utilizar tipos incompatíveis.

Exemplo:

```javascript
let x = "Hello";
x.sort(); // TypeError: x.sort is not a function
console.log(x.first.name); // TypeError: Cannot read properties of undefined (reading 'name')
```

**RangeError**:
Os erros de intervalo ocorrem quando um valor numérico não está dentro do intervalo permitido pela operação. Isto pode acontecer quando se tenta aceder a valores negativos num array, por exemplo.

Exemplo:

```javascript
let arr = new Array(-1); // RangeError: Invalid array length
```

Se tivermos uma função recursiva que não é terminada corretamente, obtemos um **Stack Overflow** que é um tipo de Range Error:

Exemplo:

```js
function recursiveFunction() {
  recursiveFunction();
}

recursiveFunction(); // RangeError: Maximum call stack size exceeded
```

**Erros personalizados**:
Podemos criar tipos de erros personalizados estendendo o objeto `Error` incorporado.
Erros personalizados permitem mensagens de erro mais descritivas e podem ajudar a controlar diferentes tipos de erros dentro de uma aplicação.

Exemplo:

```javascript
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

throw new CustomError("This is a custom error.");
```

### Propagação de erros

Os erros podem se propagar pelo call stack se não forem tratados corretamente. Erros não tratados podem levar a um comportamento inesperado e tornar o debugging um desafio.

Exemplo:

```javascript
function foo() {
  throw new Error("Something went wrong!");
}

function bar() {
  foo();
}

try {
  bar();
} catch (error) {
  console.log("An error occurred:", error.message);
}
```

**Melhores práticas para o tratamento de erros**

- Utilizar sempre mensagens de erro significativas para ajudar no debugging.
- Tratar os erros o mais próximo possível da sua origem.
- Usar vários blocos catch para diferentes tipos de erros.
- Utilizar objetos de erro para reunir informações adicionais sobre o erro.

```javascript
const users = ["Pam", "Jim", "Dwight"];

function getUser(idx) {
  if (!users[idx]) throw new CustomError("Error fetching user");
  return users[idx];
}

try {
  getUser(10);
} catch (error) {
  console.log(error.message);
}
```

\*\*Exercício

- Escreva uma função chamada `divide` que recebe dois parâmetros (numerador e denominador) e devolve o resultado da divisão. Trate o caso em que o denominador é zero de forma graciosa.

**Solução:**

```javascript
function divide(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error("Division by zero is not allowed!");
    }
    return numerator / denominator;
  } catch (error) {
    console.log("An error occurred:", error.message);
  }
}

// Testar a função
console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // An error occurred: Division by zero is not allowed!
```
