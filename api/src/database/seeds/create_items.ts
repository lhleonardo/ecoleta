import Knex from "knex";

const INITIAL_DATA = [
  {
    title: "Lâmpadas",
    image: "lampadas.svg",
  },
  {
    title: "Pilhas e Baterias",
    image: "baterias.svg",
  },
  {
    title: "Papéis e Papelão",
    image: "papeis-papelao.svg",
  },
  {
    title: "Resíduos Eletrônicos",
    image: "eletronicos.svg",
  },
  {
    title: "Resíduos Orgânicos",
    image: "organicos.svg",
  },
  {
    title: "Óleo de Cozinha",
    image: "oleo.svg",
  },
];

export async function seed(knex: Knex) {
  await knex("items").insert(INITIAL_DATA);
}
