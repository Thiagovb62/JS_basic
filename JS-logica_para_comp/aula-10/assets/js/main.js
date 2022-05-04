const h1 = document.querySelector(".container h1");
const data = new Date();
h1.innerHTML = data.toString();
function getDiaNome(diaSemana) {
  const diasSemana = [
    "segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
    "Domingo",
  ];
  return diasSemana[diaSemana];
}

function getNomeMes(mes) {
  const meses = [
    "janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "novembro",
    "Dezembro",
  ];
  return meses[mes];
}

function criaData(data) {
  const diaSemana = data.getDay();
  const numMes = data.getMonth();

  const nomeDia = getDiaNome(diaSemana);
  const nomeMes = getNomeMes(numMes);

  return (
    ` ${nomeDia}, ${data.getDate()}` +
    ` de ${nomeMes}` +
    ` de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()} `
  );
}
h1.innerHTML = criaData(data);
/*const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short '
    };
h1.innerHTML = data.toLocaleDateString('pt-BR',opcoes); */
