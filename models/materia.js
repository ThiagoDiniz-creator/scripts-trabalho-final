const { connection } = require("../database/database");
const { DataTypes } = require("sequelize");

const Materia = connection.define(
  "materias",
  {
    id: {
      type: DataTypes.INTEGER,
      autoincrement: true,
      primaryKey: true,
      field: "idMateria",
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: "nomeMateria",
    },
    cargaHoraria: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      field: "cargaHorariaMateria",
    },
  },
  {
    timestamps: false,
    freezeTablename: true,
  }
);

module.exports = {
  Materia,
};
