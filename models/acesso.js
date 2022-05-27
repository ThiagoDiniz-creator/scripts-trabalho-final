const { connection } = require("../database/database");
const { DataTypes } = require("sequelize");

const Acesso = connection.define(
  "acesso",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoincrement: true,
      field: "idAcesso",
    },
    nivel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "nivelAcesso",
      // default value: "VALOR_PADRÃO" => é uma propriedade possível para padronizar todos os valores
    },
  },
  {
    // a propriedade freezeTablename evita o processo de nomeação padrão do Sequelize, que pega o nome da definição e o coloca no plural.
    freezeTablename: true,
    // outra alternativa é usar o tablename diretamente, dessa forma, definindo diretamente o nome da tabela
    tablename: "acessos",
    timestamps: false, //define que os valores createdAt e updatedAt (que são criados, e atualizados pelo Sequelize) não sejam criados, e por consequência
    // utilizados durante as atualizações da tabela
    // também é possível criar um campo específico com outro nome, usando as propriedades:
    // updatedAt: "nomeDoCampo",
    // createdAt: "nomeDoCampo"
  }
);

// a função model.sync define como será a interação do modelo com a tabela já existente
// no sync({force: true}) o modelo vai sempre sobrescrever a tabela existente independente de qualquer coisa, se ela não existir, vai criá-la
// no sync({alter: true}) o modelo vai alterar a tabela quando existirem incoerências (como na quantidade e tipo dos campos), se ela não existir, vai criá-la
// no sync() o modelo vai apenas criar a tabela se ela já existir

module.exports = {
  Acesso,
};
