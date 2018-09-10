const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PresidenSchema = new Schema({
  id_presiden: {
    type: Schema.Types.ObjectId
  },
  no_urut: {
    type: String,
    unique: true,
    required: true
  },
  nama_presiden: {
    type: String,
    unique: true,
    required: true
  },
  nama_wakil: {
    type: String,
    unique: true,
    required: true
  },
  id_parpol: {
    type: Schema.Types.ObjectId,
    ref: "parpol",
    required: true
  },
  vote: {
    type: Number,
    required: true,
    default: 0
  },
  img: {
    type: String,
    required: false
  },
  final:{
    type: Number,
    required: false,
    default: 0
  }
});

const Presiden = mongoose.model("presiden", PresidenSchema);

module.exports = Presiden;
