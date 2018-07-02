const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// var id = '5b33a56ea38600be04f5b74a';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
    
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos); 
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo); 
// });

// Todo.findById(id).then((todo) => {
//     console.log('Todo by id', todo);
    
// });

var id = '5b312c9657c4d00809c60985';

User.findById(id).then((user) => {
    if (!user) {
        console.log('Id not found');
        
    }
    console.log('User is: ', user);
    
    
}).catch((e) => console.log(e));