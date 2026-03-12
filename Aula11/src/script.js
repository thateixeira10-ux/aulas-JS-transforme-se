// Utilizando o operador in
const pessoa = {
  primerioNome:"Thalison",
  ultimoNome:"Natalino",
  idade: 22,
  pais: "Brasil",
}

let exIn = ("idade" in pessoa);

console.log(exIn);

// Criação de objeto aniinhados

const pessoa2 = {
  primerioNome: "Ethan",
  segundoNome: "Teixeira",
  carros: {
    carro1: "Porshe",
    carro2: "Volkswagen",
    carro3: "Audi",
  },
  motos: {
    moto1: "Ducati",
    moto2: "BMW",
  }
}

let moto1 = "moto1";

console.log(pessoa2.carros.carro3);
console.log(pessoa2.carros["carro2"]);
console.log(pessoa2 ['carros']["carro1"]);
console.log(pessoa2.motos[moto1])
