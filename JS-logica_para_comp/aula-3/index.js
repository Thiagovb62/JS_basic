//console.log('maria' && 0 && 'Luiz')  0
/**
 * && -> false && true -> false "o valor mesmo"
 * || -> true && false -> vai retornar "o valor verdadeiro"
 * FALSY
 * false
 * 0
 * '',"",``
 * null / undefined
 * NaN
 */
function falaoi () {
    return 'oi';
}
  const vaiExecutar = 'joao';

 console.log( vaiExecutar && falaoi()); // oi

const a = 0
const b = null;
const c = false // aqui
const d = false
const e = NaN;

console.log( a || b || c || d || e || 'joaozinho') // joaozinho
