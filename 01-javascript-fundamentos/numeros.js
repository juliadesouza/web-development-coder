const peso1 = 1.0;
const peso2 = Number("2.0");

console.log(peso1, peso2);
console.log(Number.isInteger(peso1), Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;
const total = avaliacao1 * peso1 + avaliacao2 * [peso2];
const media = total / (peso1 + peso2);

console.log(media);
console.log(media.toFixed(2));
console.log(media.toString());
console.log(media.toString(2)); // valor binário
console.log(typeof media);

// Alguns cuidados
console.log(7 / 0);
console.log("10" / 2);
console.log("3" + 2); // o sinal de + faz sentido no mundo da string, por isso ele prefere concatenar do que somar

console.log("Show!" * 2);
console.log(0.1 * 0.7);

// Usando Math
const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);
console.log(area);
console.log(typeof Math);
