Na sua essência, as funções são partes reutilizáveis de código que executam uma ação. Isto permite-nos evitar a repetição e manter o nosso código DRY (Don't repeat yourself).

### Declaração

O processo de criar uma função (mas não executá-la) é chamado de **function declaration**:

```javascript
function myFunction(parameters) {
  return something;
}
```

O processo de executar uma função que já existe é chamado de **function invocation**:

```javascript
myFunction(arguments);
```

### | Parâmetros

Uma função pode aceitar nenhum, um ou vários parâmetros (separados por vírgulas);

```javascript
function greetClient(name) {
  console.log(`Hello ${name}!`);
}

greetClient("Jack");
greetClient("Susy");

//Multiple arguments

function greetGroup(name1, name2) {
  console.log(`Hello ${name1} and ${name2}`);
}

greetGroup("Johnny", "Smith");
greetGroup("Peter", "Banner");
```

**Parâmetros vs Argumentos**

- Os parâmetros são os marcadores de posição que fazem parte da declaração da função (podem ter qualquer nome, mas devem ser descritivos)
- Argumentos são os valores que passamos para a função quando a invocamos

### | Return

Uma função **retorna sempre algo** (se não for especificado, será undefined). A instrução **return** fornece um valor como resultado da função.
É o **último** código a ser executado na função, qualquer coisa escrita depois não será executada. No entanto, podemos ter várias instruções de retorno (se tivermos condições, por exemplo).

```javascript
function greetCheck(name) {
  if (name.length === 0) {
    return "No name written";
  }
  return `Name is ${name}`;
}

sayName("");
sayName("Jack");
```

### | Retornar com um objecto ou array

Como as funções não podem retornar vários valores soltos, se precisarmos de retornar informação variada podemos utilizar objects ou arrays para agregar a mesma.

### | Exercício

- Cria uma função que recebe como argumento um array de números e retorna a média total.
- Usa este array como teste:

```javascript
averageArr = [350, 560, 680, 10];
```

**Aspectos fundamentais de uma função**

- Código reutilizável (chama-a quantas vezes quiseres)
- Abstração (podemos obter resultados sem nos preocuparmos com o que está a acontecer em segundo plano)
- Separation of concerns - Podemos dividir um problema em partes mais pequenas e mais fáceis de gerir
- Responsabilidade única - Uma função deve fazer apenas uma coisa

### | Refactoring

Podemos melhorar a função anterior e separá-la em funções mais pequenas:

```javascript
//Função original
function avg(array) {
  if (!array.length) return;

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

// Extrair a lógica de soma para uma função separada

function sum(array) {
  if (!array.length) return;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// Utilizar a função sum dentro da função avg, simplificando-a
function avg(array) {
  if (!array.length) return;
  return sum(array) / array.length;
}

// Agora é possível também usar a função sum independentemente
```

### | Function Expression

Temos de compreender que as funções são objectos e, como tal, podem ser atribuídas a variáveis:

```javascript
const myAvg = avg;

console.log(avg);
```

Podemos saltar este passo e escrever a função quando declaramos a variável, da seguinte forma:

```javascript
const mySum = function (a, b) {
  return a + b;
};

console.log(mySum(10, 45));
```

### Diferenças:

- Uma **function declaration** é uma função nomeada que **pode** ser armazenada numa variável
- Uma **function expression** é uma função anónima que **é** armazenada numa variável

A maior diferença entre as duas vem com o **hoisting**:

```javascript
//function declaration

myDeclaredFunction(); // => Function declaration PODEM ser invocadas antes de serem definidas (são hoisted)

function myDeclaredFunction() {
  console.log(
    "Function declaration PODEM ser invocadas antes de serem definidas."
  );
}
```

```javascript
// function expression

myExpressedFunction(); // => ReferenceError: myExpressedFunction is not defined

const myExpressedFunction = function () {
  console.log(
    "Function expression NÂO PODEM ser invocadas antes de serem definidas."
  );
};
```

- As **function declarations** são colocadas no topo do código quando este é interpretado. As **expressions** não.
- Deve-se usar o que parecer melhor ou o que estiver a ser usado pela equipa.
- As **function expression** têm a vantagem de serem mais organizadas (uma vez que não se pode chamar antes de definir, o código torna-se mais compacto e ordenado).
