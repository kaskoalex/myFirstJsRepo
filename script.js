'use strict';

//let str = +prompt("Сколько тебе лет?")

//let result = str + 10
//console.log(result);


let str = prompt("Сколько тебе лет?")

console.log(parseInt(str));
//parseInt возвращает цельное число в начале строки игнорируя не числа

console.log(parseFloat(str));
// выводит дробные числа

console.log(parseInt("10ff",16));