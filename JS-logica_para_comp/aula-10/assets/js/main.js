/*const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();
function getDiaNome (diaSemana){ 
    let nomeDia;
switch (diaSemana) {
    case 0: 
        nomeDia = 'Domingo';
        return nomeDia;
    case 1:
        nomeDia = 'Segunda'
        return nomeDia;
    case 2:
        nomeDia = 'Terça'
        return nomeDia;
    case 3:
        nomeDia = 'Quarta'
        return nomeDia;
    case 4:
        nomeDia = 'Quinta'
        return nomeDia;
    case 5: 
        nomeDia = 'Sexta'
        return nomeDia;
    case 6:
        nomeDia = 'Sábado'
        return nomeDia;
    }   
}

function getNomeMes (mes){ 
    let nomeMes;
switch (mes) {
    case 0: 
        nomeMes = 'Janeiro';
        return nomeMes;
    case 1:
        nomeMes = 'fevereiro'
        return nomeMes;
    case 2:
        nomeMes = 'Marco'
        return nomeMes;
    case 3:
        nomeMes = 'Abril'
        return nomeMes;
    case 4:
        nomeMes = 'Maio'
        return nomeMes;
    case 5: 
        nomeMes = 'Junho'
        return nomeMes;
    case 6:
        nomeMes = 'Julho'
        return nomeMes;
    case 7:
        nomeMes = 'agosto'
        return nomeMes;
    case 8:
        nomeMes = 'setembro'
        return nomeMes;        
    case 9:
        nomeMes = 'outubro'
        return nomeMes;   
    case 10:
        nomeMes = 'Novembro'
        return nomeMes;   
    case 11:
         nomeMes = 'Dezembro'
         return nomeMes;    
    default:
        console.error('Invalid')
        return nomeMes;
    }   
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numMes = data.getMonth();

    const nomeDia = getDiaNome(diaSemana);
    const nomeMes = getNomeMes(numMes);
    
    return ( `${nomeDia}, ${data.getDate()}` + `de ${nomeMes}` +
        `de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()} `
    );
};
h1.innerHTML = criaData(data) */
const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short '
    };
h1.innerHTML = data.toLocaleDateString('pt-BR',opcoes);