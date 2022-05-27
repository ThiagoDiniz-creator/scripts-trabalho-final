const { connection } = require("../database/database");
const { DataTypes } = require("sequelize");

const Curso = connection.define(
  "cursos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true,
      field: "idCurso",
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: "nomeCurso",
    },
  },
  {
    timestamps: false,
    freezeTablename: true,
  }
);

module.exports = {
  Curso,
};
