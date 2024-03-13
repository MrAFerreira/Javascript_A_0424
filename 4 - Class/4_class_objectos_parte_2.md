### Class

Enquanto que em Javascript podemos criar funções que criam novos objectos (também chamadas _factory functions_ ), este padrão também pode ser conseguido utilizando a palavra-chave `class`.
As classes funcionam como blueprints para objectos e podemos usá-las quantas vezes quisermos para criar novos objectos.

Vamos usar o exemplo anterior de um objeto `client`:

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

Se quisermos criar um blueprint geral para criar vários objectos de clientes podemos fazê-lo da seguinte forma:

```javascript
class Client {
	constructor(id, name, balance) {
		this.id = id;
		this.name = name;
		this.balance = balance;
	}
	deposit: function () {
	this.balance += 1000
    console.log(this.balance);
  },
   printInfo: function() {
	console.log(`${this.name} has the id ${this.id}`)
  },

}
```

### | construtor e new

O `constructor` é um método especial numa classe que cria e inicializa um objeto.  
Quando usamos a palavra-chave `new` o método `constructor` é chamado e passará esses valores para o novo objeto:

```javascript
let client1 = new Client(12345, 'Jack', 1000);
```

Também adiciona os métodos que definimos (`deposit` e `printInfo`) ao nosso novo objeto. Basicamente podemos passar as variáveis e o resto já está definido.  
No `constructor`, `this` refere-se ao objeto que está a ser criado, então no background o que está a ser feito é parecido com o seguinte:

```javascript
let client1 = {};
client1.id = 12345;
client1.name = 'Jack';
client1.balance = 1000;
```

Com uma class podemos criar a quantidade de objectos que quisermos:

```javascript
let client2 = new Client(54321, 'Sally', 2000);
let client3 = new Client(4564, 'Mario', 500);
```

### | Inheritance e extends

E se quisermos a maioria dos atributos/métodos de uma classe, mas também quisermos adicionar mais?
Para isso recorremos a **inheritance**, um conceito de usar atributos/características de uma classe parente e adicionar mais.
Para o fazermos em Javascript usamos a palavra-chave `extends`.
Exemplo:

```javascript
class Client {
	constructor(id, name, balance) {
		this.id = id;
		this.name = name;
		this.balance = balance;
	},
	deposit() {
		this.balance += 1000
    console.log(this.balance);
  },
   printInfo() {
	console.log(`${this.name} has the id ${this.id}`)
  },

}
//Vamos criar uma class PremiumClient com os mesmos atributos e um adicional :

class PremiumClient extends Client {
  constructor(id, name, balance, discount) {
		super(id, name, balance);
		this.discount = discount;
	}

  showDiscount() {
    console.log(`${this.name} has a ${this.discount}% discount`)
  }
}

const tom = new PremiumClient(1111, "Tom", 5000, 5 )
console.log(tom)
tom.showDiscount();
```

A palavra-chave `super` chama o `constructor` da classe parente (Client) e permite o acesso às suas propriedades e métodos.
Também podemos alterar métodos da classe parente na classe descendente:

```javascript
class AnonymousClient extends Client {
  constructor(id, balance) {
		super(id, null, balance);
	}

  printInfo() {
	console.log(`This client has the id ${this.id}`)
  },
}

const anon1 = new AnonymousClient(56789, 400)

anon1.printInfo()

```

Este conceito é outro princípio da OOP conhecido como `polymorphism`

Exercício:

- Cria uma classe `Whale` com base na class `Animal`, que tenha a propriedade adicional `stomach` (será um array vazio inicialmente).
- Cria um método chamado `eat` que aceita uma string e a adiciona essa string ao `stomach`. Sempre que o método for executado, deve fazer `console.log` da propriedade `sound`.
- Cria um objecto `whiteWhale` com o nome Moby , cor branca e o som "Yum!".
- Usa o método `eat`duas vezes com os strings "Ahab" e "Pequod"

Solução:

```javascript
class Animal {
  constructor(name, color, sound) {
    this.name = name;
    this.color = color;
    this.sound = sound;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class Whale extends Animal {
  constructor(name, color, sound, eaten) {
    super(name, color, sound);
    this.eaten = eaten;
  }

  eat(food) {
    this.eaten.push(food);
    this.makeSound();
  }
}

const moby = new Whale('Moby', 'white', 'Yum!', []);
moby.eat('Ahab');
moby.eat('Pequod');
console.log(moby);
```

## 4 Princípios da OOP:

**Inheritance** - construir por cima de um objeto existente

**Abstraction** - Esconder como algo é feito e mostrar apenas o resultado final.

- Quando criamos um método, tornamo-lo disponível para ser utilizado mas não temos de o escrever/expor novamente
- Métodos nativos de Javascript como `.toUpperCase()` funcionam mas não precisamos de ver o código;
- Torna o código mais legível

**Polymorphism** - herdar métodos da classe parente mas alterar a sua funcionalidade.

- Na nossa classe `Whale` poderíamos mudar `.makeSound()` para transformar a string em maiúsculas:

```javascript
makeSound(){
  console.log(this.sound.toUpperCase())
}
```

**Encapsulation** - Agrupamento de dados e métodos que pertencem uns aos outros, diminuindo o risco de interferência externa:

- Criar métodos em vez de utilizar funções externas, para que não sejam alterados mais tarde
