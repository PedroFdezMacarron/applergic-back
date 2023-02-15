const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{type: 'string', required: true},
    brand:{type: 'string', required: true},
    EAN: {type: 'number', required: true},
    components: {type: 'array', required: true},
}
)
const Product = mongoose.model('product', productSchema);

module.exports = Product;