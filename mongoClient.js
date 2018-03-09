const MongoClient = require('mongodb').MongoClient;
const db = require('./configDb')


function sumarInvitado( nameEvento,asistencia){
    return MongoClient.connect(db.url).then(
        function(client){
        let db = client.db('roja')
        let collections = db.collection('eventos')

        
        return collections.update({"nameEvento":nameEvento}, {$push:{"asistencia": asistencia}})
    }).then(function(docs){
        return docs
    })
}

/*
function findStudent(name){
    return MongoClient.connect(db.url).then
    (function(client){
        let db = client.db('roja')
        let collections = db.collection('student')

        return collections.find({"name"
    :name}).toArray()
    }).then(function(docs){
        return docs
    }).catch(function(err){
        return err
    })
}
*/

function createEvent(nameEvento, fecha , lugar, ){
    return MongoClient.connect(db.url).then(
        function(client){
            let db = client.db('roja')
            let collections = db.collection('eventos')
            
            let data = {
                "nameEvento": nameEvento,
                "fechaEvento": fecha,
                "ubicacion": lugar,
                "asistencia": []
            }
            return collections.insert(data)
        }).then(function(docs){
            return docs
        })
    
}

function findEvent(nameEvento){
    return MongoClient.connect(db.url).then(
        function(client){
            let db = client.db('roja')
            let collections = db.collection('eventos')

            return collections.find({"nameEvento": nameEvento}).toArray()
        }).then(function(docs){
            return docs
        }).catch(function(err){
            return err
        })
    
}

module.exports.findEvent = findEvent
module.exports.createEvent = createEvent
module.exports.sumarInvitado = sumarInvitado