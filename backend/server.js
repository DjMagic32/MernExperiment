const express = require('express'); /* Importamos express dentro de una variable */

const store = require('./data/store');/* Ojo es importante saber que el metod "require" importa modulos por lo cual debemos 
llamar en este caso a 'store' como un modulo colocando al final del archivo store.js module.exports = store; */

const app = express(); 

const dotenv = require('dotenv') /* No lo habia recalcado, se utiliza el metodo 'require' para importar modulos dentro de una variable
en este caso importamos el modulo que instalamos dotenv dentro de las constante dotenv */

dotenv.config()

/* Utilizamos el metodo get para cuando solicitemos el endpoint nos entregue "API is runing..." */
app.get('/', (req, res) => {
    res.send("API is running..");
});

app.get("/api/store", (req, res) => {
    res.send(store);
});

app.get("/api/store/:id", (req, res) => {
    const element = store.find((n) => n._id === req.params.id);
    res.send(element);
});

const PORT = process.env.PORT;

app.listen(5000, console.log(`Server started en port ${PORT}`)) /* Interesante como se hace una injercion dentro de una string con "`" remplazando las comillas */

