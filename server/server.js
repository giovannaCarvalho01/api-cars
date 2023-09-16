const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use('/', require('./auth/auth'));
app.use('/', require('./routes/carRoute'));


const port = process.env.PORT ?? 3000
app.listen(port);