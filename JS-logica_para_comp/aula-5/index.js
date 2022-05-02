const num = 10;


if (num < 11) {
    console.log('o numero é menor que 11')
}
if (num >= 0 && num <= 5){
    console.log('o numero esta entre 0 e 5');
} else if(num >= 6 && num <= 8){
    console.log('o numero NAO esta entre 6 e 8');
} else if(num >= 9 && num <= 11){
    console.log('o numero NAO esta entre 9 e 11');
} else {
    console.log('o numero nao esta entre 0 e 11')
}