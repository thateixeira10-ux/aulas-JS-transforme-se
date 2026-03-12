// Criação de métodos
const casa = {
  portas: 10,
  janelas: 20,
  telhado: true,
  pets: {
    cachorro: {
      nome: "Polar",
      raca: "Labrador",
      cor: "Branco",
      latir: function() {
        return this.nome + "latiu: au au";
      }
    },
  }
}

console.log(casa.pets.cachorro.latir())