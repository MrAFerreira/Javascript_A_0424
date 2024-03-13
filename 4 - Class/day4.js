// class

/* const client = {
  name: 'Jack',
  balance: 1000,
  deposit: function () {
    this.balance += 1000;
    console.log(this.balance);
  },
};
 */
//client.deposit();

class Client {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    this.bank = 'Javascript Bank';
  }

  deposit() {
    this.balance += 1000;
    console.log(this.balance);
  }

  printInfo() {
    console.log(`${this.name} has ${this.balance}`);
  }
}

// new e constructor

let client1 = new Client('Jack', 1000);
// let client1 = {}
// client1.name = "Jack"
// client1.balance = 1000
// client1.bank = "Javascript Bank"
let client2 = new Client('Sally', 2000);

/* console.log(client1);
console.log(client2); */

//client1.printInfo();

//const myObj = new Object();

// Inheritance e a keyword extends

class PremiumClient extends Client {
  constructor(name, balance, discount) {
    super(name, balance);
    // this.name = name
    // this.balance = balance

    this.discount = discount;
  }

  showDiscount() {
    console.log(`${this.name} has a ${this.discount}% discount`);
  }
}

const premium1 = new PremiumClient('Tom', 5000, 20);

//console.log(premium1);

//premium1.showDiscount();
//premium1.printInfo();

class AnonymousClient extends Client {
  constructor(balance) {
    super(null, balance);
  }

  //polymorphism
  printInfo() {
    console.log(`This client has ${this.balance} in their account`);
  }
}

const anon1 = new AnonymousClient(1234);

//premium1.printInfo();
//anon1.printInfo();

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

// Criar uma nova class com base em Animal, chamda Whale
// tem uma propriedade adicional, chamado stomach, ao inicio deve ser um array vazio
// um método adicional, chamado eat que recebe um argumento (um string) e adiciona esse argumento á propriedade stomach
// alterar o método makeSound para fazer console.log da propriedade this.sound em maiúsculas

// criar uma variável whiteWhale, chamada Moby, branca
// utilizar o método eat 2 vezes, uma delas com "Ahab", "Pequod"

class Whale extends Animal {
  constructor(name, color, sound) {
    super(name, color, sound);
    this.stomach = [];
    //this.stomach = stomach
  }
  eat(food) {
    this.stomach.push(food);
  }
  makeSound() {
    console.log(this.sound.toUpperCase());
  }
}

let whale = new Whale('Moby', 'Branca', 'aaaaaaa');
whale.makeSound();
whale.eat('atum');
whale.eat('salmão');
console.log(whale.stomach);

// Encapsulation
// Abstraction
// Inheritance
// Polymorphism
