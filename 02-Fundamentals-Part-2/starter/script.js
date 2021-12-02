'use strict';

function logger() {
    console.log('My name is Aamir');
}
logger();
logger();



console.log(fruitProcessor(5, 0))

console.log(fruitProcessor(5, 2))

function calcAge(birthYear) {
    return 2037 - birthYear
}
console.log(calcAge(1995))


// function as expression

const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

console.log(calcAge2(2019))

// Arrow function

const calcAge3 = birthYear => 2037 - birthYear;

console.log(calcAge3(2019))

const yearsForRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} `
}

console.log(yearsForRetirement(2019, 'Aamir'
))

// function calling other function

function cutFruits(fruit) {
    return fruit * 4
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruits(apples);
    const orangePieces = cutFruits(oranges)
    const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

console.log(fruitProcessor(5, 2));

/// Arrays

const friends = ['khan', 'jack', 'diwesh']

console.log(friends)

const year = new Array(1991, 1992, 1993)
console.log(year)
console.log(year.length)
year[2] = 1995
console.log(year)

const aamir = ['aamir', 'enam', 2037 - 1995, 'developer', friends]
console.log(aamir)