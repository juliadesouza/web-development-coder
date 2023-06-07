function tratarErroELancar(erro) {
  throw new Error("Aqui esta um erro: " + e);
}

function imprimirNome(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log("eu sempre executo");
  }
}
const obj = { nome: "Julia" };
imprimirNome(obj);
