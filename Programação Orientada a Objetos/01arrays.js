let nomeCompleto = ['Gustavo','Santos', 'Rolim'];
var [primeiroNome, nomeDomeio, ultimoNome] = nomeCompleto;

console.log("O primeiro nome é: "+primeiroNome);
console.log("O nome do meio é: "+nomeDomeio);
console.log("O último nome é: "+ultimoNome +'\n');

var [primeiroNome, ...restante] = nomeCompleto
console.log("O primeiro nome é: "+primeiroNome);
console.log("O restante do nome é: \"" +restante.toString().replace(',', ' ')+'"' +'\n'); 



var [soOPrimeiroNome, , soOUltimoNome] = nomeCompleto
console.log("O primeiro nome é: "+soOPrimeiroNome);
console.log("O último nome é: " +soOUltimoNome);