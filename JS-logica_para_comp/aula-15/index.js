const frutas = ['pera','maça','banana'];

for(let i in frutas){
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'nome',
    sobre: 'sobre',
    idade: 25,
    endereco: {
        rua:'av brasil',
        numero: 320
    }
}
for (let keys in pessoa){
    console.log(pessoa[keys])
}