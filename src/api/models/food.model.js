
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    ean: {type: 'string', required: true},
    name:{type: 'string', required: true},
}
)

const Food = mongoose.model('food', foodSchema);

module.exports = Food;