const { connection } = require("../database/database");
const { DataTypes } = require("sequelize");

const Calendario = connection.define(
  "calendario",
  {
    id: {
      type: DataTypes.INTEGER,
      autoincrement: true,
      primaryKey: true,
      field: "idCalendario",
    },
    dia: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: "diaCalendario",
    },
    descricao: {
      type: DataTypes.STRING(60),
      allowNull: false,
      field: "descricaoCalendario",
    },
    diaLetivo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: "diaLetivoCalendario",
    },
  },
  {
    timestamps: false,
    freezeTablename: true,
  }
);

module.exports = {
  Calendario,
};
