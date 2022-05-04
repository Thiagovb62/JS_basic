const dataHj = Date.now();
const data = new Date(dataHj);
let diaSemana = data.getDay();
let diaSemanaText;

function getDiaNome(diaSemana) {
  let diaSemanaText;
  switch (diaSemana) {
    case 0:
      diaSemanaText = "Domingo";
      return diaSemanaText;
    case 1:
      diaSemanaText = "Segunda";
      return diaSemanaText;
    case 2:
      diaSemanaText = "Terça";
      return diaSemanaText;
    case 3:
      diaSemanaText = "Quarta";
      return diaSemanaText;
    case 4:
      diaSemanaText = "Quinta";
      return diaSemanaText;
    case 5:
      diaSemanaText = "Sexta";
      return diaSemanaText;
    case 6:
      diaSemanaText = "Sábado";
      return diaSemanaText;
    default:
      console.error("Invalid");
      return diaSemanaText;
  }
}
diaSemanaText = getDiaNome(diaSemana);
console.log(diaSemana, diaSemanaText);
