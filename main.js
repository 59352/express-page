const express = require('express');

const app = express();
const router = express.Router();

app.use('/', require('routes/index'));
app.use('/api', require('routes/api'));