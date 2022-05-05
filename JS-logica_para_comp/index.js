//const num = [1,2,3,4,5,6,7,8,9];
//const [primeiro ,segundo,...resto] = num;
//const[um, , tres,  ,cinco, ,sete] = num;
//console.log(primeiro,segundo);
//console.log(resto);
//console.log(um,tres,cinco,sete);

const num = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const [, [, , seis]] = num;
const [list1, lista2, lista3] = num;
console.log(seis);
console.log(lista2[2]);
