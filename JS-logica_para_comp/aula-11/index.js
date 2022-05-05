// let tem escope de bloco {.......bloco}
//var so tem escopo de funçao

const vdd = true;

let nome = "Luiz"; // criando
var nome2 = "Luiz";

if (vdd) {
  let nome = "otavio"; // criando
  //console.log(nome,nome2)

  if (vdd) {
    var nome2 = "ronaldo"; // redeclarando
    let nome = "outra coisa";
    console.log(nome, nome2);
  }
}
console.log(nome, nome2);

// not hoisting
/*console.log(sobrenome);

let sobrenome = 'assis'*/

//hoisting
/*console.log(sobrenome);

var sobrenome = 'assis';*/
