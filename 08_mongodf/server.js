const express = require ("express")
const bodyParser = require ("body-parser")
const port = 5000
const app = express();
const{Movie}=require("./movie")
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post("/create/movie", (req,res)=>{
    const {title, year,synopsis,director,cover}=req.body
    const newMovie = Movie({title,year,synopsis,director,cover})
    newMovie.save((err,movie)=>{
        err
        ?res.status(409).send(err)
        :res.status(201).send(movie)
    })
});
app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
});






