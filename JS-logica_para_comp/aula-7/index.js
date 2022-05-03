// (condicao) ? 'valor para verdeiro' : 'valor para falso'

const userPontuantion = 500;
const levellUser = userPontuantion >= 1000 ? 'Usuario vip' : 'Usuario normal';

const userColor = 'pink';
const standardColor = userColor || 'white';


console.log(levellUser,standardColor)