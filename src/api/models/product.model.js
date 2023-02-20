const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{type: 'string', required: true},
    brand:{type: 'string', required: true},
    EAN: {type: 'number', required: true},
<<<<<<< HEAD
    img:{type: 'string', required: false},    
    components: [ {type: Schema.Types.ObjectId, ref: 'component'}],
=======
    img:{type: 'string', required: false},
    components: [ {type: Schema.Types.ObjectId, ref: 'component'}],

>>>>>>> ee9dc1c4ee410275a5eacc8dabdfd974c402bc37
}
)
const Product = mongoose.model('product', productSchema);

module.exports = Product;