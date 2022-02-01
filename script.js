'use strict';


const countSum4 = function (a, b,callback) {
  return a + callback(b)
}

const secondFunc = function(num) {
  return num+2
}

console.log(countSum4(3, 10, secondFunc));

//-----------------------------------------------

function one() {
  console.log("one")
}

const two = function() {
  console.log("two")
}

console.log(one);
console.log(two);

//---------------------------------------------

const countSum5 = function (a, b, callback) {
  return a + callback(b)
}


console.log(countSum5(3, 10, function (num) {
  return num + 2
}));

//----------------------------------------------------
const money=5000
const expenses1=200
const expenses2=300

const sumExpenses= function(exp1,exp2) {
  return exp1+exp2
}

const countTotal = function() {
  return money - sumExpenses(expenses1, expenses2)
}

console.log(countTotal());
console.log(sumExpenses(expenses1,expenses2))


//--------------------------------------------------


const countTotal1 = function (count, call) {
  return count - call(expenses1, expenses2)
}

console.log(countTotal1(money, function(exp1,exp2){
  return exp1+exp2
}));

//-------------------------------------------------

const sendServer = function () //через задачу в фунчцию call -задержываются обе функции
{ 
  setTimeout(function () { 
    console.log("Вызов прошёл");
   },2000)
}

const someFunc=function () {
  console.log("А теперь отработала вторая фу.")
  }
 

sendServer()
someFunc()