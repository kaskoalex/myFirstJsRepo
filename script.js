"use strict";

/*
const user ={
  name:'Alex',
  age:33,
  isAuth: false,
  projects: {
    firstPro:'firstPro',
    secondPro:'secondPro'
  }
}


//const name = user.name
//const age = user.age
//const isAuth = user.isAuth

const {name,age,isAuth,projects,projects:{firstPro,secondPro}} = user;

console.log(user.name);
console.log(name);

console.log(age);
console.log(isAuth);
console.log(projects);

console.log(firstPro);
console.log(secondPro);



const names = [ 'Art', 'Max','Tor', 'Pet','Al']

const [Art, Max, Tor, Pet, Al] = names

const art=names[0]

console.log(art)
console.log(Art)


const logger =()=>{
  console.log('log');
}

logger()


const logger = ({first,second,third})=>{
  console.log(second);
}

logger({first:'I',second:'JS',third:'love'})

*/


// --------------  Rest  --------------

const sum1 = (a,b,c, ...params) => {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(params)

}

sum1(1,2,3,4,5,6,'false')

const sum2 = ( ...params) => {  
  
 console.log(params) 

}

sum2(1, 2, 3, 4, 5, 6)

const sum3 = (...params) => {

  return params.reduce((sum,num)=>sum+num)

}

console.log(sum3(1, 2, 3, 4, 5, 6));

// ------------  Spread ---------------

const fAr=[1,2,3,4]
const seAr=[5,6,7,8]

console.log([12,2225,...fAr,...seAr]);