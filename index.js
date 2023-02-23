const express = require('express');
const server = express();
const cors = require('cors');
const escolaridade = require('./src/data/escolaridade.json')

server.get('/escolaridade', cors(), (req, res) => {
    return res.json(escolaridade)
});

server.listen(3000, () => {
    console.log('servidor esta funcionando')
});