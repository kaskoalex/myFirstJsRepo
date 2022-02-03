'use strict';

//let y = 5


//function ones(c,) {
  
//  console.log(y+c);

  
//}

//function two() { 
//  let y=15
//  ones(3)
 //}

//two()


//-------------------------

function one(х) {
  function two() {

    console.log(х);
    console.dir(two);
  }
  two()


}

one(10)

function counter(n) {
  return function () {
    return 1000+n
  }
}

let sum=counter(1)
console.log(sum())


function pathGenerator(url) {
  return function (imageName) { 
    return url+imageName
  }
}

let urlIcon =pathGenerator("http//mydomain.ru/icons/")
let urlImag = pathGenerator("http//mydomain.ru/images/")

console.log(urlIcon("cklock.svg"));
console.log(urlImag("man.png"));

