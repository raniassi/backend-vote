const User = require("../models/User");
const Presiden = require("../models/Presiden");
const Province = require("../models/Province");
const Ktp = require("../models/Ktp");
const Parpol = require("../models/Parpol");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
var randomstring = require("randomstring");
var Nexmo = require("nexmo");

module.exports = {
  async register(req, res, next) {
    console.log(req.body);
    const { name, noKtp, noKk, password, confirmpassword } = req.body;

    const nexmo = new Nexmo({
      apiKey: "e630389a",
      apiSecret: "SKfAMDiGewnO0pEa"
    });

    const resultRnd = randomstring.generate(6);
    
    console.log(resultRnd);

    // nexmo.message.sendSms(
    //   "62895333026480",
    //   "62895333026480",
    //   resultRnd,
    //   (err, responseData) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.dir(responseData);
    //     }
    //   }
    // );

    const CheckKtp = await Ktp.findOne({
      nik: noKtp,
      kkId: noKk
    });
    console.log(CheckKtp);

    const getIdProvince = await Province.findOne({
      province: CheckKtp.provinsi
    });

    if (CheckKtp) {
      const UserSchema = await new User({
        ktp: CheckKtp._id,
        noKtp,
        noKk,
        name,
        password: resultRnd,
        idKtp: CheckKtp._id,
        provinceId: getIdProvince._id,
        log: "null",
        role: 1
      }).save();

      if (UserSchema) {
        res.sendStatus(200);
      }
    } else {
      res.sendStatus(404);
      console.log(res);
    }
  },

  async addPresiden(req, res, next) {
    const {
      no_urut,
      nama_presiden,
      nama_wakil,
      id_parpol,
      vote,
      img
    } = req.body;
    console.log(req.body);
    let addRootUrl =  '/assets-img/'+img;
    const PresidenSchema = await new Presiden({
      no_urut,
      nama_presiden,
      nama_wakil,
      id_parpol,
      vote,
      img:addRootUrl
    }).save();

    if (PresidenSchema) {
      res.sendStatus(200);
    }
  },

  async addParpol(req, res, next) {
    const { nama_parpol } = req.body;

    const ParpolSchema = await new Parpol({
      nama_parpol
    }).save();

    if (ParpolSchema) {
      res.sendStatus(200);
    }
  },

  async addProvince(req, res, next) {
    const { province } = req.body;

    const ProvinceSchema = await new Province({
      province
    }).save();

    if (ProvinceSchema) {
      res.sendStatus(200);
    }
  },

  async voteAllCapres(req, res, next) {
    console.log(req.body);

    const voteCapres = await Presiden.findByIdAndUpdate(
      { _id: req.body.id_presiden },
      { $inc: { vote: 1 } }
    );

    const updateUser = await User.findByIdAndUpdate(
      { _id: req.body.id_user },
      { isVoted: true, isVotedIdCandidate: req.body.id_presiden }
    );

    if (voteCapres) {
      return res.sendStatus(200);
    }
    return res.sendStatus(500);
  },

  async login(req, res, next) {
    const { noKtp, noKk, password } = req.body;
    console.log(password);
    try {
      //TODO: Login
      const theUser = await User.findOne({
        noKtp,
        noKk
      });

      const match = await bcrypt.compare(password, theUser.password);

      if (!theUser) {
        return res.sendStatus(404);
      } else if (!match) {
        return res.sendStatus(403);
      }

      const payload = {
        id: theUser.id
      };

      const token = jwt.sign(payload, keys.JWT_SECRET_KEY, {
        expiresIn: 7 * 24 * 60 * 60
      });

      //TODO: Sending Response
      res.send({
        data: {
          token,
          user: theUser
        },
        status: {
          code: 200,
          message: "Request Handle Corretly",
          succeeded: true
        }
      });
    } catch (err) {
      next(err);
    }
  },

  async getPresiden(req, res, next) {
    const result = await Presiden.find({});
    console.log(result);
    res.json(result);
  },

  async getParpol(req, res, next) {
    const result = await Parpol.find({});
    console.log(result);
    res.json(result);
  },

  async getAllUsers(req, res, next) {
    const result = await User.find({})
      .populate({
        path: "isVotedIdCandidate"
      })
      .populate({
        path: "provinceId"
      });
    res.json(result);
  },

  async getUser(req, res, next) {
    console.log(req.query);
    const result = await User.findById({ _id: req.query.userId });
    console.log(result);
    res.json(result);
  },

  async getUsers(req, res, next) {
    const result = await User.find({}).populate({
      path: "ktp"
    });
    res.json(result);
  },

  async getAllKtp(req, res, next) {
    const result = await Ktp.find({}).populate({
      path: "_id"
    });
    res.json(result);
  },

  async getKtp(req, res, next) {
    const result = await Ktp.findOne({ nik: req.body.ktp });
    if (result) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  },

  async uploadPhoto(req, res, next) {
    // console.log(req.file)

    // console.log(req.query);
    // const result = await User.findById({ _id: req.query.userId });
    // console.log(result);
    // res.json(result);
    res.sendStatus(200);
  }
};
