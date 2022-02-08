'use strict';

const title = document.getElementById("title")

//title.classList.add("green-color")// dobawili k классу подклас зелёный цвет, который задан на этот клас в css
//title.classList.remove("title")// удалили из класса


// title.classList.toggle("title")// togle удаляет если есть и добавляет если нет


console.log(title.classList.contains("title"));// false or truе в зависимости от того есть еллемент или нет


console.log(title);


console.log(title.getAttribute("title"))// объект
title.setAttribute("title", "new value title")// поменяли значение атрибута

console.log(title.getAttribute("title"))

console.dir(title);
//-----------------------------------------------------------

title.setAttribute("id", "title2")// поменяли значение атрибута
console.log(title);

//---------------------------------------------------------

console.log(title.hasAttribute("title2"))// prowerka na nalicie атрибута


//---------------------------------------------------------

title.style.backgroundColor='green'// добавили зел цвет бекграунд
console.dir(getComputedStyle(title)); // посмотреть свойства css
console.dir(getComputedStyle(title).backgroundColor);// посмотреть цвет
console.dir(getComputedStyle(title).fontSize);
console.log(title);