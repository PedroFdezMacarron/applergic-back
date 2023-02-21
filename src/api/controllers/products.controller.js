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

const getProductsPopulate = async(req, res) => {
    console.log('get de products');
    try {
        const products = await Product.find().populate('components');
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getProduct = async(req, res) => {
    console.log('get de un producto by EAN:',req.params.id);
    try {
        const ean = req.params.id;        
        const product = await Product.findOne({EAN:ean}).populate('components');    
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getUserProducts = async(req, res) => {
    console.log('get de products by user');
    try {        
        const userBy = new User(req.body);                
        const arrayProducts = userBy.diaryProducts;         
        console.log(arrayProducts);
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

module.exports = {getProducts, getProductsPopulate, getProduct, getUserProducts, postProducts, putProducts, deleteProducts}