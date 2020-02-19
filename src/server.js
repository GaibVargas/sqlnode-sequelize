const express = require('express');
const routes = require('./routes');

require('./database'); // Procura automaticamente pelo index da pasta

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
