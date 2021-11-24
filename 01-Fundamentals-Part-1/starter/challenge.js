let ageMark = 95
let heightMark = 1.89
let heightJohn = 1.76
let ageJohn = 85

bmiMark = ageMark / (heightMark ** 2)

bmiJohn = ageJohn / (heightJohn ** 2)

markHigherBMI = bmiMark > bmiJohn

console.log(markHigherBMI)