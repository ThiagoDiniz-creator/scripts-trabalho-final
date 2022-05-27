/*
const { connection } = require("../database/database");
const { Curso } = require("../database/curso");
const { Materia } = require("../database/materia");

const Curso_has_materia = connection.define(
  "cursos_has_materias",
  {},
  { timestamps: false, freezeTablename: true }
);

Curso.belongsToMany(Materia, { through: Curso_has_materia });
Materia.belongsToMany(Curso, { through: Curso_has_materia });

module.exports = {
  Curso_has_materia,
};
*/