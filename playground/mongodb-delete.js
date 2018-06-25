// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDB server');
    
    //deletemany

    // client.collection('Todoes').deleteMany({text: 'East lunch'}).then((result)=> {
    //     console.log(result);
        
    // });
    
    // client.collection('Todoes').deleteOne({text: 'East lunch'}).then((result)=> {
    //         console.log(result);
            
    //     });
    
    // client.collection('Todoes').findOneAndDelete({completed: false}).then((result)=> {
    //     console.log(result);
        
    // });

    //  client.collection('Users').deleteMany({name: 'Joel'}).then((result)=> {
    //     console.log(result);
        
    // });
    client.collection('Users').findOneAndDelete({_id: new ObjectID('5b2e75d65bbe3d13c3752a10')}).then((result)=> {
        console.log(result);
        
    });


    // client.close();
});