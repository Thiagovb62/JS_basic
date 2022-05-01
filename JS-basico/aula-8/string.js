let string = "um\"texto\""
let string2= " um \\ texto"
let string3 = "Thiago viana bezerra"



console.log(string3.toLowerCase)
console.log(string3.indexOf('a',))
console.log(string3[2])
console.log(string3.split(' '))
console.log(string3.slice(-5,-1)) // negativo ele vol
console.log(string3.length)
console.log(string3.replace(/r/g,'$'))
console.log(string.replace('um','outro'))
console.log(string.indexOf('o',3))
console.log(string.lastIndexOf('o'))
console.log(string.match(/[a-z]/g))
console.log(string.concat(' em' , ' um'));
console.log(string + ' em um lido dia');
console.log(`${string} em um lindo dia.`)