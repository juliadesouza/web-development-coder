/* par: Nome/Valor */
const saudacao = "Opa"; // contexto lexico 1

function exec() {
  const saudacao = "Fala"; // contexto léxico 2
  return saudacao;
}

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
  nome: "Pedro",
  idade: 32,
  peso: 90,
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
