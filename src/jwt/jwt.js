const jwt = require('jsonwebtoken');

const generateSign = (id, email) => {
    console.log('generando sign...');
    return jwt.sign({id,email}, process.env.JWT_KEY, {expiresIn: '4h'});
}

const verifySign = (token) => {
    console.log('verificando sign...');
    return jwt.verify(token, process.env.JWT_KEY);
}

module.exports ={generateSign, verifySign};