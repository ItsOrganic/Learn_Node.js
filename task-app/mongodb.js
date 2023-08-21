const { MongoClient, ObjectId } =require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("task-app");
    const movies = database.collection("users");

    // Query for a movie that has the title 'The Room'
    const query = { name: "Shivam" };

    // const options = {
    //   // sort matched documents in descending order by rating
    //   sort: { "imdb.rating": -1 },
    //   // Include only the `title` and `imdb` fields in the returned document
    //   projection: { _id: 0, title: 1, imdb: 1 },
    // };

    // const movie = await movies.find({completed:false}).toArray();

    //Update one 
    // const update = await movies.updateMany({
    //   name:'Shivam'
    // },{
    //   $inc:{
    //     age:1
    //   }
    // }
    // )

    // Update many 
    // const update = await movies.updateMany({
    //   completed: false
    // },
    // {
    //   $set: {
    //    completed: true
    //   }
    // },{completed:1})

    //DeleteMany
    const del = await movies.deleteMany({
      age: {$gt:25},
      _id:new ObjectId("64c8dae9b14eb80134c544d7")
    })

    // since this method returns the matched document, not a cursor, print it directly
    console.log(del);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);














































































































// // Import the MongoDB client
// const { MongoClient } = require('mongodb');

// // Connection URI for your MongoDB server
// const uri = 'mongodb://localhost:27017';

// // Name of the database to use
// const dbName = 'task-app';

// // Name of the collection to create and store the document
// const collectionName = 'users';

// // Sample document with the name "Adam"
// const document = [{
//   name: 'Black Adam',
//   age: 27,
//   completed: true
// },
// {
//   name: 'Shivam',
//   age:20,
//   completed:false
// },
// {
//   name: 'Random',
//   age: 25,
//   completed:true
// }
// ];

// // Connect to MongoDB
// MongoClient.connect(uri, { useUnifiedTopology: true })
//   .then(client => {
//     // Get the database
//     const db = client.db(dbName);

//     // Create or access the collection and insert the document
//     db.collection(collectionName).find({name:"Shivam"})
//       .then(result => {
//         console.log('Document inserted successfully:', result ,document);
//         client.close();
//       })
//       .catch(err => {
//         console.error('Error inserting document:', err);
//         client.close();
//       });
//   })
//   .catch(err => {
//     console.error('Error connecting to MongoDB:', err);
//   })
