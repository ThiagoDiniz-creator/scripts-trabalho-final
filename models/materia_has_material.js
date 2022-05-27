/*
const { connection } = require("../database/database");
const { Materia } = require("../database/materia");
const { Material } = require("../database/material");

const Materia_has_material = connection.define(
  "materias_has_materiais",
  {},
  { freezeTablename: true, timestamps: false }
);

Materia.belongsToMany(Material, { through: Materia_has_material });
Material.belongsToMany(Materia, { through: Material });

module.exports = {
  Materia_has_material,
};
*/