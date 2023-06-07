// Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}
imprimirSoma(1, 2);

// Função com retorno
function soma(a, b = 1) {
  return a + b;
}
console.log(soma(2, 3));
console.log(soma(2));

// Armazenar função em uma variável
const imprimirSoma2 = function (a, b) {
  console.log(a + b);
};
imprimirSoma2(4, 5);

// Armazenar função arrow em uma variável
const imprimirSoma3 = (a, b) => {
  console.log(a + b);
};
imprimirSoma3(2, 2);

// Retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(1, 0));

const imprimir = (a) => console.log(a);
imprimir("Julia");
