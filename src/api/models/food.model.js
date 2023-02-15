const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name:{type: 'string', required: true},
    brand:{type: 'string', required: true},
    EAN: {type: 'number', required: true},
    components: {type: 'array', required: true},
}
)
const Food = mongoose.model('food', foodSchema);

module.exports = Food;