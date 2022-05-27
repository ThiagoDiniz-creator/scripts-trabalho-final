/*
const { connection } = require("../database/database");
const { DataTypes } = require("sequelize");

const Funcionario_has_acesso = connection.define(
  "funcionarios_has_acesso",
  {
    funcionario_cpf: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      foreignKey: true,
    },
    acesso_idAcesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
  },
  {
    timestamps: false,
    freezeTablename: true,
  }
);

module.exports = {
  Funcionario_has_acesso,
};
*/