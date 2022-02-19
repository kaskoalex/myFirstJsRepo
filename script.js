
/*
let arr=[1,2,3,4,5]

console.log(arr)
console.log(arr.join(',')) // получаем строчку в консоль чрез join() или join(','),через запятую, ('') всё вместе без отступа, (' ')  с отступом

console.log(arr.toString())

console.log(arr.__proto__) // прототим массива
console.log(Array.prototype) // прототип конструктора


const man={
  hands:2,
  lags:2,
  eyes:2,
  walk: function(){
    console.log('ich gehe')
  },
  talk: function () { 
    console.log('Ich rede')
   }
}

const newMan = Object.create(man) // создание нового объекта на основе шаблона man
const newWoman = Object.create(man)

newMan.name = 'Ivan'
newMan.age=23

newWoman.name = 'Anna'
newWoman.age=22



console.log(newWoman)
console.log(newMan)



const worker = {
  workplace: 1,
  dinner: 1,
  goToWork: function () {
    console.Log('Gehen zu Arbeit')

  },
  leaveWork: function () {
    console.Log('Heim gehen')
  },
  work: function () {
    console.log('Arbeiten')
  },
  sayHello: function () {
    console.log('Hi, ich bin ' + this.name)
  }
}

const frontEndDev = Object.create(worker)
const backEndDev = Object.create(worker)

frontEndDev.dinner = 2
frontEndDev.role = 'Front End Developer'
backEndDev.role = 'Back End Developer'

frontEndDev.work = function () {
  console.log('schreibe gute Kode, esse plätzchen')
}
backEndDev.work = function () {
  console.log('Ärgere mich mit datenbank, brauch frei')
}


const developer1 = Object.create(frontEndDev)
const developer2 = Object.create(frontEndDev)
const developer3 = Object.create(backEndDev)
const developer4 = Object.create(backEndDev)


developer1.name = 'Alex'
developer2.name = 'Ivan'
developer3.name = 'Anna'
developer4.name = 'Elena'


frontEndDev.work()
backEndDev.work()

console.log(frontEndDev)
console.log(backEndDev)

developer1.sayHello()
developer2.sayHello()
developer3.sayHello()
developer4.sayHello()

console.log(developer1.hasOwnProperty('name'));  // передаём название свойства, которое хотим проверить есть оно или нет false and true

console.log(developer1.__proto__.hasOwnProperty('role')); // подтверждение наличия свойства находящегося в прототипе.
console.log(developer1.__proto__.__proto__.hasOwnProperty('workplace'));

console.log(frontEndDev.isPrototypeOf(developer1));
// проверка, является ли  frontEndDev прототипом developer1



const person1 = {
  name: 'Vlad'
}
const person2 = {
  name: 'Alex'
}
const person3 = {
  name: 'Ivan'
}
*/

const Person = function (name) {
  this.name = name

  const age = 33 // создание переменной внутри функции конструктора / скрытая переменная не видимая в конструкторе

  this.sayHello = function () { 
    console.log('Hi, ich bin  ' + this.name);
    console.log('ich bin  ' + age + ' Jahre alt');
   }
}

/* 
Person.prototype.sayHello= function () {
  console.log('Hi, ich bin  ' + this.name); // создание фукции через прототип, такая функция у всех объектов одинакова
}*/


const person1 = new Person('Vlad') // фукция с оператором new является функцией конструктором и пишутся с большой буквы

//------------ функция конструктор всегда вызывается через оператор new
const person2 = new Person('Alex')
const person3 = new Person('Ivan')

console.log(person1)

person1.sayHello()

console.log(person1 instanceof Person) // зависит ли персон1 от конструктора персон

//----------------------------------------------------
//     ---  цепочка наследования ----- 

const Student = function (name,role) {
  Person.call(this, name) // call   переопределяет контекст вызова и передача аргументов - name
  this.role=role
 }

Student.prototype=Object.create(Person.prototype)
Student.prototype.constructor=Student // присваевание объекту конструктора



 const newStudent = new Student('Vlad','studen')

 console.log(newStudent)


