const express = require('express');

const routes = express.Router();
//rota teste inicial
routes.get('/teste', (req, res) => {
    return res.send('Hello World');
});
//exportando a variável routes
module.exports = routes;