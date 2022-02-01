'use strict';

function getMessage() {
  console.log("Hello Word");
}

getMessage()
getMessage()
getMessage()

function cleanHandsOperation1(){
    function dirtyHands(){
      console.log("Испачкать руки");
    }

    function goToTheBathroom() {
      console.log("Пойти в ванную комнату");
    }

    
    function cleanHands(){
      console.log("Помыть руки");
    }

    

    dirtyHands()
    goToTheBathroom()
    cleanHands()   
    

};

cleanHandsOperation1();


function cleanHandsOperation2() {
  function step(str) {
    console.log(str);
  }

  step("Испачкать руки")
  step("Пойти в ванную комнату")
  step("Помыть руки")

}

cleanHandsOperation2();




function cleanHandsOperation() {
  function step(index,str) {
    console.log(index+" "+str);
  }

  step(1, "Испачкать руки")
  step(2, "Пойти в ванную комнату")
  step(3, "Помыть руки")

};

cleanHandsOperation();
// function можно вызвать до и после объявления функции.

const cleanHandsOperat = function () {
  const step=function (index, str) {
    console.log(index + " " + str);
  }

  step(1, "Испачкать руки")
  step(2, "Пойти в ванную комнату")
  step(3, "Помыть руки")

}

cleanHandsOperat();

// const function - фукция вызывается только после объявления

const cleanHandsOperatu = function () {
  const step = new Function ("index", "str", "console.log(str)")

  step(111, "Испачкать руки")
  step(2, "Пойти в ванную комнату")
  step(3, "Помыть руки")

}

cleanHandsOperatu();