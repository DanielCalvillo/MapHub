const MongoClient = require('mongodb').MongoClient;
const db = require('./configDb')
const estados = require('./estados')


function Estados(){
    return MongoClient.connect(db.url).then(
        function(client){
            let db = client.db('roja')
            let collections = db.collection('mapHub')

            let data = estados

            return collections.insert(data)
        }).then(function(docs){
            return docs
        })

}

function findEstados(){
    return MongoClient.connect(db.url).then(
        function(client){
            let db = client.db('roja')
            let collections = db.collection('mapHub')

            return collections.find().toArray()
        }).then(function(docs){
            return docs
        }).catch(function(err){
            return err
        })
    
}

function findEstado(){
    return MongoClient.connect(db.url).then(
        function(client){
            let db = client.db('roja')
            let collections = db.collection('mapHub')

            return collections.find(
               {} 
            ).toArray()
        }).then(function(docs){         
            return docs
        }).catch(function(err){
            return err
        })
    
}




module.exports.Estados = Estados 
module.exports.findEstados = findEstados
module.exports.findEstado = findEstado
