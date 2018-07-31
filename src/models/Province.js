const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProvinceSchema = new Schema({
    
    province: {
        type: String,
        required: true
    },
});

const Province = mongoose.model('province', ProvinceSchema);

module.exports = Province;