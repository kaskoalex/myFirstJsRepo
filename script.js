

/*
const user1 = { 
  name: 'Alex',
  say: function () { 
    console.log(this.name); // вызывает имя этого (this) объекта
   }
}

const user2 = {
  name: 'Vlad',
  say: function () {
    console.log(this.name);
  }
}

user1.say()
user2.say()

*/

/*

const user1 = {
  name: 'Alex',
  say: say
  
}

const user2 = {
  name: 'Vlad',
  say: say
  
}

function say(a,b) {
  console.log(a+b)
  console.log(this.name); // this - указывает на user ; say() без user не работает
}

user1.say(1,2)
user2.say(1,2)

say.call(user1, 1, 2)
say.apply(user2,[1,2])  // applay принимает второй аргумент в виде массива

*/

const user1 = {
  name: 'Alex',
  say: say

}

const user2 = {
  name: 'Vlad',
  say: say

}

function say() {

  console.log(this.name);
}

const newSay = say.bind(user1)
newSay()

//------------------------------------------------

const btns = document.querySelectorAll('button')

const chaColorBorder = function () {
  this.style.border = '2px solid red'
}

btns.forEach(function (btn) {
  btn.addEventListener('click, chaColorBorder)')
})


//------------------------------------------------------

const counter = (a, b) => a + b; //или с возвратом return

const rep = (a, b) => {
  return a + b
}

const rep = a => a + 3

console.log(counter(1, 4))