const Presiden = require("../models/Presiden");
const Province = require("../models/Province");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
var _ = require('lodash');

function countPresidentProvince(input) {
  var arr = input,
    obj = {};
    // console.log(arr)
  for (var i = 0; i < arr.length; i++) {

    if (arr[i].isVotedIdCandidate !== null) {
      if (!obj[arr[i].isVotedIdCandidate.no_urut]) {
        obj[arr[i].isVotedIdCandidate.no_urut] = 1;
      } else if (obj[arr[i].isVotedIdCandidate.no_urut]) {
        // console.log(dataCalculated)
        obj[arr[i].isVotedIdCandidate.no_urut] += 1;
        // console.log(obj)
      }
    }
    // if (obj[arr[i].isVotedIdCandidate.no_urut]){
    //   obj[arr[i].isVotedIdCandidate.no_urut] += 0;
    // }
  }
  return obj;
}

function findNested(obj, key, value) {
  // Base case
  if (obj[key] === value) {
    return obj;
  } else {
    for (var i = 0, len = Object.keys(obj).length; i < len; i++) {
      if (typeof obj[i] == 'object') {
        var found = findNested(obj[i], key, value);
        if (found) {
          // If the object was found in the recursive call, bubble it up.
          return found;
        }
      }
    }
  }
}

function assign(obj, keyPath, value) {
  lastKeyIndex = keyPath.length - 1;
  for (var i = 0; i < lastKeyIndex; ++i) {
    key = keyPath[i];
    if (!(key in obj))
      obj[key] = {}
    obj = obj[key];
  }
  obj[keyPath[lastKeyIndex]] = value;
}


let findDeep = function (data, province) {
  return data.some(function (e) {
    if (e.province == province) return true;
    else if (e) return findDeep(e.items, province)
  })
}

module.exports = {
  async getSummaryPresiden(req, res, next) {

    /**
     * @constant getAllPresident 
     * Untuk president secara global
     */
    let getAllProvince = await Province.find({});
    let getAllPresident = await Presiden.find({});
    let reWriteResultPresidentGlobal = [];
    let totalSuaraGlobal = 0;
    let assembleProvince = [];
    let reWriteResultProvince = [];

    for (z = 0; z < getAllPresident.length; z++) {
      totalSuaraGlobal += getAllPresident[z].vote;
    }

    for (i = 0; i < getAllPresident.length; i++) {
      const hasilHitung = (getAllPresident[i].vote / totalSuaraGlobal) * 100;
      const resultGlobalCalculate = hasilHitung.toFixed(2);
      reWriteResultPresidentGlobal.push({
        nama_presiden: getAllPresident[i].nama_presiden,
        nama_wakil: getAllPresident[i].nama_wakil,
        img: getAllPresident[i].img,
        resultGlobalCalculate
      });
    }

    const getAllUsers = await User.find({}).populate({
      path: 'isVotedIdCandidate'
    }).populate({
      path: 'provinceId'
    })

    /**
     * @constant assembleProvinceDynamic
     * Perhitungan untuk seluruh provinsi
     * dengan Associative Array
     */

    // console.log(getAllUsers)


    var assembleProvinceDynamic = new Array();
    getAllProvince.map((val, i) => {
      assembleProvinceDynamic[val.province] = _.filter(getAllUsers, {
        provinceId: {
          province: val.province
        },
      })
    })

    getAllProvince.map((val, i) => {
      if (assembleProvinceDynamic[val.province][0] !== undefined) {
        // console.log(countPresidentProvince(assembleProvinceDynamic[val.province]))

        // let calculate = 




        // console.log(calculate)
       let countProvince = countPresidentProvince(assembleProvinceDynamic[val.province])
        
       let convertToArray = Object.entries(countProvince).map(([candidate, count]) => ({candidate,count}));
       console.log(countProvince)
       
       let tempCount = 0;
       let total = 0;
       let reWrite = [];
        for (let z = 0; z < convertToArray.length; z++) {
          tempCount += convertToArray[z].count        
        }

        for (let p = 0; p < getAllPresident.length; p++) {

          for (let t = 0; t < convertToArray.length; t++) {
            // console.log(convertToArray[t].candidate)
            if (convertToArray[t].candidate === getAllPresident[p].no_urut) {          
              convertToArray[t].candidate = getAllPresident[p].nama_presiden + getAllPresident[p].nama_wakil ;
            }
          }
        }

        for (let q=0; q < convertToArray.length; q++){
            // console.log( convertToArray[z].candidate)
          reWrite.push({
            candidate: convertToArray[q].candidate,
            count: (convertToArray[q].count / tempCount) * 100
          })
        }

              

        reWriteResultProvince.push({
          province: assembleProvinceDynamic[val.province][0].provinceId.province,
          candidate: getAllPresident,
          record: assembleProvinceDynamic[val.province],
          resultCount: reWrite
        })
      }
    })

    let mergeAll = {
      provincesVoteResult: reWriteResultProvince,
      globalVoteResult: reWriteResultPresidentGlobal
    }

    res.json(mergeAll)
  }
};