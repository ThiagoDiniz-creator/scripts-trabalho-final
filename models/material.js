const { connection } = require("../database/database");
const { DataTypes } = require("sequelize");

const Material = connection.define(
  "material",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoincremente: true,
      field: "idMaterial",
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: "nomeMaterial",
    },
    descricao: {
      type: DataTypes.STRING(80),
      allowNull: false,
      field: "descricaoMaterial",
    },
    link: {
      type: DataTypes.STRING(70),
      allowNull: true,
      field: "linkMaterial",
    },
  },
  {
    timestamps: false,
    tablename: "materiais",
  }
);

module.exports = {
  Material,
};
