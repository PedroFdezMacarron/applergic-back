const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const {validationEmail, validationPassword} = require('../../validators/validation');
const {generateSign} = require('../../jwt/jwt');

const register = async(req, res, next) => {
    try {
        const newUser = new User(req.body);
        if(!validationEmail(newUser.email)){
            res.status(400).send({code:400, message:'Invalid Email'})
            return next();
        }
        if(!validationPassword(newUser.password)){
            res.status(400).send({code:400, message:'Invalid password'})
            return next();
        }
        const users = await User.find({email:newUser.email})
        if(users.length > 0){
            res.status(400).send({code:400, message:'Duplicated Email'})
            return next();
        }
        newUser.password = bcrypt.hashSync(newUser.password, 10);   /////Encriptamos nuestra contraseña para que no nos la puedan robar
        const createdUser = await newUser.save();
        return res.status(200).json(createdUser);   
    } catch (error) {
        return res.status(500).json(error);
    }
}

const login = async(req, res, next) => {
     //console.log(req.body);
    try {
        const user = await User.findOne({email: req.body.email});
        // console.log('user',user);
        // console.log('rec body pass',req.body.password);
        // console.log('my user pasword',user.password);
        // console.log('bcr compare y parentesis',bcrypt.compareSync(req.body.password, user.password));
        if(bcrypt.compareSync(req.body.password, user.password)){
            //console.log('user._id',user._id);
            console.log('user.email',user.email);
            const token = generateSign(user._id, user.email);
            // console.log('token',token);
            return res.status(200).json({user, token});
        }else{
            // console.log('rechazado');
            res.status(400).send({code:400, message:'Password Error'})
            return next()
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

const update = async(req, res, next) => {
    console.log('actualizando usuario fase 1...');
    try {
        const newUserData = new User(req.body);
        const actualUser = await User.findOne({email: req.body.email});                
        console.log('actualizando usuario fase 2...');
        // console.log(actualUser);
        if(actualUser.email === req.body.email){
            console.log('actualizando usuario fase 3...');
            actualUser.diaryProducts = [...newUserData.diaryProducts];
            actualUser.intolerances = [...newUserData.intolerances];
            const createdUser = await actualUser.save();
            return res.status(200).json(createdUser);
        }else{
            return next()             
        }
    } catch (error) {
        return res.status(501).json(error);
    }
}

const update2 = async(req, res, next) => {
    console.log('update usuario fase 1...');
    try {
        const newUserData = new User(req.body);
        const actualUser = await User.findOne({email: req.body.email});                
        console.log('update usuario fase 2...');
        // console.log(actualUser);
        if(actualUser.email === req.body.email){
            console.log('update usuario fase 3...');            
            actualUser.name = newUserData.name;
            actualUser.phone = newUserData.phone;
            actualUser.contactName = newUserData.contactName;
            actualUser.contactEmail = newUserData.contactEmail;
            actualUser.contactPhone = newUserData.contactPhone                                                                                                                                                                                                                                                          ;
            actualUser.insuranceCompany = newUserData.insuranceCompany                                                                                                              ;
            actualUser.photourl = newUserData.photourl;
            
            const createdUser = await actualUser.save();
            return res.status(200).json(createdUser);
        }else{
            return next()             
        }
    } catch (error) {
        return res.status(501).json(error);
    }
}



module.exports = {register, login, update, update2}