const nome = ['Thiago Viana','Lucas','Eduardo'];

for (let valor of nome) {
  console.log(valor);
}
//For classico - Geralmente com iteraveis (array ou string)
//For in - GRetorna indice ou chave (array, string ou objetos),
//For of - retorna o valor em si (iteraveis,arrays ou string)
nome.forEach(function(valor,indice,array) {
    console.log(valor,indice,array);
})
