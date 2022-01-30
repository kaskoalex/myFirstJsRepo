const num = 266219;
// результат произведений цифр числа num;
let numProduct = (num + '').split('').reduce((prod, numNum) => prod * +numNum, 1);

console.log(`Произведение цифр числа ${num} равно ${numProduct}`);
console.log('\n')
console.log(`Первые две цифры ${numProduct}**3 равны ${(numProduct ** 3 + '').slice(0, 2)}`);


console.log((num+'').split(''))

console.log((num + '').split(''))

console.log((num + '').split(''))
console.log((num + '').split(''))