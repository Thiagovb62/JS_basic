/*function saudacoes(nome){
    console.log(`Bom dia ${nome}`)
}
saudacoes('luiz')*/

function soma(x=1,y=1){
    const result  = x + y;
    return result;
}
//const result = soma(2,2); result != func{result}
//console.log(soma(2,2));
//console.log(soma());  = NaN , caso a funçao nao tenha valores nos parametros
//console.log(soma());

const raiz = n => Math.sqrt(n)


console.log(raiz(16));
console.log(raiz(4));
console.log(raiz(49));