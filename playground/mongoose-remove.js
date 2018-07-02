const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
    
// });

//Todo.findOneAndRemove
Todo.findByIdAndRemove('5b3a68e208237e88e8341b50').then((todo) => {
    console.log(todo);
    
})