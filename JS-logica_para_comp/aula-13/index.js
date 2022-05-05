const pessoa = {
    nome: 'nome',
    sobre: 'sobre',
    idade: 25,
    endereco: {
        rua:'av brasil',
        numero: 320
    }
};
// desestruturaçao
//const {nome: n,sexo='masculino'} = pessoa;
const {nome,sexo='masculino'} = pessoa;
const {
    endereco:{rua:r ,numero:d=52       
}}= pessoa
const {idade,...resto} = pessoa;
console.log(r,d);