const num = Number(prompt ('digite um numero positivo: '));
document.body.innerHTML += `seu numero é ${num}!<br/> `
document.body.innerHTML += `seu numero é NaN:${Number.isNaN(num)}!<br/> `
document.body.innerHTML += `Raiz quadrada: ${Math.sqrt (num)}<br />`;
document.body.innerHTML += `${num} é inteiro: ${Number.isInteger(num)}<br />`;
document.body.innerHTML += `Arrendodando para cima: ${Math.ceil(num)}<br />`;
document.body.innerHTML += `Arrendodando para baixo: ${Math.floor(num)}<br />`;
document.body.innerHTML += `com duas casas decimais: ${num.toFixed(2)} <br />`;


