//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  //findOneAndUpdate
  db.collection('Users').findOneAndUpdate({name: 'Dort'}, {name: 'Dort', age: 98, location: 'Funkytown'}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  // db.close();

});
