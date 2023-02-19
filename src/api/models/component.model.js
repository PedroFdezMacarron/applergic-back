const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const componentSchema = new Schema({
    letter:{type: 'string', required: true},
    components: {type: 'array', required: true},
})

const Component = mongoose.model('component', componentSchema);

module.exports = Component;