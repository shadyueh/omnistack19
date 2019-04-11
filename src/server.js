const express = require('express');
const app = express();

//rota teste inicial
app.get('/teste', (req, res) => {
    return res.send('Hello World');
});

app.listen(3333);