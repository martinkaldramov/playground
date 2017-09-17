// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err)
    return console.log('Unable to connect to MongoDB server');

  console.log('Connected to MongoDB server successfully');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('59be768fe87905b947bfd3ef')   
  }, {
    $set: {
      completed: true  
    }  
  }, {
    returnOriginal: false  
  }).then((res) => {
    console.log(res);
  });

  // db.close();
  
});

