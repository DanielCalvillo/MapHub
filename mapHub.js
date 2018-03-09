const express = require("express");
const app = express();
const bodyparser = require('body-parser');
const MongoClient = require('./mongoForMap')
const cors = require('cors');


app.use(cors());
app.options('*',cors());
app.use(bodyparser.urlencoded({ extended: true}))
app.use(bodyparser.json());



app.post('/create/estado', (req, res) => {
    
    MongoClient.Estados().then(function(newEvent){
        res.send({newEvent})
    })
})

app.get('/mostrar/estados',(req,res)=>{
    MongoClient.findEstados().then(function(event){
        res.send(event)
    })
})

app.get('/mostrar/estados/:estado',(req,res)=>{
    var {estado} = req.params
    console.log(typeof(estado))
    MongoClient.findEstado().then(function(event){
        console.log(typeof(event))
        res.send(event[0].data.states.estado)
    })
})

app.post('/sumar/rubros/:rubro1/:rubro2/:rubro3/:rubro4/:rubro5/:genero', (req, res) => {
    var {rubro1,rubro2,rubro3,rubro4,rubro5,genero} = req.params
    console.log(rubro1,rubro2, rubro3, rubro4, rubro5, genero)
    
})

/*
app.get('/mostrar/estado',(req,res)=>{
    MongoClient.findEstado(aguascalientes).then(function(event){
        res.send(event)
    })
})
*/

app.listen(3000, () => {
    console.log("magic happens in port 3000!");
}); 