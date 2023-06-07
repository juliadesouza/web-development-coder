const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

// Incluindo
valores[4] = 10;
valores[10] = 100;

valores.push({ id: 3 }, false, null, "teste");
console.log(valores);

// Removendo
console.log(valores.pop());
console.log(valores);

delete valores[0];
console.log(valores);
