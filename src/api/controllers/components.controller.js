const Component = require('../models/component.model')


const getComponents = async(req, res) => {
    console.log('get de components');
    try {
        const components = await Component.find();
        return res.status(200).json(components);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postComponents = async(req, res) => {
    try {
        const newComponent = new Component(req.body);
        const createdComponent = await newComponent.save();
        return res.status(201).json(createdComponent);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putComponents = async(req, res) => {
    try {
        const {id} = req.params;
        const putComponent = new Component(req.body);
        putComponent._id = id;
        
        const updatedComponent = await Component.findByIdAndUpdate(id, putComponent, {new: true});
        return res.status(200).json(updatedComponent);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteComponents = async(req, res) => {
    try {
        const {id} = req.params;
        const deletedComponent = await Component.findByIdAndDelete(id);
        if(deletedComponent){
            return res.status(200).json(deletedComponent);
        }else{
            return res.status(404).send({code:404,message:"component not found to delete"});
        }
        
    } catch (error) {
        
    }
}

module.exports = {getComponents, postComponents, putComponents, deleteComponents}