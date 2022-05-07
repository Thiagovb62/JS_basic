/*try {
    console.log('abrir um arquivo');
    console.log('Manipulei o arquivo')
} catch (error) {
   console.log('Tratando o erro') 
} finally {
    console.log('FINALLY: Eu sempre sou executado')
}
*/
function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new typeError("esperando instacia de date");
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}
try {
  const data = new Date("01-01-1970 12:57:12");
  const hora = retornaHora();
  console.log(hora);
} catch (e) {
    //console.log(e);
} finally {
  console.log("Tenha um bom dia!");
}
