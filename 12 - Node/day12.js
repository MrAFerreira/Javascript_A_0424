/* console.log("Start")

setTimeout(() => {
  console.log("Asynchronous code")
},2000)

console.log("End") */

const fs = require("fs") // fileSystem

/* fs.readFile('./node.txt', 'utf-8', (err, data) => {
   if(err) {
    console.error("Error reading file", err)
    return;
   }

   console.log("Original txt: ", data)

   const newText = data.toUpperCase()

   fs.writeFile('./node.txt', newText, 'utf-8', (err) => {
    if(err) {
      console.error("Error writing to file", err)
      return;
     }

     console.log("Successfully edited file")
   })

}) */

const myColors = require('@colors/colors')

console.log(myColors.rainbow('Colored Text'))
