const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5907544715c0cb7c9cb4d18f11';

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo)
// });

if(!ObjectId.isValid(id)){
    return console.log('Invalid id specified');
}

Todo.findById(id).then((todo) => {
  if(!todo){
    return console.log('ID not found');
  }
  console.log('Todo by ID', todo)
}).catch((e) => console.log(e));
