const express = require("express");
const app = express();
const bodyparser = require('body-parser');
const MongoClient = require('./mongoClient')
const cors = require('cors');

let app = express();

app.use(cors());
app.options('*',cors());
app.use(bodyparser.urlencoded({ extended: true}))
app.use(bodyparser.json());


app.get("/", (request, response) => {
    response.send("Hola mundo")
});

app.post('/create/eventos', (req, res) => {
    const {nameEvento, fecha, lugar} = req.body
    
    MongoClient.createEvent(nameEvento, fecha, lugar).then(function(newEvent){
        res.send({newEvent})
    })
})

app.post('/find/eventos', (req, res) => {
    const {nameEvento} = req.body

    MongoClient.findEvent(nameEvento).then(function(correctUser){
        if (correctUser.length == 0){
            res.send("ese evento no existe")
        }else{
            console.log("asistiras?")
            res.send(correctUser)
        }
    })
})

app.post('/sum/eventos', (req, res) => {
    const {asistencia} = req.body

    MongoClient.sumarInvitado(asistencia).then(function(correctAsistencia){
        res.send(correctAsistencia)
    })
})


app.listen(3000, () => {
    console.log("magic happens in port 3000!");
}); 