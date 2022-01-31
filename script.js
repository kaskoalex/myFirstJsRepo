'use strict';

const n = +prompt("Введите число:")

switch (true) {
  case n > 10:
    console.log("n>10");
    break

  case n <= 10:
    console.log("n<=10");
    break
  default:
    console.log("none of the values ​​are correct");
}

switch (true) {
  case 5 < n && n < 10:
    console.log("5<n<10");
    break

  default:
    console.log("none of the values ​​are correct");
}  


let result = n ===10 ? 1 : 22
// если сравнение истинна - то берётся первое значение, лож - второе.

console.log(result)

n === 10 ? console.log("result11") : console.log("result222")