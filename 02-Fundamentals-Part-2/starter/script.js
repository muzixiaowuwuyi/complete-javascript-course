'use strict';

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let scoreDolphins = calcAverage(85, 54, 41);
// console.log(scoreDolphins);

// let scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas *2 ){
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//   }else if (avgKoalas >= avgDolphins *2) {
//     return`Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//   }else {
//     return 'no one wins'
//   }
// }

// console.log(checkWinner(scoreDolphins, scoreKoalas))


// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//   } else if (avgKoalas >= avgDolphins * 2) {
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//   } else {
//     return 'no one wins'
//   }
// }

// const calcTip = function(billValue) {
//   if (billValue >= 50 && billValue <= 300) {
//     // console.log(`the tip is ${billValue * 0.15}`);
//     return billValue *0.15;
//   }else {
//     // console.log(`the tip is ${billValue * 0.2}`);
//     return billValue * 0.2;
//   }
// }

// calcTip(15);

// const bills = [125, 555, 44];

// console.log(bills);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(
//   tips
// );

// const total = [125 + calcTip(bills[0]), 555 + calcTip(bills[1]), 44 + calcTip(bills[2])];

// console.log(total)


// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function (){
//     this.bmi = this.mass / this.height **2;
//     return this.bmi
// }
// }

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi
//   }
// }


// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi)

// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi}) `)
// }else{
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is lower than ${john.fullName}'s BMI (${john.bmi}) `)
// }


const bills = [
  22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
];

const tips = [];
const totals = [];



const calcTip = function(billValue) {
  if (billValue >= 50 && billValue <= 300) {
    // console.log(`the tip is ${billValue * 0.15}`);
    return billValue *0.15;
  }else {
    // console.log(`the tip is ${billValue * 0.2}`);
    return billValue * 0.2;
  }
}


for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i])
}

console.log(tips, totals);

const calcAverage = function(arr){
  let sum = 0;
  for (let i = 0; i <  arr.length; i++) {
    sum += arr[i];
  }
  const avg = sum / arr.length;
  return avg
}

console.log(calcAverage(totals))