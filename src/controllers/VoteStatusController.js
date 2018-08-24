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
    
    const result = await VoteStatus.find({});
    let arr = [0, 2];
    if (result.length !== 0) {
      for (let index = 0; index < result.length; index++) {
        if (
          result[index].timeStart !== null &&
          result[index].timeEnd !== null
        ) {
          if (
            (result[3].status !== true && index === 1) ||
            (result[5].status !== true && index === 2)
          ) {
            var dateNow = moment();
            if (moment(dateNow).isBefore(result[index].timeStart) === false) {
              if (moment(dateNow).isAfter(result[index].timeEnd) === true) {
                await VoteStatus.findByIdAndUpdate(
                  { _id: result[index]._id },
                  { status: false }
                );
                if (index === 1) {
                  for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    await VoteStatus.findByIdAndUpdate(
                      { _id: result[element]._id },
                      { status: true }
                    );
                  }
                }
              } else {
                await VoteStatus.findByIdAndUpdate(
                  { _id: result[index]._id },
                  { status: true }
                );
                if (index === 1) {
                  for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    await VoteStatus.findByIdAndUpdate(
                      { _id: result[element]._id },
                      { status: false }
                    );
                  }
                }
              }
            }
          }
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
