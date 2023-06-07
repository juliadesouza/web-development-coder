// USANDO OBJETOS
const pessoa = {
  nome: "Ana",
  idade: 5,
  endereco: {
    logradouro: "Rua ABC",
    numero: 1000,
  },
};

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: name, idade: age, sobrenome, bemHumorada = true } = pessoa;
console.log(name, age, sobrenome, bemHumorada);

const {
  endereco: { logradouro, numero, cep },
} = pessoa;
console.log(logradouro, numero, cep);

// USANDO ARRAYS
const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [
  [, 8, 9],
  [9, 6, 8],
];
console.log(nota);

// EXEMPLOS
// COM OBJETO
function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const obj = { min: 50, max: 40 };
console.log(rand(obj));
console.log(rand({ min: 955 }));
console.log(rand({}));
console.log(rand()); // ERRO

// COM ARRAY
function rand2([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min];
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(rand2([50, 40]));
console.log(rand2([992]));
console.log(rand2([, 992]));
console.log(rand2([]));
console.log(rand2()); // ERRO
