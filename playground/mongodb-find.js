// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDB server');
    
    // client.collection('Todoes').find({
    //     _id: new ObjectID("5b30fc9b0782ee6b424d8972")
    //     }).toArray().then((docs) => {
    //     console.log('Todoes');
    //     console.log(JSON.stringify(docs, undefined, 2));
        
        
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
        
    // })


    // client.collection('Todoes').count().then((count) => {
    //     _id: new ObjectID("5b30fc9b0782ee6b424d8972")
    //     }).toArray().then((docs) => {
    //     console.log('Todoes');
    //     console.log(JSON.stringify(docs, undefined, 2));
        
        
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
        
    // })
    client.collection('Users').find({
        name: 'Joel'
        }).toArray().then((docs) => {
        console.log('Todoes');
        console.log(JSON.stringify(docs, undefined, 2));
        
        
    }, (err) => {
        console.log('Unable to fetch todos', err);
        
    })



    // client.close();
});