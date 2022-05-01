
function meuEscopo(){
    const form = document.querySelector('.form')
    const result = document.querySelector('.result')


    const pessoas=[];
    
    function recebeEventoForm (evento){
        evento.preventDefault();
        const Nome = form.querySelector('.nome')
        const Sobrenome = form.querySelector('.sobrenome')
        const Peso= form.querySelector('.peso')
        const Altura = form.querySelector('.altura')

        pessoas.push({
            nome: Nome.value, 
            sobrenome: Sobrenome.value,  
            peso: Peso.value,
            altura: Altura.value
            });

        console.log(pessoas);
        
        result.innerHTML += `<p>${Nome.value} ${Sobrenome.value}` +
         `${Peso.value} ${Altura.value}</p>`
    }
    form.addEventListener('submit',recebeEventoForm)
}
meuEscopo();