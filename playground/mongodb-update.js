// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDB server');
    
    client.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b2e75a045378a130ce2167e')
    }, {
        $set: {
            name: "Joel"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false

    }).then((result) => {
        console.log(result);
        
    });


    // client.close();
});