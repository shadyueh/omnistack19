const express = require('express');
const app = express();

//habilita suporte a estrutura de dados JSON
app.use(express.json());
//habilita transmissão de arquivos nas requisições
app.use(express.urlencoded({extended:true}));
//importando as rotas
app.use(require('./routes'));
//porta do serviço
app.listen(3333);