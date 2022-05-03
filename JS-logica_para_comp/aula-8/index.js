//const tresH = 60 * 60 * 3 * 1000; //
//const umDia = 60 * 60 * 24 * 1000; //
//const data = new Date(0 + tresH + umDia); // 01/01/1970 Timestamp unix ou epoca unix
//const data = new Date(2021,3,20,15,14,60); // A , m , d ,h ,M , s ,ms
function formataData(data){
console.log('Dia', data.getDate())
console.log('Mes', data.getMonth() + 1)
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia semana', data.getDay())
} 
const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil)
//console.log(Date.now())