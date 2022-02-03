'use strict';

let a = 5

function one() {
  let b = 10
  console.log(b);
}

one()

//console.log(b);
//b  не выводится


function one() {
  b = 10
  console.log(b);
}

one()

//console.log(b);

// b без let выводится если сверху не указано 'use strict';

function one() {
  let a = 8
  console.log(a);
}

one()

//-----------------------------------------------


function ones() {
  let a = 14
  function two() {
    let a = 11
    console.log(a);
  }
  two()
}

ones()