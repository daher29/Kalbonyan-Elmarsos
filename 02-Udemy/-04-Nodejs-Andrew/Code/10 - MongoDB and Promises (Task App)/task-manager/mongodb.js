// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.toHexString().length);

// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users')
    //   .deleteMany({
    //     age: 33,
    //   })
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    db.collection('tasks')
      .deleteOne({
        description: 'Clean the house',
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });

    //////////////////////////////////////////

    db.collection('users')
      .updateOne(
        {
          _id: new ObjectID('62de6a49422aed1240c61ece'),
        },
        {
          $set: {
            name: 'Moh',
          },
        },
        {
          $inc: {
            age: 5,
          },
        }
      )
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });

    db.collection('tasks')
      .updateMany(
        {
          completed: false,
        },
        {
          $set: {
            completed: true,
          },
        }
      )
      .then(result => {
        console.log(result.modifiedCount);
      })
      .catch(error => {
        console.log(error);
      });

    /////////////////////////////////////////

    // db.collection('users').findOne({ _id: new ObjectID("62de815d101929126cfa4736") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 33 }).toArray((error, users) => {
    //     console.log(users)
    // })

    /////////////////////////////////////////

    db.collection('tasks').findOne(
      { _id: new ObjectID('62de815d101929126cfa4736') },
      (error, task) => {
        console.log(task);
      }
    );

    db.collection('tasks')
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });

    ////////////////////////////////////

    // db.collection('users').insertOne(
    //   {
    //     _id: id,
    //     name: 'Moh',
    //     age: 29,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    //   }
    // );

    /////////////////////////////////

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Abd',
    //       age: 33,
    //     },
    //     {
    //       name: 'So',
    //       age: '32',
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert documents');
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection('tasks').insertMany(
    //   [
    //     {
    //       description: 'Clean the house',
    //       completed: true,
    //     },
    //     {
    //       description: 'Renew inspection',
    //       completed: false,
    //     },
    //     {
    //       description: 'Pot plants',
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert tasks!');
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);
