// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err)
    return console.log('Unable to connect to MongoDB server');

  console.log('Connected to MongoDB server successfully');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  
  db.collection('Users').deleteMany({name: 'Martin Kaldramov'}).then((res) => {
    console.log(res);
  }, (err) => {
    console.log('Unable to delete the entries', err);
  });

  // db.collection('Users').findOneAndDelete({name: 'Somebody Else'}).then((res) => {
  //   console.log('Deleting entry with name: Somebody Else successful');
  //   console.log(res);
  // }, (err) => {
  //   console.log('Unable to delete the entry with name: Somebody Else', err);
  // });

  // db.close();
  
});

