const {collection}   = require('../core/db');
const express        = require('express');
const product        = require('../models/product');
const Products       = express.Router();

Products.get('/', async (req, res) => {
    res.status(200).send(await collection.find().toArray());
});

Products.post('/', async (req, res) => {
    const {name, price} = req.body;
    product.name = name;    
    product.price = price;
    await collection.insertOne(product);
    res.status(200).send("Product store in db succesfuly!!!");
});

Products.delete('/', async (req, res) => {
    await collection.deleteMany();
    res.status(200).send("Collection deleted");
});

module.exports = Products;
