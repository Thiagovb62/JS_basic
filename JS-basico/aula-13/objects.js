const pessoa1 = {
    nome: 'luiz',
    sobrenome: 'otavio',
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} esta falando oi....`)
    }
};

pessoa1.fala();

/*function criarPessoa(nome,sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa0 = criarPessoa('luiz','luiz',25)
const pessoa01 = criarPessoa('Mario','luiz',26)
const pessoa3 = criarPessoa('Joao','luiz',27)
const pessoa4 = criarPessoa('Junior','luiz',28)
const pessoa5 = criarPessoa('Jean','luiz',29) */