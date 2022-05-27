/*
const { connection } = require("./database");
const { DataTypes, Deferrable } = require("sequelize");
const { Funcionario } = require("./funcionario");
const { Materia } = require("./materia");
const { Aluno } = require("./aluno");

const Aluno_has_materia = connection.define(
  "aluno_has_materia",
  {
    semestre: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "semestre_aluno_has_materia",
    },
    semestre: {
      type: DataTypes.STRING,
      field: "semestre_aluno_has_materia",
    },
    numFalta: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "numeroFaltas_aluno_has_materia",
    },
    nota: {
      type: DataTypes.DOUBLE(2, 2),
      allowNull: false,
      field: "nota_aluno_has_materia",
    },
    funcionario_cpf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      field: "funcionario_cpf_aluno_has_materia",
      references: {
        model: Funcionario,
        key: "idFuncionario",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  },
  {
    timestamps: false,
    tablename: "aluno_has_materia",
  }
);

Aluno.belongsToMany(Materia, { through: Aluno_has_materia });
Materia.belongsToMany(Aluno, { through: Aluno_has_materia });

module.exports = {
  Aluno_has_materia,
};
*/