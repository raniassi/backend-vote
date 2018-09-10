const VoteStatus = require("../models/VoteStatus");
var moment = require("moment");
module.exports = {
  async addStatus(req, res, next) {
    const { nama, status, timeStart, timeEnd } = req.body;
    const VoteStatusSchema = await new VoteStatus({
      nama, 
      status,
      timeStart,
      timeEnd
    }).save();

    if (VoteStatusSchema) {
      res.sendStatus(200);
    }
  },

  async getStatus(req, res, next) {
  var dateNow = moment();
    
    const result = await VoteStatus.find({});
    const voting = result[0];
    const sengketa = result[3];
    const panikButton = result[1];
    const sengketaButton = result[2];
    if (result.length !== 0) {
      if (
        voting.timeStart !== null &&
        voting.timeEnd !== null
      ) {
        if (moment(dateNow).isBefore(voting.timeStart) === false) {
          //console.log("masuk waktu")
          if(moment(dateNow).isAfter(voting.timeEnd) === true){
            // kodisi matikan
            //console.log("masuk marikan")
           const result =  await VoteStatus.findByIdAndUpdate({_id:voting._id},{status:false, timeStart:null, timeEnd:null});
            if (result) {
              //console.log("berhsail dimatikan",dateNow)
            }else{
              //console.log("gagal updae")
            }
          }else{
            //kondisi nyalakan
            const result =  await VoteStatus.findByIdAndUpdate({_id:voting._id},{status:true});
            if (result) {
              console.log("berhsail nyalakan,",dateNow)
            }
          }
        }else{
          console.log("tidak masuk waktu", dateNow)
        }
      }
    }
    const resultUpdate = await VoteStatus.find({});
    res.json(resultUpdate);
  },

  async postStatusUpdate(req, res, next) {
    const result = await VoteStatus.findByIdAndUpdate(
      {
        _id: req.body.id
      },
      {
        timeStart: req.body.start,
        timeEnd: req.body.end
      }
    );
    if (result) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  },

  async updateStatus(req, res, next) {
    const result = await VoteStatus.findByIdAndUpdate(
      {
        _id: req.body.id
      },
      {
        status: req.body.status
      }
    );
    if (result) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  }
};
