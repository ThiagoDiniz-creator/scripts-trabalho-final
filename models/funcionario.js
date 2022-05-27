const { connection } = require("../database/database");
const { DataTypes } = require("sequelize");

const Funcionario = connection.define(
  "funcionario",
  {
    cpf: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      unique: true,
      field: "cpfFuncionario",
    },
    nome: {
      type: DataTypes.STRING(25),
      field: "nomeFuncionario",
    },
    sobrenome: {
      type: DataTypes.STRING(40),
      field: "sobrenomeFuncionario",
    },
    dataDeNascimento: {
      type: DataTypes.DATEONLY,
      field: "dataNascimentoFuncionario",
    },
    email: {
      type: DataTypes.STRING(60),
      field: "emailFuncionario",
    },
    ocupacao: {
      type: DataTypes.STRING(15),
      field: "ocupacaoFuncionario",
    },
    senha: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: "senhaFuncionario",
    },
  },
  {
    tablename: "funcionarios",
    timestamps: false,
  }
);

module.exports = {
  Funcionario,
};
