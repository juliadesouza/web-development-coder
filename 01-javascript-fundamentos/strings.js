const escola = "Cod3r";
const nome = "Julia";
const sexo = `Feminino`;

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.indexOf("3"));

console.log(escola.substring(1)); // do indice 1 (inclusive) até o final
console.log(escola.substring(0, 3)); // indice 3 não é incluso

console.log("Escola ".concat(escola).concat("!"));
console.log("Escola " + escola + "!");

console.log(escola.replace(3, "e"));
console.log("Ana,Maria,Pedro".split(","));

/**** Template Strings ****/
const concatenacao = `
    Olá 
    ${nome}!`;

console.log(concatenacao);

// Expressões
console.log(`1 + 1 = ${1 + 1}`);

const up = (texto) => texto.toUpperCase();
console.log(`Ei...${up("cuidado")}`);
