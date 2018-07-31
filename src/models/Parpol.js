const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParpolSchema = new Schema({
    id_parpol: {
        type: Schema.Types.ObjectId,

    },
    nama_parpol: {
        unique: true,
        type: String,
        required: true
    },
});

const Parpol = mongoose.model('parpol', ParpolSchema);

module.exports = Parpol;