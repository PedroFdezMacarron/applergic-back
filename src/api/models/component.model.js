const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const componentSchema = new Schema({
    name:{type: 'string', required: true},
}
)

const Component = mongoose.model('component', componentSchema);

module.exports = Component;