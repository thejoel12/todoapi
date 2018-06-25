// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDB server');
    
    // const db = client.collection('Todoes').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert Todo', err);
            
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
        
    // });

    // const db = client.collection('Users').insertOne({
    //     name: 'Joel',
    //     age: 29,
    //     location: 'florida'
    // }, (err, result) => {
    //     if (err) {
    //         console.log('Unable to insert new user', err);
            
    //     }

        // console.log(JSON.stringify(result.ops, undefined, 2));
        // console.log(result.ops[0]._id.getTimestamp());
        
    // });

    client.close();
});