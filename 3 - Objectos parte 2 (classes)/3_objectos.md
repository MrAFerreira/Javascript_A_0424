A ideia geral subjacente à OOP é a utilização de objectos para armazenar dados sob a forma de campos/atributos e procedimentos sob a forma de métodos/funções.

Os objectos são a ferramenta principal.

## Objectos

### O que são objectos

- Objetos são coleções de pares `key-value` não ordenados, também conhecidos como **propriedades**
- Representados por curly brackets { }
- Pares `key-value` são dois itens ligados entre si:
  - Uma chave/key é uma string que identifica uma propriedade
  - Um valor/value é apenas isso, um valor da referida chave/propriedade
  - As chaves são únicas e só terão um valor

Tal como num dicionário, a palavra é a chave e a explicação é o valor (daí noutras linguagens de programação objectos serem chamados dicionários). Os objectos são úteis porque podemos armazenar _dados relacionados_ em conjunto. Podemos armazenar valores de qualquer tipo (string, números, arrays, outros objectos...)

### Sintaxe e declaração

- Podemos facilmente declarar um objeto com curly brackets { } utilizando a `object literal syntax`:

```javascript
const myObj = {
  key1: 1,
  key2: 2,
  key3: 3,
};
```

Também pode utilizar `object constructor syntax`:

```javascript
const myObj = new Object();
```

## Métodos de objectos

Os métodos são simplesmente funções que são armazenadas como propriedades de objectos. Isto é útil porque nos permite armazenar conteúdos e funcionalidades relacionados em conjunto.

```javascript
const client = {
  id: 1234,
  name: 'Jack',
  balance: 1000,
  printInfo: function () {
    console.log(`${client.name} has the id ${client.id}`);
  },
};

client.printInfo();
```

No exemplo acima, adicionámos o método `printinfo` ao nosso objeto `client`. Uma vez que este método só será utilizado com este objeto em particular, faz sentido armazená-lo em conjunto em vez de numa função separada. Esta separação de preocupações é um dos princípios da OOP conhecido como `encapsulation`.

Javascript também tem muitos métodos embutidos que são usados regularmente, por exemplo, em strings temos `toUpperCase`, `splice`, `split`, e em arrays temos `map`, `filter`, `reduce` e muitos outros.
Ter métodos disponíveis que podemos utilizar sem sequer conhecer o código subjacente está de acordo com um dos princípios da OOP, `abstraction`.

## this e scoping

---

A palavra-chave `this` geralmente refere-se ao próprio objeto. Por exemplo:

```javascript
const client = {
  name: 'Jack',
  balance: 1000,
  printInfo: function () {
    console.log(`${this.name} has the id ${this.id}`);
  },
  deposit: function () {
    console.log(this); // this refere-se ao objecto client
  },
};

client.deposit();
```

A palavra-chave `this` torna-se muito útil porque agora podemos criar vários objectos com as mesmas propriedades e em vez de usar o nome da variável podemos usar a palavra-chave `this`.

```javascript
const client2 = {
  name: 'Sally',
  balance: 2000,
  printInfo: function () {
    console.log(`${this.name} has the id ${this.id}`);
  },
  deposit: function () {
    console.log(this); // this refere-se ao objecto client2
  },
};

client.deposit();
```

Se tentarmos utilizar o método de depósito para aumentar o saldo, podemos ver que funciona:

```javascript
const client = {
  name: 'Jack',
  balance: 1000,
  deposit: function () {
    this.balance += 1000;
    console.log(this.balance);
  },
};

client.deposit();
```

Mas se o colocarmos dentro de um setInterval:

```javascript
const client = {
  name: 'Jack',
  balance: 1000,
  deposit: function () {
    setInterval(function () {
      this.balance += 1000;
      // Aqui a palavra this deixa de se referir ao objecto client e passa a referir-se á função setInterval
      console.log(this.balance);
    }, 1000);
  },
};

client.deposit();
```

Deixa de funcionar porque perde o acesso ao scope do utilizador. A maneira de corrigir isso é utilizando `arrow syntax`.

```javascript
const client = {
  name: 'Jack',
  balance: 1000,
  deposit: function () {
    setInterval(() => {
      this.balance += 1000;
      //usando arrow syntax ligamos novamente o scope ao objecto client, ao invés do setInterval
      console.log(this.balance);
    }, 1000);
  },
};

client.deposit();
```

Uma `arrow function` vincula o scope do objeto `client` ao `setInterval`, tornando-o acessível através da palavra-chave `this`.
É muito comum utilizar `arrow functions` para ter acesso a este recurso.

### | Exercício

---

Usando o objecto `client` como base, cria um método `monthlyPayment` que aceita um número como argumento. Este método deve conter um `setInterval` de 1000 milisegundos (1 segundo) que verifica se o `client` tem `balance` suficiente. Se tiver, é retirado o número que foi passado como argumento. Caso contrário é feito `console.log` da mensagem "Out of balance".
Bónus: Se não houver `balance` suficiente o `setInterval` deve ser interrompido.

Solução:

```javascript
const client = {
  name: 'Jack',
  balance: 1000,
  deposit: function () {
    setInterval(() => {
      this.balance += 1000;
      //the arrow will bind the client scope to the setInterval, making it accessible
      console.log(this.balance);
    }, 1000);
  },
  monthlyPayment: function (amount) {
    const intervalID = setInterval(() => {
      if (this.balance > amount) {
        this.balance -= amount;
        console.log(this.balance);
      } else {
        console.log('insufficient funds');
        clearInterval(intervalID);
      }
    }, 1000);
  },
};

client.monthlyPayment(499);
```

## Factory functions

Factory functions são funções que criam objectos com um formato específico. Utilizando o exemplo anterior de um objecto client, podemos criar uma função como a seguinte:

```javascript
function createClient(name, initialBalance) {
  return {
    name: name,
    balance: initialBalance,
    deposit: function () {
      setInterval(() => {
        this.balance += 1000;
        console.log(this.balance);
      }, 1000);
    },
  };
}
```

Podemos agora criar novos objectos com o mesmo formato:

```javascript
const client = createClient('Jude', 1000);
```
