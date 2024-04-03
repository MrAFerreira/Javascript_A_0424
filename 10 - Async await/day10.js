// Async await

// function declaration
async function myFunctionDeclaration(){}

// function expression
const myFunctionExpression = async () => {}

async function someFunction(){
  return "Hello"
}

/* someFunction()
  .then((value) => console.log(value)) */

const names = ["Jim", "Pam", "Michael", "Kelly"]

function obtainNames(count){
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
  
    if(!names[count]) reject("Name not found")
    else {
      console.log(names[count])
      resolve(names[count])
    }
  }, 1000)
  })
}


async function getNamesInOrder(){
  // try / catch

  try {
    // executar o código
    await obtainNames(0)
    await obtainNames(1)
    await obtainNames(2)
    await obtainNames(3)
    await obtainNames(4)
    console.log("Finished executing")
  } catch(err) {
    // apanhar o erro
    console.error(err)
  }
}


getNamesInOrder()