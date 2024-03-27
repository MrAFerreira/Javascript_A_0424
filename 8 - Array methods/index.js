// forEach

// map, reduce e filter não alteram o array original
// Map

const numberArray = [1, 2, 3, 4]

//com foreach
/*const newArray = []

numberArray.forEach((numcopy) => {
  numcopy *= 2;
  newArray.push(numcopy)
})

console.log(newArray) */

const newArray = numberArray.map((number) => {
  return number * 2
})

//console.log(newArray)

const silent = ["can", "you", "hear", "me", "?"]

const scream = silent.map((word) => word.toLocaleUpperCase())

//console.log(scream)

const cities = [
  'miami',
  'barcelona',
  'madrid',
  'amsterdam',
  'berlin',
  'sao paulo',
  'lisbon',
  'mexico city',
  'paris',
];
// Miami, Barcelona ... Sao Paulo

/* const capitalCities = cities.map((city) => {
  return city[0].toLocaleUpperCase() + city.slice(1)
}) */
const capitalCities = cities.map((city) => {
  const words = city.split(' ')
  return words.map((singleWord) => {
    return singleWord[0].toLocaleUpperCase() + singleWord.slice(1)
  }).join(' ')
})

//console.log(capitalCities)

// Reduce

/* array.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue
}, initialValue) */

const newNumbers = [2, 4, 6, 8]

const sumTotal = newNumbers.reduce((acc, currentVal) => {
  //console.log(`Accumulator: ${acc}, currentVal: ${currentVal}`)
  return acc + currentVal
}, 10)

//console.log(sumTotal)

/* const products = [
  { name: 'Keyboard', price: 30.0 },
  { name: 'Mouse', price: 64.99 },
  { name: 'Controller', price: 59.8 },
  { name: 'Speakers', price: 43.7 },
]; */

const calcAvg = (array) => {
  const totalPrice = array.reduce((acc, currentVal) => {
    //console.log(`Accumulator: ${acc}, currentVal: ${currentVal}`)
    return acc + currentVal.price
  }, 0)
  //console.log(totalPrice)

  return totalPrice / array.length
}


//console.log(calcAvg(products))

// filter

const numbersToFilter = [1, 2, 3, 4, 5, 6, 7, 8]

const evenNumbers = numbersToFilter.filter((number) => { 
  return number % 2 === 0
} )
//console.log(evenNumbers)

const products = [
  { name: 'Keyboard', price: 30.0, available: true },
  { name: 'Mouse', price: 64.99, available: false },
  { name: 'Controller', price: 59.8, available: true },
  { name: 'Speakers', price: 43.7, available: false },
];

const availableProducts = products.filter((product) => product.available)
//console.log(availableProducts)

// sort e reverse alteram o array original


const numberToSort = [30, 50, 22, 345, 123, 884, 212, 1]

numberToSort.sort((a, b) => a - b)


/* function compare(a, b) {
  if (a < b) return -1
  if (a > b) return 1
  if (a === b) return 0
} */

//console.log(numberToSort)

const words = ['Hey', 'hello', 'Ola', 'oi', 'aloha'];
// ordenem por ordem alfabética

words.sort()

console.log(words)

words.sort(function(a, b){
  if(a.toLowerCase() < b.toLowerCase()) { return -1; }
  if(a.toLowerCase() > b.toLowerCase()) { return 1; }
  return 0;
})

console.log(words)

// reverse
words.reverse()
console.log(words)

// toSort, toReverse - novos métodos ES2023