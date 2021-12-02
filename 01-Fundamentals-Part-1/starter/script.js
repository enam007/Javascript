let js = 'amazing';

console.log(js)
console.log('Aamir') // Aamir here is the value
console.log(23)   // 23 here is also a value

//let firstName = 'Aamir'  // here the firstName is variable and Aamir the value. 
//console.log(firstName)

// for variable name javascript support $ and and underscore

// we can also get type of variable using typeof

javascriptIsFun = true
let num = 23
let str = 'Aamir'
console.log(typeof javascriptIsFun)
console.log(typeof num)
console.log(typeof str)

// String : Tempelate and literals

const firstName = 'Aamir'
const job = 'Developer'
const birthYear = 1995
const year = 2021

const aamir = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(aamir)

// Using Temeplate

const aamirNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(aamirNew)

console.log(`Just a regular string `)

console.log(`String
with 
multiple
line`)

console.log("I'm " + 23 + ' year old') // outputs I'm 23 years old (+ converted numbers to string)

console.log('23' - '10' - 3) // outputs 10 (- converted string to numbers)

console.log('23' * '2'
)

