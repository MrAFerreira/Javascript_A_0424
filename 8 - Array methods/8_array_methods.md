## Arrays - Map , Reduce, Filter | Lesson

---

- Além do `forEach` temos outros métodos para iterar sobre um array.
- Embora ainda possamos usar o forEach para obter os mesmos resultados, estes métodos são considerados mais legíveis.
- Estes métodos não alteram o array original!

### | Map

---

- O `forEach` não retorna nada e se quisermos fazer alguma operação no array que estamos a iterar teremos que modificar o array original.
- `.map()` permite-nos fazer uma operação sobre cada elemento iterado e retorna um novo array do mesmo tamanho.

Com forEach:

```javascript
const array = [1, 2, 3];

const newArray = []; // temos que criar um array auxiliar (newArray)
array.forEach(numcopy => {
  numcopy *= 2; // dobrar o valor da cópia
  newArray.push(numcopy); // fazer push para newArray
});

console.log(newArray); // <== [ 2, 4, 6 ]
```

Com .map() :

```javascript
const array = [1, 2, 3];

const newArray = array.map(number => number * 2);

console.log(newArray); // [ 2, 4, 6 ]
```

Com `.map()` **devemos retornar um valor**, caso contrário teremos um novo array preenchido com valores `undefined`

Transformar tudo em maiúsculas:

```javascript
const silent = ["can", "you", "hear me", "now"];

const scream = silent.map(word => word.toUpperCase());

console.log(scream);
```

**Exercício**:
Tornar maíuscula a primeira letra de cada cidade no seguinte array:

```javascript
const cities = [
  "miami",
  "barcelona",
  "madrid",
  "amsterdam",
  "berlin",
  "sao paulo",
  "lisbon",
  "mexico city",
  "paris",
];
```

Solução:

```javascript
const capitalCities = cities.map(city => {
  return city[0].toUpperCase() + city.slice(1);
});
```

Solução no caso de mais do que uma palavra:

```javascript
const capitalCities = cities.map(city => {
  if (city.includes(" ")) {
    const words = city.split(" ");
    return words
      .map(word => {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ");
  } else {
    return city[0].toUpperCase() + city.slice(1);
  }
});
```

Solução mais curta:

```javascript
const capitalCities = cities.map(city => {
  const words = city.split(" ");
  return words
    .map(word => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
});
```

### | Reduce

---

`.reduce()` é um método que transforma **uma lista de valores** em **um valor**;

Sintaxe:

```javascript
array.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
  // accumulator e currentValue são placeholders
  //é também comum ver acc and value
});

// ES6 Syntax
array.reduce((accumulator, currentValue) => accumulator + currentValue);
```

**accumulator** é o valor acumulado de cada iteração. Se não for especificado, será o primeiro valor do array.
**currentValue** é o elemento atual da iteração que será adicionado ao accumulator.

Exemplo com uma soma:

```javascript
const numbers = [2, 4, 6, 8];

const sumTotal = numbers.reduce((acc, currentValue) => {
  console.log(`Accumulator: ${acc}, currentValue: ${currentValue}`);
  return acc + currentValue;
});

console.log(sumTotal);
```

Com um valor inicial de 10:

```javascript
const numbers = [2, 4, 6, 8];

const sumTotal = numbers.reduce((acc, currentValue) => {
  console.log(`Accumulator: ${acc}, currentValue: ${currentValue}`);
  return acc + currentValue;
}, 10);

console.log(sumTotal);
```

Em cima temos 4 console.logs em vez de 3, porque como temos um valor inicial o reduce não vai usar o primeiro como valor base, vai iterar sobre o comprimento do array.

O `.reduce()` também pode ser utilizado para strings.

```javascript
const separateWord = ["U", "n", "i", "t", "e", "d"];

const unitedWord = separateWord.reduce(
  (acc, currentValue) => acc + currentValue
);

console.log(unitedWord);
```

**Exercício**:
Crie uma função que calcule a média dos preços neste array, utilizando reduce (mas não só):

```javascript
const products = [
  { name: "Keyboard", price: 30.0 },
  { name: "Mouse", price: 64.99 },
  { name: "Controller", price: 59.8 },
  { name: "Speakers", price: 43.7 },
];
```

Solução:

```javascript
const calcAvg = array => {
  const totalPrice = array.reduce((acc, currentValue) => {
    return acc + currentValue.price;
  }, 0);
  return totalPrice / products.length;
};
```

Para os objectos, é necessário definir um valor inicial, caso contrário **o accumulator será o objeto inteiro**.

### | Filter

Filter itera sobre um array e retorna um novo com os elementos que passam a condição que definimos.

Assim como em map e reduce, .filter() recebe uma função de callback. Se retornar verdadeiro, o elemento é adicionado ao novo array.

Exemplo:

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

//ES5
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

//ES6
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);
```

Funciona com todos os tipos de dados:

```javascript
const products = [
  { name: "Keyboard", price: 30.0, available: true },
  { name: "Mouse", price: 64.99, available: false },
  { name: "Controller", price: 59.8, available: true },
  { name: "Speakers", price: 43.7, available: false },
];

const availableProducts = products.filter(product => product.available);

console.log(availableProducts);
```

## | Sort e reverse

O método `.sort()` ordena os elementos de um array no lugar, e retorna **o mesmo array** ordenado.

- Podemos passar uma função de comparação
- Podemos usar a função padrão ( transforma os elementos **em strings** e compara por utf)

Exemplo:

```javascript
//A função default para comparar:
function compare(a, b) {
  if (a < b) return -1; // a is less than b
  if (a > b) return 1; // a is greater than b
  if (a === b) return 0; // a equals b
}
// Podemos usar esta função e adaptá-la

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

numbers.sort();

console.log(numbers);
```

Isto não vai ordenar os números porque está a transformá-los em strings primeiro.

Para os ordenar adequadamente, precisamos de passar uma função de comparação:

```javascript
// A função de comparação aceita dois parâmetros, a e b, de maneira a ordenar os números

//if a-b > 0 , a é maior (b vem antes)
//if a-b < 0, b é maior (a vem antes)
//if a-b === 0, a e b são iguais

/* ES5 syntax 
numbers.sort(function (a, b) {
  return a - b;
}); 
*/

//ES6 syntax
numbers.sort((a, b) => a - b);

console.log(numbers);
```

**Ordenar strings**

Como `.sort()` transforma os elementos do array em strings, podemos utilizá-lo diretamente para ordenar um array de strings:

```javascript
const words = ["Hey", "hello", "Ola", "oi", "aloha"];
words.sort();
console.log(words);
```

As letras maiúsculas são ordenadas primeiro.

**Exercício**:
Fazer sort de um array independentemente das letras serem maiúsculas ou não.

```javascript
words.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) return -1;
  if (a.toLowerCase() > b.toLowerCase()) return 1;
  if (a === 0) return 0;
});
console.log(words);
```

Podemos utilizar a lógica acima para comparar o comprimento de strings (usamos .length em vez de .toLowercase())

[Alguns algoritmos visualizados](https://www.youtube.com/watch?v=kPRA0W1kECg)

## | Reverse

O método `reverse` faz exactamente o que o nome indica: reverte a ordem de um array.

```javascript
words.reverse();
console.log(words);
```
