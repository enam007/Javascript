let ageMark = 95
let heightMark = 1.89
let heightJohn = 1.76
let ageJohn = 85

bmiMark = ageMark / (heightMark ** 2)

bmiJohn = ageJohn / (heightJohn ** 2)

markHigherBMI = bmiMark > bmiJohn

console.log(markHigherBMI)

if (markHigherBMI) {
    console.log(`Mark's BMI is Higher`)
} else {
    console.log(`John's BMI is Higher`)
}


let teamDolphinsAvgScore = (97 + 112 + 101) / 3
let teamKoalasAvgScore = (109 + 95 + 106) / 3
console.log(teamDolphinsAvgScore)
console.log(teamKoalasAvgScore)
const minScore = 100

if (teamDolphinsAvgScore >= minScore && teamDolphinsAvgScore > teamKoalasAvgScore) {
    console.log("teamDolphine wins")
} else if (teamKoalasAvgScore >= minScore && teamKoalasAvgScore > teamDolphinsAvgScore) {
    console.log(`team Koalas win`)
} else if (teamDolphinsAvgScore === teamKoalasAvgScore && teamDolphinsAvgScore >= 100 && teamKoalasAvgScore >= 100) {
    console.log(`Draw`)
}
else {
    console.log(`no team wins`)
}

/// ternary operator

//condition ? if block : else block
let age = 19
age >= 18 ? console.log(`great`) : console.log(`hmm`)
const drink = age >= 18 ? `wine 🍷` : `water`
console.log(drink)

const bill = 430

console.log(`the bill was ${bill} and tip was ${bill <= 50 || bill >= 300 ? (.2 * bill) : (.15 * bill)}`)