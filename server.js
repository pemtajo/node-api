const express = require('express');
const app = express();
const controller = require('./serverController');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
app.post('/user', (req, res) => {
    res.status(200).send({message: controller.messageName(req.body.name)});
});

app.get('/', (req, res) => {
    res.status(200).send('<p>Hello, running a simple REST API in Nodejs</p>')
});

app.listen(3000, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", 3000);
});