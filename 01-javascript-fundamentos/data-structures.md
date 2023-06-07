### Estrutura de Dados

- São estruturas usadas para organizar e administrar os dados.
- Dados != Estutura de Dados
- Exemplos: listas, filas (FIFO), pilhas (LIFO), árvores, tabelas

#### Estutura de Dados Básicas

- Int
- Real
- Letra (Char ou String)
- Bool

#### Variáveis e Constantes

- Os dados são armazenados nas variáveis e constantes.
- Elas permitem realizar operações: atribuições, aritméticas, ralacionais, lógicas, etc.

### JavaScript

- Organizados em sentenças e blocos de código.
- "var" permite redeclarar uma variável dentro do mesmo escopo. Algo que "let" não permite.
- Variáveis declaradas com "var" tem escopo global e escopo de função.
- Variáveis declaradas com "let" tem escopo global, escopo de função e **escopo de bloco**.
- Tipagem fraca: podemos atribuir tipos diferentes para uma mesma variável.
- Arrays são heterôgeneos e flexíveis.

#### Null & Undefined

- Para tipos primitivos, a atribuição é feita por valor. Então, os valores são independentes.

```
let a = 3;
let b = a;
b++;
// b --> 4
// a --> 3
```

- Para objetos, a passagem é feita por referência.

```
const c = {txt: "hello"};
const d = c;
d.txt = "hi";
// c --> "hi"
// d --> "hi"
```

- Null: quer dizer ausência de valor. Null em JavaScript significa um valor vazio e é considerado um tipo primitivo em JavaScript. Quando atribuimos null como valor para uma variável, significa branco ou vazio.
- Undefined: quer dizer não inicializado. Significa que a variável foi declarada, mas não lhe foi atribuido nenhum valor.

<img src="https://miro.medium.com/v2/resize:fit:880/0*Rme3K8rdqcOHugd5.jpg" width="600px"/>

#### Hoisting
- Significa **içamento**. 
- O interpretador da linguagem pega a variável declara com **var** e joga pra cima. 
- Em rusumo: consigo acessar a variável antes de declará-la.

#### Node vs. Browser
- Constantes e variáveis declaras com let não irão diretamente para o objecto global 'window'.
- Global dentro do node equivale ao objeto window.