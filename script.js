'use strict';

//if (true) console.log("TRUE");
//if (false) console.log("FALSE");


let n = "4"

if (n==11) {
  console.log("Command1");
  console.log("Command2");
  console.log("Command3");
} else if (n==11) {
  
  console.log("Command4");
  console.log("Command5");
  console.log("Command6");
} else if (n == 12) {

  console.log("Command7");
  console.log("Command8");
  console.log("Command9");
} else if (n == 13) {

  console.log("Command10");
  console.log("Command11");
  console.log("Command12");
} else   {

  console.log("Command14");
  console.log("Command15");
  console.log("Command16");
}

// выполняет после правильного значения все следующии команды, если не будет остановлен.  W отличии от иф и елзе не переводит строки в числа и выдаёт фалзе
switch(n){
  case 3:
    console.log(3)
    break
  case 4:
    console.log(4)
    break
  case 10:
    console.log(10)
    break
  case 11:
    console.log(11)
    break
  default:
    console.log("none of the values ​​are correct")  
}  


switch (n) {
  case 3:
    console.log(3)
    break
  case 4:    
  case 10:   
  case 11:
    console.log(11)
    break
  default:
    console.log("none of the values ​​are correct")
}  
