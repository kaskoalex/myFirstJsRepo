'use strict';

const countSum = function (a, b) {
  console.log(a + b);
}

countSum(3, 5)

//----------------------------------------

let res

const countSum1 = function (a, b) {
  res = a + b
}

countSum1(3, 5)
console.log(res)
// вызвать переменную можно только после отработки функции

let ress

const countSum2 = function (a, b) {
  return a + b
}

ress= countSum2(3, 5)
console.log(ress)



const countSum3 = function (a, b) {
  return a + b
}

console.log(countSum3(3,10));



const countSum4 = function (a, b,callback) {
  return a + callback(b)
}

const secondFunc = function(num) {
  return num+2
}

console.log(countSum4(3, 10, secondFunc));