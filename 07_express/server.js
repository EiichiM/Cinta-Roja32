const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.get("/", (Request, Response) => {
    Response.send({ message: "Bienevenidos a mi API" })
});

app.get("/home", (Request, Response) => {
    Response.send({ message: "mensaje desde home" })
});
app.get("/user/:uid", () => {
    console.log(req.params);
    const uid = req.params.uid
    Res.send({ message: `Id buscado es : ${uid}` })
});
app.get("/serch", (req, res) => {
    console.log(req.query)
    const { q, color, vidas } = req.queryç
    res.send({ q, color, vidas })
});
app.post("/create/user", (req, res) => {
    console.log(req.body)
    const { name, last_name, age } = req.body
    res.send({
        id: 19,
        name,
        last_name,
        age
    })
});
app.patch("/modifar/user", (req, res) => {
    console.log(req.body)
    const { name, last_name, age } = req.body
    res.send({
        id: 19,
        name,
        last_name,
        age
    })
});

// ejercicio 1
app.get("/api/", (req, res) => {
    res.status(200).send({ 'mensaje': 'hola mundo' });
});
// ejercicio 2
app.get("/api/suma", (req, res) => {
    const { num1, num2 } = req.query
    const resultado = (parseInt(num1) + parseInt(num2))
    res.status(200).send({ resultado })
});
// ejercicio 3
app.get("/api/usuario", (req, res) => {
    const { usuario } = req.params
    res.status(200).send({ usuario })
});
// ejercicio 4
const request = require('request');

app.get('/api/swapi/:people', (req, resp) => {
    const {people} = req.params;
    request.get(`https://swapi.co/api/people/${people}/`, (err, res, body) => {
        const swapi_res = JSON.parse(body);
        resp.status(200).send({ 'personaje': swapi_res });
    });
});

app.listen(4000, () => {
    console.log("Server on port 4000 ")
});