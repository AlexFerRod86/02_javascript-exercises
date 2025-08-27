const palindromes = function (word) {
const comparador = 'abcdefghijklmnopqrstuvwyxz0123456789';

const prepararString = word
.toLowerCase()
.split('')
.filter((character) => comparador.includes(character))
.join('');

const stringReverso = prepararString.split('').reverse().join('')

return prepararString === stringReverso;


};

// Do not edit below this line
module.exports = palindromes;
