**Javascript é uma linguagem síncrona, single-threaded, com ALGUNS comportamentos assíncronos**

- single-threaded: apenas um bloco de código é executado de cada vez
- síncrono: é executado linha a linha, de cima para baixo

**Programação assíncrona**

Na programação assíncrona é possível fazer com que o código de uma linha seja programado para ser executado no futuro, para que o resto do código possa continuar a ser executado.

É útil e usado principalmente quando temos de executar **funções que demoram um tempo mais longo/não previsível**.  
 Uma vez que as funções assíncronas não executam o seu return até terem terminado, não é boa ideia passá-las como argumentos a funções normais (obtemos undefined nesses casos);

Quando uma função assíncrona termina, executa uma função **Callback** (a sintaxe depende da função assíncrona)

Vamos ver alguns métodos assíncronos:

### | setTimeout()

Uma função que define um temporizador e executa uma função callback quando o temporizador expira.

```javascript
const timeoutId = setTimeout(callbackFunction, delay);
```

- callbackFunction - função a ser executada depois de o temporizador expirar
- delay (opcional) - o tempo (em milissegundos) que o temporizador deve esperar

O método devolve um `timeoutID` que identifica o temporizador específico. Pode ser utilizado para cancelar a função.

```javascript
// ES5
function someCallbackFunction() {
  console.log("Hey John!");
}
const timeoutId = setTimeout(someCallbackFunction, 1000);

//Podemos alterar para outro tempo, 5 segundos por exemplo
// const timeoutId = setTimeout(someCallbackFunction, 5000);
```

Para cancelarmos a execução temos de usar o método `clearTimeout`

```javascript
const timeoutId = setTimeout(someCallbackFunction, 5000);

clearTimeout(timeoutId);
```

Sintaxe com função anónima:

```javascript
// ES5
const timeoutId = setTimeout(function () {
  console.log("Hey John!");
}, 1000);

// ES6
const timeoutId = setTimeout(() => {
  console.log("Hey John");
}, 1000);
```

### setInterval()

Uma função que executa uma callback repetidamente com um atraso fixo entre cada chamada.

```javascript
const timeoutId = setTimeout (callbackFunction , 'delay);
```

- callbackFunction - função a ser executada depois de o temporizador expirar
- delay (opcional) - o tempo (em milissegundos) que o temporizador deve esperar antes de executar o retorno de chamada de cada vez

O método devolve um `intervalID` que identifica o temporizador específico. Pode ser utilizado para cancelar a função.

```javascript
const intervalId = setInterval(function () {
  console.log("2 Seconds");
}, 2000);
```

Exercício:
Criar uma função de contador que conte os segundos e a pare após 10 segundos.

Solução:

```javascript
function countTen() {
  let currentTime = 1;
  let intervalId = setInterval(() => {
    if (currentTime >= 10) {
      clearInterval(intervalId);
    }
    console.log(currentTime);
    currentTime++;
  }, 1000);
}

countTen();
```

### Promessas

---

Promessas são código assíncrono que não bloqueia a thread principal e permite-nos atrasar uma ação até que algo aconteça.

Sintaxe:

```javascript
const myPromise = new Promise( (resolve, reject) => {
   if (/* condition */) {
      resolve(/* value */);  // fulfilled successfully
   }
   else {
      reject(/* reason */);  // error, rejected
   }
});

```

As promessas podem ter 3 estados diferentes: **pending**, **resolved**, and **rejected**.

Podemos chamar imediatamente estes estados:

```javascript
const promisePending = new Promise((resolve, reject) => {});
const promiseResolved = Promise.resolve(42);
const promiseRejected = Promise.reject("We rejected it");

console.log(promisePending);
console.log(promiseResolved);
console.log(promiseRejected);
```

Exemplo de uma promessa:

```javascript
const names = ["Jim", "Pam", "Michael", "Dwight"];
function obtainNames(count) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (!names[count]) reject("Name not found.");
      else {
        console.log(names[count]);
        resolve();
      }
    }, 2000);
  });
}

obtainNames(0)
  .then(() => obtainNames(1))
  .then(() => obtainNames(2))
  .then(() => obtainNames(3))
  .then(() => obtainNames(4))
  .then(() => console.log("No more names left"))
  .catch(err => console.log(err));
```

O `.then()` é acionado quando uma promessa é resolvida, o que nos permite encadeá-los de seguida.

### | Promise manipulation

---

Quando uma função é resolvida (resolved ou rejected), podemos utilizar o valor de retorno com um `.then()` ou um `.catch()`

