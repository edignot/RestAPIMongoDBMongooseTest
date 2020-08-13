const mongoose = require('mongoose');
const Product = require('./models/product');
const url = 'DUMMY KEY';

mongoose
    .connect(url)
    .then(() => console.log('connected to data base'))
    .catch(() => console.log('connection to database failed'));

const createProduct = async (req, res, next) => {
    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
    });
    const product = await newProduct.save();
    res.json(product);
};

const getProducts = async (req, res, next) => {
    const products = await Product.find().exec();
    res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
