const Product = require('../models/product.model')
const User = require('../models/user.model');

const getProducts = async(req, res) => {
    console.log('get de products');
    try {
        const products = await Product.find();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getUserProducts = async(req, res) => {
    console.log('get de products by user');
    try {        
        const userBy = new User(req.body);        
        const arrayProducts = userBy.diaryProducts;        
        const products = await Product.find({ _id: { $in: arrayProducts } });
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json(error);
    }
}


const postProducts = async(req, res) => {
    try {
        const newProduct = new Product(req.body);
        const createdProduct = await newProduct.save();
        return res.status(201).json(createdProduct);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putProducts = async(req, res) => {
    try {
        const {id} = req.params;
        const putProduct = new Product(req.body);
        putProduct._id = id;
        
        const updatedProduct = await Product.findByIdAndUpdate(id, putProduct, {new: true});
        return res.status(200).json(updatedProduct);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteProducts = async(req, res) => {
    try {
        const {id} = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if(deletedProduct){
            return res.status(200).json(deletedProduct);
        }else{
            return res.status(404).send({code:404,message:"product not found to delete"});
        }
        
    } catch (error) {
        
    }
}

module.exports = {getProducts, getUserProducts, postProducts, putProducts, deleteProducts}