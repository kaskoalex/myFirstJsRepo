'use strict';

//console.log(document);
//console.log()
//console.log()
//console.log()
//console.log()
//console.dir(document)
//console.log()
//console.log()
//console.log()
//console.log()
//console.dir(document.childNodes)
//console.log()
//console.log()
//console.dir(document.body)


// Работа s ID
const title =document.getElementById("title")
console.log(title);

console.dir(title); // в виде объекта

console.dir(title.style) // описание стилей

console.dir(title.textContent = "DOM!")  // изменение текста
console.dir(title.style.backgroundColor = "green") // изменение цвета
//---------------------------------------------------
const listItems = document.getElementsByTagName("li")
console.log(listItems); 
// псевдомассив
console.log(listItems[0]); // по индексу или через цыкл
//-----------------------------------------------------

const links = document.getElementsByClassName("link")
console.log(links); // массив еллементов через класс

//-----------------------------------------------------

//const title1 = document.querySelector("#title") // вызов как в css / через ID
//const title1 = document.querySelector("h1") //через тег

const title1 = document.querySelector(".title") // через класс
console.log(title1)

const title2 = document.querySelector('[title="Document Object Model"]') // через атрибут
console.log(title2)

const header = document.querySelector("header > ul ") 
console.log(header)
//--------------------------------------------------------
const link2=document.querySelectorAll(".link")
console.log(link2[1]) // получаем нод лист , где можно вызывать через индекс

console.log(link2);
link2.forEach(function (param) { 
  console.log(param)
})  //  querySelector


const list = document.querySelector("header > ul ")
const listItem2 = list.querySelectorAll("li")

console.log(listItem2)