const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();




//iniciando o banco de dados
mongoose.connect('mongodb+srv://denilson:denilson@cluster0.gztxb.mongodb.net/desafio?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());

//validando requisições em Json
app.use(express.json());



app.use(routes);



app.listen(process.env.PORT || 3333);