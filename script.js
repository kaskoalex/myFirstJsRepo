"use strict";
/*
const Person1 = function (name,age) { 
  this.name= name
  this.age= age
 }

 Person1.prototype.sayHello = function () {
   console.log(`Hi, ich bin ${this.name}`);
   }

const person1 = new Person1('Vlad', 23)
person1.sayHello()
console.log(person1);
*/


class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    Person.incrementCount()

  }

  static count = 0 // статические переменные работают только внутри функции и не имеют отношения к создаваемому объекту

  static getCount() {
    return Person.count
  }

  static incrementCount() {
    Person.count++
  }

  sayHello() {
    console.log(`Hi, ich bin ${this.name}`);
  }
}

const person = new Person('Vlad', 23)
const person1 = new Person('Vlad', 23)
const person2 = new Person('Vlad', 23)
const person3 = new Person('Vlad', 23)
person.sayHello()
console.log(person);
console.log(Person.getCount());

console.log(JSON.stringify(person).length) // превращаем объект в строчку и считываем количество символов

class FrontEndDev extends Person {
  constructor(name, age, skills = []) {
    super(name, age)
    this._skills = skills
  }
  test() {
    super.sayHello()
  }
  get skills() {
    return this._skills // считывает
  }

  set skills(str){
    console.log(str);
    this.skills.push(str)// записывает
  }

}



const dev = new FrontEndDev('Vlad', 23)

dev.skills = 'Первое свойство'
dev.skills = 'Второе свойство'
dev.skills = 'Третье свойство'

console.log(dev)
dev.sayHello()
dev.test()