'use strict';

const potato=10



for (let i = 10; i > 0; i--) {
  console.log("Картошка N" + i + " почищена");
}


for (let i = 1; i < 11; i++) {
  console.log("Картошка N" + i + " почищена");
}

for (let i = 1; i < 11; i++) {
  if (i===5) continue  //пропустить итерацию n 5
  console.log("Картошка N" + i + " почищена");
}

for (let i = 1; i < 11; i++) {
  if (i === 5) break  //остановка
  console.log("Картошка N" + i + " почищена");
}

for (let i = 1; i < 11; i++) {
  if (i !== 5)   //пропустить итерацию n 5
  console.log("Картошка N" + i + " почищена");
}

//const peelPotato = function(potatoIndex){
  //if (potatoIndex>0){
    //console.log("Картошка N" + potatoIndex +" по//чищена");
    //potatoIndex--
    //peelPotato(potatoIndex)
  //}
//}
//-- рекурсия  --
//peelPotato(potato)

let potato = 10

while (potato>0) {
  console.log("Картошка N" + potato + " почищена");
  potato--
}

//--------------------------------------------------







//------------------------------------------------
let potato = 10

do {
  console.log("Картошка N" + potato + " почищена");
  potato--
} while(false)