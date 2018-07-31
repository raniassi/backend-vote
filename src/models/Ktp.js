const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KtpSchema = new Schema({
  nik: {
    type: String,
    required: true
  },

  provinsi: {
    type: String,
    required: false
  },
  nama: {
    type: String,
    required: true
  },
  kkId: {
    type: String,
    required: false
  },
  ttl: {
    type: String,
    required: true
  },
  jk: {
    type: String,
    required: true
  },
  goldar: {
    type: String,
    required: true
  },
  alamat: {
    type: String,
    required: true
  },
  rtrw: {
    type: String,
    required: false
  },
  keldes: {
    type: String,
    required: true
  },
  kecamatan: {
    type: String,
    required: true
  },
  kabkot: {
    type: String,
    required: true
  },
  agama: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  pekerjaan: {
    type: String,
    required: true
  },
  kewarganegaraan: {
    type: String,
    required: true
  },
  foto: {
    type: String,
    required: true
  }
});

const Ktp = mongoose.model("ktp", KtpSchema);

module.exports = Ktp;
