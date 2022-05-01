let num1 = 3;
let num2 = 2.5;

//console.log(num1.toString() + num2);
console.log(num1.toString(2));
//console.log(num1.toString(2)) //binario
//console.log(num1.toFixed(2))//arrendondar
//console.log(Number.isInteger(num1)) // mostra se eh numero true
console.log(Number.isNaN(num2));
//let temp = num1 + '5'; // junta os valores 
let num3 = 0.1
let num4 = 0.7;

num4 +=num3; 
num4 +=num3; 
num4 +=num3; 

num4 = parseFloat(num4.toFixed(2));
console.log(Number.isInteger(num4));