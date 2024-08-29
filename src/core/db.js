const {MongoClient} = require('mongodb');
const client = new MongoClient("mongodb://localhost:27017");
const db = client.db("Market");
const collection = db.collection("products");

module.exports = {collection, client};