Usando o exemplo anterior com um valor de resolve:

```javascript
const names = ["Jim", "Pam", "Michael", "Dwight"];

function obtainNames(count) {
  return new Promise(function (resolve, reject) {
    // setTimeout(() => {
    console.log(names[count]);

    if (!names[count]) reject("Name not found.");
    else resolve(names[count]);
    // }, 2000);
  });
}

obtainNames(0).then(name => console.log(name));
```

O `.catch()` faz a mesma coisa caso a promessa seja rejeitada:

```javascript
function obtainNames(count) {
  return new Promise(function (resolve, reject) {
    // setTimeout(() => {
    console.log(names[count]);

    if (!names[count]) reject("Name not found.");
    else resolve(names[count]);
    // }, 2000);
  });
}

obtainNames(4)
  .then(name => console.log(name))
  .catch(err => console.log(err));
```

### Throwing errors

---

Se fizermos throw de um erro a promessa é automaticamente rejeitada:

```javascript
const promise3 = new Promise((resolve, reject) => {
  throw new Error("Rejected by throwing an Error!");
});

promise3
  .then(value => console.log("Resolved with: ", value))
  .catch(err => console.log("catch() -> ", err));
```

Se o fizermos dentro de um `.then()` este vai passar para o `.catch()` mais próximo:

```javascript
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolved promise?"), 2000);
});

promise4
  .then(() => {
    console.log("1. then()");
  })
  .then(() => {
    console.log("2. then()");
    throw new Error("Something went wrong"); // <= Throw an Error
  })
  .then(() => {
    // este .then é ignorado
    console.log("3. then()");
  })
  .catch(err => console.log("catch() -> ", err));
```

### | Chaining com .then() e.catch()

---

O método `.then()` retorna sempre uma promessa, o que nos permite encadeá-los quantas vezes quisermos, como vimos anteriormente:

```javascript
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Chaining"), 2000);
});

pr5
  .then(value1 => {
    console.log("value1:", value1);
    return "Works";
  })
  .then(value2 => {
    console.log("value2:", value2);
    return "Inside";
  })
  .then(value3 => {
    console.log("value3:", value3);
    return "Then";
  })
  .then(value4 => {
    console.log("value4:", value4);
  });
```

Como o `.catch()` retorna uma promessa podemos também encadeá-lo ao `.then()` desde que utilizemos um `return`:

```javascript
const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("A"), 2000);
});

promise6
  .then(value1 => {
    console.log("1. then(): ", value1);
    throw new Error("FIRST ERROR");
  })
  .catch(err => {
    console.error("1. catch(): ", err);
    return "Hello from catch";
  })
  .then(value2 => {
    console.log("2. then(): ", value2);
    throw new Error("SECOND ERROR");
  })
  .catch(err => {
    console.error("2. catch(): ", err);
  });
```

### | .finally()

---

O método `.finally()` corre sempre no final de uma promessa, independentemente de esta ter sido rejeitada ou resolvida:

```javascript
const promise7 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise 9"), 2000);
});

promise7
  .then(() => console.log("1. then()"))
  .then(() => Promise.reject("Rejected")) // <= Reject
  .then(() => console.log("3. then()")) // <= Este .then é ignorado
  .catch(err => {
    console.log("catch()", err);
  })
  .finally(() => console.log("finally()")); // <= Corre sempre
```

### | Promise.all()

---

Se quisermos fazer algo apenas quando um grupo de promessas tiver sido resolvido, podemos usar o método `.all()`. Este recebe um array de promessas e retorna uma única promessa quando todas forem completadas:

```javascript
Promise.all([promise4, promise5, promise6, promise7]).then(values =>
  console.log("values", values)
);
```

Se apenas uma das promessas for **rejeitada**, `.all()` retorna com o valor da promessa rejeitada, mesmo que as outras tenham sido resolvidas:

```javascript
// alterando a promise5 para ser rejeitada:
// const promise5 = new Promise((resolve, reject) => {
//  setTimeout(() => reject('rejected'), 2000);
// });

Promise.all([promise4, promise5, promise6, promise7])
  .then(values => console.log("values", values))
  .catch(err => console.log("catch()", err));
```

Exercício anterior com Promises:

```javascript
function countTen() {
  return new Promise((resolve, reject) => {
    let currentTime = 1;
    let intervalId = setInterval(() => {
      if (currentTime >= 10) {
        clearInterval(intervalId);
        resolve();
      }
      console.log(currentTime);
      currentTime++;
    }, 1000);
  });
}

countTen().then(() => {
  console.log("Counting finished.");
});
```
