//key-value pairs

const person = {
  firstName: 'André',
  age: 30,
  'bank Id': 12314124,
  3: 4567,
};

// object constructor syntax
const myObj = new Object();
// myObj = {}

//dot notation
//console.log(person.age);

//Bracket notation
//console.log(person['bank Id']);

// JSON - Javascript Object Notation

// function
const sum = (a, b) => a + b;

// Métodos são funções dentro de objectos

const client = {
  id: 1234,
  name: 'Jack',
  balance: 1000,
  printInfo: function () {
    console.log(`${this.name} has the id ${this.id} `);
  },
};

//client.printInfo();

// 4 principios de OOP:
// Encapsulation
// Agregar informação/ métodos relacionados

const myName = 'André';

myName.toUpperCase();

// Abstraction
// Abstrair o código base e fornecer apenas a funcionalidade

// Scope e a palavra this

const client2 = {
  id: 12345,
  name: 'Sally',
  balance: 2000,
  printInfo: function () {
    console.log(`${this.name} has the id ${this.id} `);
  },
  deposit: function () {
    setInterval(function () {
      this.balance += 1000;
      // neste caso, this refere-se á função setInterval
      console.log(this);
    }, 1000);
  },
};

/* client.printInfo();
client2.printInfo();

client2.deposit();
 */

//client2.deposit();

// NaN - Not a number

const client3 = {
  id: 12345,
  name: 'James',
  balance: 3000,
  printInfo: function () {
    console.log(`${this.name} has the id ${this.id} `);
  },
  deposit: function () {
    //arrow syntax faz bind do scope um nível acima
    // volta a referir-se ao object
    setInterval(() => {
      this.balance += 1000;
      console.log(this);
    }, 1000);
  },
  monthlyPayment: function (amount) {
    const intervalId = setInterval(() => {
      if (this.balance > amount) {
        this.balance -= amount;
        console.log(this.balance);
      } else {
        console.log('Insufficient funds');
        clearInterval(intervalId);
      }
    }, 1000);
  },
};

//client3.deposit();
//client3.monthlyPayment(450);

// Criar um novo método chamado monthlyPayment
// Recebe um parâmetro (amount)
// Deve existir um setInterval, que corre todos os segundos
// verificar se existe balance suficiente
//se existir, é retirado
// caso contrário um console.log a dizer fundos insuficientes
// caso não haja balance, cancelar a execução do setInterval

const client4 = {
  id: 12345,
  name: 'James',
  balance: 3000,
  printInfo: function () {
    console.log(`${this.name} has the id ${this.id} `);
  },
  montlyPayment: function (amount) {
    const interval = setInterval(() => {
      if (this.balance - amount < 0) {
        clearInterval(interval);
        console.log('saldos insufuicientes');
        return;
      }
      this.balance -= amount;
      console.log(`Balance is ${this.balance}`);
    }, 1000);
  },
  /*
  deposit: function () {
    //arrow syntax faz bind do scope um nível acima
    // volta a referir-se ao object
    setInterval(() => {
      this.balance += 1000;
      console.log(this);
    }, 1000);
  },
  */
};

//client3.montlyPayment(500)

// Factory functions
// retorna um objecto com um formato específico

function createClient(name, initialBalance) {
  return {
    name,
    balance: initialBalance,
    printInfo: function () {
      console.log(`${this.name} has the id ${this.id} `);
    },
    deposit: function () {
      setInterval(() => {
        this.balance += 1000;
        console.log(this);
      }, 1000);
    },
    monthlyPayment: function (amount) {
      const intervalId = setInterval(() => {
        if (this.balance > amount) {
          this.balance -= amount;
          console.log(this.balance);
        } else {
          console.log('Insufficient funds');
          clearInterval(intervalId);
        }
      }, 1000);
    },
  };
}

const client5 = createClient('Ana', 5000);
const client6 = createClient('Jude', 500);

console.log(client5, client6);
client5.printInfo();

// Inheritance
// Polymorphism
