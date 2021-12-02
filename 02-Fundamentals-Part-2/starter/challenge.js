'use strict';

const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`koalas wins (${avgDolphins} vs. ${avgKoalas})`)
    }
    else {
        console.log('No team wins')
    }
}

console.log(calcAvg(44, 23, 71))
console.log(calcAvg(65, 54, 49))

checkWinner(calcAvg(85, 54, 41), calcAvg(23, 34, 27));
