const express = require('express');
const app = express();

app.use(express.json());
app.use('/', require('./auth/auth'));
app.use('/', require('./routes/carRoute'));

app.listen(3000);