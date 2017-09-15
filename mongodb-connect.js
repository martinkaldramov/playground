const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err)
    return console.log('Unable to connect to MongoDB server');

  console.log('Connected to MongoDB server successfully');

  db.collection('Todos').insertOne({
    text: 'A todo item #1',
    completed: false
  }, (err, result) => {
    if(err)
       return console.log('Error adding a file to the Todos collection');

      console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});