"use strict";

class First {
 
  hello() {
    console.log("Привет я метод родителя!");
  }

} 

class Second extends First{
  print(){
    super.hello()
  }
  metod(){
    console.log("А я наследуемый метод!")
  }
  
}

const text=new Second()
text.hello()
text.metod()


