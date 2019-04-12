const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://zeroshin:z3r0sh1n@cluster0-keblv.mongodb.net/omnistack?retryWrites=true',
{
    useNewUrlParser:true
});

//habilita suporte a estrutura de dados JSON
app.use(express.json());
//habilita transmissão de arquivos nas requisições
app.use(express.urlencoded({extended:true}));
//importando as rotas
app.use(require('./routes'));
//porta do serviço
app.listen(3333);