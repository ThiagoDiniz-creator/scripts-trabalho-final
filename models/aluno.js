/*
const { connection } = require("../database/database");
const { DataTypes, Deferrable } = require("sequelize");
const { Acesso } = require("../database/acesso");

const Aluno = connection.define(
  "aluno",
  {
    registro: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
      field: "registoAluno",
    },
    nome: {
      type: DataTypes.STRING(25),
      allowNull: false,
      field: "nomeAluno",
    },
    sobrenome: {
      type: DataTypes.STRING(40),
      allowNull: false,
      field: "sobrenomeAluno",
    },
    dataDeNascimento: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "dataNascimentoAluno",
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      field: "emailAluno",
    },
    situacao: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: "situacaoAluno",
    },
    senha: {
      type: DataTypes.STRING(2),
      allowNull: false,
      field: "senhaAluno",
    },
    semestre: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      field: "semestreAluno",
    },
    idAcesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "acesso_idAcesso",
      references: {
        model: Acesso,
        key: "idAcesso",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  },
  {
    tablename: "alunos",
    timestamps: false,
  }
);

module.exports = {
  Aluno,
};
*/