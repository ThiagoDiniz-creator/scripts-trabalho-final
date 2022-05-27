const express = require("express"); // Package do express
const app = express(); // Usando a função express() vamos criar o app, ou seja, o nosso server
const session = require("express-session"); // Package que lida com sessões
const { connection } = require("./database/database"); // É a conexão feita com a base de dados
const bcrypt = require("bcryptjs"); // Package que lida com a criptografia
const path = require("path"); // Package que lida com caminhos de diretórios
const verificarLogin = require("./middleware/checklogin"); // Middleware que controla o acesso às páginas
const Sequelize = require("sequelize");
const { Op, DataTypes } = require("sequelize");

// view engine setup
app.set("views", path.join(__dirname, "views")); //definindo a pasta que contém as views/páginas
app.set("view engine", "ejs"); //definindo o motor de visualização, no caso o EJS

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); //definição da pasta onde os recursos serão armazenados

// Sessions
app.use(
  session({
    //criação de sessão padrão do servidor
    secret: "livraria", //palavra-secreta para acessar os valores
    cookie: {
      //definição das características dos cookies
      maxAge: 1200000, //tempo máximo de vida do cookie
    },
    resave: false, //se ele pode 'reiniciar' com o uso
    saveUninitialized: false,
  })
);

// Models
const { Funcionario } = require("./models/funcionario"); //modelo que permite interagir com a tabela Funcionario
const { Materia } = require("./models/materia");

// Routes
const FuncionarioRoute = require("./routes/funcionario"); //rota que vai lidar com as requisições do /funcionario

// app.get('endereço', (request, response) => {}) é uma função que controla o fluxo de navegação
app.get("/login", (req, res) => {
  res.render("login", { msg: "Mensagem" });
  //res.render() solicita a exibição de uma página no primeiro parâmetro, o segundo campo é um objeto com os valores desejados
}); 

app.get("/", (req, res) => {
  res.render("index", { title: "oi" });

}); 

// Post que vai lidar com o login
app.post("/login", (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;

  //req.body contém todos os parâmetros que são passados pelo form/url

  //findOne({condição: {}}) é uma função que encontra um único registro que atende a condição definida
  Funcionario.findOne({
    where: {
      email: email,
    },
  }).then((usuario) => {
    if (usuario != undefined) {
      //const deuCerto = bcrypt.compareSync(senha, usuario.senha);
      const deuCerto = senha === usuario.senha;

      if (deuCerto) {
        req.session.login = {
          nome: usuario.nome,
        };

        res.render("homepage.ejs");
      } else {
        res.render("login", { msg: "Usuário ou senha inválidos!" });
      }
    } else {
      res.render("login", { msg: "Usuário ou senha inválidos!" });
    }
  });
});


app.listen(8080, () => console.log("O servidor está ativo!"));
module.exports = {
  app, 

}
