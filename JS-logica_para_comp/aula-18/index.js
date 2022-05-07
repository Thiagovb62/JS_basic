/*try{
    console.log(naoExiste)
} catch(err){
    console.log('naoExiste nao existe')
}*/

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new InpuntsError("x e y precisam ser números");
  }
  return x + y;
}
try {
  console.log(soma(1, 2));
  console.log(soma("1", 2));
} catch (e) {
  //console.log(e);
  console.log('alguma coisas mais amigavel para o usuario')
}
