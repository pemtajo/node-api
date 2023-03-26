const express = require('express');
const app = express();
 

app.get('/', (req, res) => {
    res.status(200).send('<p>Hello, running a simple REST API in Nodejs</p>')});


app.use(express.json());
app.listen(3000);