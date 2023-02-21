const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{type: 'string', required: true},
    brand:{type: 'string', required: true},
    EAN: {type: 'string', required: true},
    img:{type: 'string', required: false},
    components: [ {type: Schema.Types.ObjectId, ref: 'component'}],

}
)
const Product = mongoose.model('product', productSchema);

module.exports = Product;