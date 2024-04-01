// Promises
// Javascript é uma linguagem single-threaded e síncrona mas com alguns comportamentos assíncronos

//const timeoutId = setTimeout(callback, delay)

/* function someCallbackFunction (){
  console.log("Hey John!")
}

const timeoutId = setTimeout(someCallbackFunction, 3000)


const intervalId = setInterval(function(){
  console.log('1 second')
}, 1000) */


/* const myPromise = new Promise((resolve, reject) => {
  if(/* condition ){
    resolve(/* value ) // no caso de sucesso
  } else {
    reject(/* reason )
  }
})
 */

// Promise - pending, resolved, rejected

/*
const promisePending = new Promise((resolve, reject) => {})
const promiseResolved = Promise.resolve(42);
const promiseRejected = Promise.reject('Server error')

console.log(promisePending)
console.log(promiseResolved)
console.log(promiseRejected) */

const names = ["Jim", "Pam", "Michael", "Kelly"]

function obtainNames(count){
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
  
    if(!names[count]) reject("Name not found")
    else {
      //console.log(names[count])
      resolve(names[count])
    }
  }, 1000)
  })
}

// .then() - catch()
/* obtainNames(0)
.then(() => obtainNames(1))
.then(() => obtainNames(2))
.then(() => obtainNames(3))
.then(() => obtainNames(4))
.catch((err) => console.log(err)) */

/* obtainNames(0)
.then((name) => console.log(name))
.catch((err) => console.log(err)) */

/* const promise3 = new Promise((resolve, reject) => {
  throw new Error("Something went wrong")
})

promise3
  .then(() => console.log('Success'))
  .catch((err) => console.log(err))
 */

  const promise4 = new Promise((resolve, reject) => {
    setTimeout(()=> resolve('Resolved promise 4'), 1500)
  })

/*  
  promise4
  .then(()=> {
    console.log("1.then")
  })
  .then(() => {
    console.log("2.then")
    throw new Error("Something went wrong")
  })
  .then(()=> {
    console.log("3.then")
  })
  .catch((err) => console.log(err)) */

  const promise5 = new Promise((resolve, reject) => {
    setTimeout(()=> reject('Rejected promise 5'), 5000)
  })
 /*  

  promise5
  .then((value1) => {
    console.log("Value 1: ", value1)
    return 'B'
  })
  .then((value2) => {
    console.log("Value 2: ", value2)
    return 'C'
  })
  .then((value3) => {
    console.log("Value 3: ", value3)
  }) */


  const promise6 = new Promise((resolve, reject) => {
    setTimeout(()=> resolve('promise6'), 4000)
  })

/*   
promise6
.then((value1) => {
  console.log("Value 1: ", value1)
  throw new Error("FIRST ERROR")
})
.catch((err) => {
  console.error("1st catch:", err)
  return "Hello from catch"
})
.then((value2) => {
  console.log("Value 2: ", value2)
  throw new Error("SECOND ERROR")
})
.catch((err) => {
  console.error("2nd catch:", err)
})
 */

// finally()

const promise7 = new Promise((resolve, reject) => {
  setTimeout(()=> resolve('promise 7'), 3500)
})


/* promise7
.then((value1) => {
console.log("Value 1: ", value1)
throw new Error("FIRST ERROR")
})
.catch((err) => {
console.error("1st catch:", err)
})
.finally(() => {
  //cleanup code
  console.log("This always runs")
}) */

// Promise.all()

Promise.all([promise4, promise5, promise6, promise7])
  .then((values) => {
    console.log(values)
  })
  .catch((err) => {
    console.log(err)
  })


// criar uma função countTen
// retornar uma promessa
// setInterval para fazer console.log de 1 em 1 segundo
// 1, 2, 3, 4
// quando chegar ao 10, a promessa resolve e o setInterval é terminado
// .then() - > Count finished

/* function countTen(){
  return new Promise((resolve, reject) => {
    // lógica
  })
}

countTen()
.then(() => console.log("Count finished"))

 */

/* function countTen() {
  return new Promise((resolve, reject) => {
   let count = 0;
   let intervalId = setInterval(() => {
    console.log(++count);
    if (count === 10) {
    clearInterval(intervalId);
    resolve();
    }
  }, 1000);
  });
  }
  countTen()
  .then(() => console.log('Count finished')); */

function countTen(count) {
    return new Promise(function(resolve, reject) {
      let value = 0;
   
      let interval = setInterval(function() {
        value++;
        console.log(value); 
        if(value == count) {
          clearInterval(interval); 
          resolve(value);
        }
      }, 1000);
   
    });
  }
   
  countTen(10)
    .then(function(value){
      console.log(value);
    }); 