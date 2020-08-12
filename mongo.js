const { response } = require('express');
require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
console.log(process.env.MONGODB_KEY);
const url = process.env.MONGODB_KEY;

const createProduct = async (req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price,
    };
    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db();
        const result = db.collection('products').insertOne(newProduct);
    } catch (error) {
        return response.json({ message: 'We could not store data' });
    }
    client.close();

    res.json(newProduct);
};

const getProducts = async () => {};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
