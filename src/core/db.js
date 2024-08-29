const {MongoClient} = require('mongodb');
const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("Market");
const collection = db.collection("products");

module.exports = {collection, client};
