const Ktp = require("../models/Ktp");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const faker = require("faker");
faker.locale = "id_ID";

module.exports = {
  async addRandomKtp(req, res, next) {
    var kkID = "";
    var provinsi = "";

    var RtRwResult = "";
    var pad = "0000";
    var padRtRw = "000";
    var a = 0;
    var randomA = 2;
    var countA = 1;
    var randomDateKK = faker.date.between("1950-01-01", "2006-01-01");
    var a1 = 0;
    var randomA1 = 2;
    var countA1 = 1;
    var randomDateKK11 = faker.date.between("1950-01-01", "2006-01-01");
    var a2 = 0;
    var randomA2 = 2;
    var countA2 = 1;
    var randomDateKK12 = faker.date.between("1950-01-01", "2006-01-01");
    var a3 = 0;
    var randomA3 = 2;
    var countA3 = 1;
    var randomDateKK13 = faker.date.between("1950-01-01", "2006-01-01");
    var a4 = 0;
    var randomA4 = 2;
    var countA4 = 1;
    var randomDateKK14 = faker.date.between("1950-01-01", "2006-01-01");
    var a5 = 0;
    var randomA5 = 2;
    var countA5 = 1;
    var randomDateKK15 = faker.date.between("1950-01-01", "2006-01-01");
    var a6 = 0;
    var randomA6 = 2;
    var countA6 = 1;
    var randomDateKK16 = faker.date.between("1950-01-01", "2006-01-01");
    var a7 = 0;
    var randomA7 = 2;
    var countA7 = 1;
    var randomDateKK17 = faker.date.between("1950-01-01", "2006-01-01");
    var a8 = 0;
    var randomA8 = 2;
    var countA8 = 1;
    var randomDateKK18 = faker.date.between("1950-01-01", "2006-01-01");
    var a9 = 0;
    var randomA9 = 2;
    var countA9 = 1;
    var randomDateKK19 = faker.date.between("1950-01-01", "2006-01-01");
    var a10 = 0;
    var randomA10 = 2;
    var countA10 = 1;
    var randomDateKK20 = faker.date.between("1950-01-01", "2006-01-01");
    var a11 = 0;
    var randomA11 = 2;
    var countA11 = 1;
    var randomDateKK21 = faker.date.between("1950-01-01", "2006-01-01");
    var a12 = 0;
    var randomA12 = 2;
    var countA12 = 1;
    var randomDateKK22 = faker.date.between("1950-01-01", "2006-01-01");
    var a13 = 0;
    var randomA13 = 2;
    var countA13 = 1;
    var randomDateKK23 = faker.date.between("1950-01-01", "2006-01-01");
    var a14 = 0;
    var randomA14 = 2;
    var countA14 = 1;
    var randomDateKK24 = faker.date.between("1950-01-01", "2006-01-01");
    var a15 = 0;
    var randomA15 = 2;
    var countA15 = 1;
    var randomDateKK25 = faker.date.between("1950-01-01", "2006-01-01");
    var a16 = 0;
    var randomA16 = 2;
    var countA16 = 1;
    var randomDateKK26 = faker.date.between("1950-01-01", "2006-01-01");
    var a17 = 0;
    var randomA17 = 2;
    var countA17 = 1;
    var randomDateKK27 = faker.date.between("1950-01-01", "2006-01-01");
    var a18 = 0;
    var randomA18 = 2;
    var countA18 = 1;
    var randomDateKK28 = faker.date.between("1950-01-01", "2006-01-01");
    var a19 = 0;
    var randomA19 = 2;
    var countA19 = 1;
    var randomDateKK29 = faker.date.between("1950-01-01", "2006-01-01");
    var a20 = 0;
    var randomA20 = 2;
    var countA20 = 1;
    var randomDateKK30 = faker.date.between("1950-01-01", "2006-01-01");
    var a21 = 0;
    var randomA21 = 2;
    var countA21 = 1;
    var randomDateKK31 = faker.date.between("1950-01-01", "2006-01-01");
    var a22 = 0;
    var randomA22 = 2;
    var countA22 = 1;
    var randomDateKK32 = faker.date.between("1950-01-01", "2006-01-01");
    var a23 = 0;
    var randomA23 = 2;
    var countA23 = 1;
    var randomDateKK33 = faker.date.between("1950-01-01", "2006-01-01");
    var a24 = 0;
    var randomA24 = 2;
    var countA24 = 1;
    var randomDateKK34 = faker.date.between("1950-01-01", "2006-01-01");
    var a25 = 0;
    var randomA25 = 2;
    var countA25 = 1;
    var randomDateKK35 = faker.date.between("1950-01-01", "2006-01-01");
    var a26 = 0;
    var randomA26 = 2;
    var countA26 = 1;
    var randomDateKK36 = faker.date.between("1950-01-01", "2006-01-01");
    var a27 = 0;
    var randomA27 = 2;
    var countA27 = 1;
    var randomDateKK37 = faker.date.between("1950-01-01", "2006-01-01");
    var a28 = 0;
    var randomA28 = 2;
    var countA28 = 1;
    var randomDateKK38 = faker.date.between("1950-01-01", "2006-01-01");
    var a29 = 0;
    var randomA29 = 2;
    var countA29 = 1;
    var randomDateKK39 = faker.date.between("1950-01-01", "2006-01-01");
    var a30 = 0;
    var randomA30 = 2;
    var countA30 = 1;
    var randomDateKK40 = faker.date.between("1950-01-01", "2006-01-01");
    var a31 = 0;
    var randomA31 = 2;
    var countA31 = 1;
    var randomDateKK41 = faker.date.between("1950-01-01", "2006-01-01");
    var a32 = 0;
    var randomA32 = 2;
    var countA32 = 1;
    var randomDateKK42 = faker.date.between("1950-01-01", "2006-01-01");
    var a33 = 0;
    var randomA33 = 2;
    var countA33 = 1;
    var randomDateKK43 = faker.date.between("1950-01-01", "2006-01-01");

    for (let index = 0; index < 1000; index++) {
      var randomBirthday = faker.date.between("1939-01-01", "2002-01-01");
      var Day = randomBirthday.getDate();
      var Month = randomBirthday.getMonth();
      var Year = randomBirthday.getFullYear();
      Month = Month + 1;
      if (Day.toString().length === 1) {
        var Day = "0" + Day;
      }
      if (Month.toString().length === 1) {
        var Month = "0" + Month;
      }
      var ktpNumber = index + 1;
      var jenisKelamin = faker.random.arrayElement(["Laki-Laki", "Perempuan"]);
      var ans =
        pad.substring(0, pad.toString().length - ktpNumber.toString().length) +
        ktpNumber.toString();
      var randomProvinsi = faker.random.arrayElement([
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "21",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "51",
        "52",
        "53",
        "61",
        "62",
        "63",
        "64",
        "65",
        "71",
        "72",
        "73",
        "74",
        "75",
        "76",
        "81",
        "82",
        "91",
        "92"
      ]);
      /*--------------------------ACEH-----------------------------*/

      if (randomProvinsi === "11") {
        provinsi = "Aceh";
        if (a !== randomA) {
          if (a === 0) {
            var dateKKa = randomDateKK;
            randomA = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkAceh =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkAceh;
        } else if (a === randomA) {
          a = -1;
          randomA = 2;
          countA++;
        }
        a++;
        /*--------------------------SUMATERA UTARA-----------------------------*/
      } else if (randomProvinsi === "12") {
        provinsi = "Sumatera Utara";
        if (a1 !== randomA1) {
          if (a1 === 0) {
            var dateKKa = randomDateKK11;
            randomA1 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA1.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkSumateraUtara =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkSumateraUtara;
        } else if (a1 === randomA1) {
          a1 = -1;
          randomA1 = 2;
          countA1++;
        }
        a1++;
        /*--------------------------SUMATERA BARAT-----------------------------*/
      } else if (randomProvinsi === "13") {
        provinsi = "Sumatera Barat";
        if (a2 !== randomA2) {
          if (a2 === 0) {
            var dateKKa = randomDateKK12;
            randomA2 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA2.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkSumateraBarat =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkSumateraBarat;
        } else if (a2 === randomA2) {
          a2 = -1;
          randomA2 = 2;
          countA2++;
        }
        a2++;
        /*--------------------------RIAU-----------------------------*/
      } else if (randomProvinsi === "14") {
        provinsi = "Riau";
        if (a3 !== randomA3) {
          if (a3 === 0) {
            var dateKKa = randomDateKK13;
            randomA3 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA3.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkRiau =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkRiau;
        } else if (a3 === randomA3) {
          a3 = -1;
          randomA3 = 2;
          countA3++;
        }
        a3++;
        /*--------------------------JAMBI-----------------------------*/
      } else if (randomProvinsi === "15") {
        provinsi = "Jambi";
        if (a4 !== randomA4) {
          if (a4 === 0) {
            var dateKKa = randomDateKK14;
            randomA4 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA4.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkJambi =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkJambi;
        } else if (a4 === randomA4) {
          a4 = -1;
          randomA4 = 2;
          countA4++;
        }
        a4++;
        /*--------------------------SUMATERA SELATAN-----------------------------*/
      } else if (randomProvinsi === "16") {
        provinsi = "Sumatera Selatan";
        if (a5 !== randomA5) {
          if (a5 === 0) {
            var dateKKa = randomDateKK15;
            randomA5 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA5.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkSumateraSelatan =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkSumateraSelatan;
        } else if (a5 === randomA5) {
          a5 = -1;
          randomA5 = 2;
          countA5++;
        }
        a5++;
        /*--------------------------BENGKULU-----------------------------*/
      } else if (randomProvinsi === "17") {
        provinsi = "Bengkulu";
        if (a6 !== randomA6) {
          if (a6 === 0) {
            var dateKKa = randomDateKK16;
            randomA6 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA6.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkBengkulu =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkBengkulu;
        } else if (a6 === randomA6) {
          a6 = -1;
          randomA6 = 2;
          countA6++;
        }
        a6++;
        /*--------------------------LAMPUNG-----------------------------*/
      } else if (randomProvinsi === "18") {
        provinsi = "Lampung";
        if (a7 !== randomA7) {
          if (a7 === 0) {
            var dateKKa = randomDateKK17;
            randomA7 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA7.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkLampung =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkLampung;
        } else if (a7 === randomA7) {
          a7 = -1;
          randomA7 = 2;
          countA7++;
        }
        a7++;
        /*--------------------------BANGKA BELITUNG-----------------------------*/
      } else if (randomProvinsi === "19") {
        provinsi = "Kepulauan Bangka Belitung";
        if (a8 !== randomA8) {
          if (a8 === 0) {
            var dateKKa = randomDateKK18;
            randomA8 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA8.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkBaBel =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkBaBel;
        } else if (a8 === randomA8) {
          a8 = -1;
          randomA8 = 2;
          countA8++;
        }
        a8++;
        /*--------------------------KEPULAUAN RIAU-----------------------------*/
      } else if (randomProvinsi === "21") {
        provinsi = "Kepulauan Riau";
        if (a9 !== randomA9) {
          if (a9 === 0) {
            var dateKKa = randomDateKK19;
            randomA9 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA9.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkKepRiau =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkKepRiau;
        } else if (a9 === randomA9) {
          a9 = -1;
          randomA9 = 2;
          countA9++;
        }
        a9++;
        /*--------------------------DKI JAKARTA-----------------------------*/
      } else if (randomProvinsi === "31") {
        provinsi = "DKI Jakarta";
        if (a10 !== randomA10) {
          if (a10 === 0) {
            var dateKKa = randomDateKK20;
            randomA10 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA10.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkDki =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkDki;
        } else if (a10 === randomA10) {
          a10 = -1;
          randomA10 = 2;
          countA10++;
        }
        a10++;
        /*--------------------------JAWA BARAT-----------------------------*/
      } else if (randomProvinsi === "32") {
        provinsi = "Jawa Barat";
        if (a11 !== randomA11) {
          if (a11 === 0) {
            var dateKKa = randomDateKK21;
            randomA11 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA11.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkJaBar =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkJaBar;
        } else if (a11 === randomA11) {
          a11 = -1;
          randomA11 = 2;
          countA11++;
        }
        a11++;
        /*--------------------------JAWA TENGAH-----------------------------*/
      } else if (randomProvinsi === "33") {
        provinsi = "Jawa Tengah";
        if (a12 !== randomA12) {
          if (a12 === 0) {
            var dateKKa = randomDateKK22;
            randomA12 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA12.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkJaTeng =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkJaTeng;
        } else if (a12 === randomA12) {
          a12 = -1;
          randomA12 = 2;
          countA12++;
        }
        a12++;
        /*--------------------------YOGYAKARTA-----------------------------*/
      } else if (randomProvinsi === "34") {
        provinsi = "Daerah Istimewa Yogyakarta";
        if (a13 !== randomA13) {
          if (a13 === 0) {
            var dateKKa = randomDateKK23;
            randomA13 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA13.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkDiy =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkDiy;
        } else if (a13 === randomA13) {
          a13 = -1;
          randomA13 = 2;
          countA13++;
        }
        a13++;
        /*--------------------------JAWA TIMUR-----------------------------*/
      } else if (randomProvinsi === "35") {
        provinsi = "Jawa Timur";
        if (a14 !== randomA14) {
          if (a14 === 0) {
            var dateKKa = randomDateKK24;
            randomA14 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA14.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkJaTim =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkJaTim;
        } else if (a14 === randomA14) {
          a14 = -1;
          randomA14 = 2;
          countA14++;
        }
        a14++;
        /*--------------------------BANTEN-----------------------------*/
      } else if (randomProvinsi === "36") {
        provinsi = "Banten";
        if (a15 !== randomA15) {
          if (a15 === 0) {
            var dateKKa = randomDateKK25;
            randomA15 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA15.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkBanten =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkBanten;
        } else if (a15 === randomA15) {
          a15 = -1;
          randomA15 = 2;
          countA15++;
        }
        a15++;
        /*--------------------------BALI-----------------------------*/
      } else if (randomProvinsi === "51") {
        provinsi = "Bali";
        if (a16 !== randomA16) {
          if (a16 === 0) {
            var dateKKa = randomDateKK26;
            randomA16 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA16.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkBali =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkBali;
        } else if (a16 === randomA16) {
          a16 = -1;
          randomA16 = 2;
          countA16++;
        }
        a16++;
        /*--------------------------NUSA TENGGARA BARAT-----------------------------*/
      } else if (randomProvinsi === "52") {
        provinsi = "Nusa Tenggara Barat";
        if (a17 !== randomA17) {
          if (a17 === 0) {
            var dateKKa = randomDateKK27;
            randomA17 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA17.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkNtb =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkNtb;
        } else if (a17 === randomA17) {
          a17 = -1;
          randomA17 = 2;
          countA17++;
        }
        a17++;
        /*--------------------------NUSA TENGGARA TIMUR-----------------------------*/
      } else if (randomProvinsi === "53") {
        provinsi = "Nusa Tenggara Timur";
        if (a18 !== randomA18) {
          if (a18 === 0) {
            var dateKKa = randomDateKK28;
            randomA18 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA18.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkNtt =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkNtt;
        } else if (a18 === randomA18) {
          a18 = -1;
          randomA18 = 2;
          countA18++;
        }
        a18++;
        /*--------------------------KALIMANTAN BARAT-----------------------------*/
      } else if (randomProvinsi === "61") {
        provinsi = "Kalimantan Barat";
        if (a19 !== randomA19) {
          if (a19 === 0) {
            var dateKKa = randomDateKK29;
            randomA19 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA19.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkKalBar =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkKalBar;
        } else if (a19 === randomA19) {
          a19 = -1;
          randomA19 = 2;
          countA19++;
        }
        a19++;
        /*--------------------------KALIMANTAN TENGAH-----------------------------*/
      } else if (randomProvinsi === "62") {
        provinsi = "Kalimantan Tengah";
        if (a20 !== randomA20) {
          if (a20 === 0) {
            var dateKKa = randomDateKK30;
            randomA20 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA20.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkKalTeng =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkKalTeng;
        } else if (a20 === randomA20) {
          a20 = -1;
          randomA20 = 2;
          countA20++;
        }
        a20++;
        /*--------------------------KALIMANTAN SELATAN-----------------------------*/
      } else if (randomProvinsi === "63") {
        provinsi = "Kalimantan Selatan";
        if (a21 !== randomA21) {
          if (a21 === 0) {
            var dateKKa = randomDateKK31;
            randomA21 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA21.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkKalSel =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkKalSel;
        } else if (a21 === randomA21) {
          a21 = -1;
          randomA21 = 2;
          countA21++;
        }
        a21++;
        /*--------------------------KALIMANTAN TIMUR-----------------------------*/
      } else if (randomProvinsi === "64") {
        provinsi = "Kalimantan Timur";
        if (a22 !== randomA22) {
          if (a22 === 0) {
            var dateKKa = randomDateKK32;
            randomA22 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA22.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkKalTim =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkKalTim;
        } else if (a22 === randomA22) {
          a22 = -1;
          randomA22 = 2;
          countA22++;
        }
        a22++;
        /*--------------------------KALIMANTAN UTARA-----------------------------*/
      } else if (randomProvinsi === "65") {
        provinsi = "Kalimantan Utara";
        if (a23 !== randomA23) {
          if (a23 === 0) {
            var dateKKa = randomDateKK33;
            randomA23 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA23.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkKalUt =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkKalUt;
        } else if (a23 === randomA23) {
          a23 = -1;
          randomA23 = 2;
          countA23++;
        }
        a23++;
        /*--------------------------SULAWESI UTARA-----------------------------*/
      } else if (randomProvinsi === "71") {
        provinsi = "Sulawesi Utara";
        if (a24 !== randomA24) {
          if (a24 === 0) {
            var dateKKa = randomDateKK34;
            randomA24 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA24.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkSulUt =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkSulUt;
        } else if (a24 === randomA24) {
          a24 = -1;
          randomA24 = 2;
          countA24++;
        }
        a24++;
        /*--------------------------SULAWESI TENGAH-----------------------------*/
      } else if (randomProvinsi === "72") {
        provinsi = "Sulawesi Tengah";
        if (a25 !== randomA25) {
          if (a25 === 0) {
            var dateKKa = randomDateKK35;
            randomA25 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA25.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkSulTeng =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkSulTeng;
        } else if (a25 === randomA25) {
          a25 = -1;
          randomA25 = 2;
          countA25++;
        }
        a25++;
        /*--------------------------SULAWESI SELATAN-----------------------------*/
      } else if (randomProvinsi === "73") {
        provinsi = "Sulawesi Selatan";
        if (a26 !== randomA26) {
          if (a26 === 0) {
            var dateKKa = randomDateKK36;
            randomA26 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA26.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkSulSel =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkSulSel;
        } else if (a26 === randomA26) {
          a26 = -1;
          randomA26 = 2;
          countA26++;
        }
        a26++;
        /*--------------------------SULAWESI TENGGARA-----------------------------*/
      } else if (randomProvinsi === "74") {
        provinsi = "Sulawesi Tenggara";
        if (a27 !== randomA27) {
          if (a27 === 0) {
            var dateKKa = randomDateKK37;
            randomA27 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA27.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkSulTenggara =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkSulTenggara;
        } else if (a27 === randomA27) {
          a27 = -1;
          randomA27 = 2;
          countA27++;
        }
        a27++;
        /*--------------------------GORONTALO-----------------------------*/
      } else if (randomProvinsi === "75") {
        provinsi = "Gorontalo";
        if (a28 !== randomA28) {
          if (a28 === 0) {
            var dateKKa = randomDateKK38;
            randomA28 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA28.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkGoron =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkGoron;
        } else if (a28 === randomA28) {
          a28 = -1;
          randomA28 = 2;
          countA28++;
        }
        a28++;
        /*--------------------------SULAWESI BARAT-----------------------------*/
      } else if (randomProvinsi === "76") {
        provinsi = "Sulawesi Barat";
        if (a29 !== randomA29) {
          if (a29 === 0) {
            var dateKKa = randomDateKK39;
            randomA29 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA29.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkSulBar =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkSulBar;
        } else if (a29 === randomA29) {
          a29 = -1;
          randomA29 = 2;
          countA29++;
        }
        a29++;
        /*--------------------------MALUKU-----------------------------*/
      } else if (randomProvinsi === "81") {
        provinsi = "Maluku";
        if (a30 !== randomA30) {
          if (a30 === 0) {
            var dateKKa = randomDateKK40;
            randomA30 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA30.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkMaluku =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkMaluku;
        } else if (a30 === randomA30) {
          a30 = -1;
          randomA30 = 2;
          countA30++;
        }
        a30++;
        /*--------------------------MALUKU UTARA-----------------------------*/
      } else if (randomProvinsi === "82") {
        provinsi = "Maluku Utara";
        if (a31 !== randomA31) {
          if (a31 === 0) {
            var dateKKa = randomDateKK41;
            randomA31 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA31.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkMalUt =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkMalUt;
        } else if (a31 === randomA31) {
          a31 = -1;
          randomA31 = 2;
          countA31++;
        }
        a31++;
        /*--------------------------PAPUA-----------------------------*/
      } else if (randomProvinsi === "91") {
        provinsi = "Papua";
        if (a32 !== randomA32) {
          if (a32 === 0) {
            var dateKKa = randomDateKK42;
            randomA32 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA32.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkPapua =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkPapua;
        } else if (a32 === randomA32) {
          a32 = -1;
          randomA32 = 2;
          countA32++;
        }
        a32++;
        /*--------------------------PAPUA BARAT-----------------------------*/
      } else if (randomProvinsi === "92") {
        provinsi = "Papua Barat";
        if (a33 !== randomA33) {
          if (a33 === 0) {
            var dateKKa = randomDateKK43;
            randomA33 = faker.random.number({ min: 2, max: 4 });
            var randomRtA1 = faker.random.number({ min: 1, max: 20 });
            var randomRwA1 = faker.random.number({ min: 1, max: 20 });
          }
          var randomkabKac = faker.random.number({ min: 1111, max: 9999 });
          var ans1 =
            pad.substring(0, pad.toString().length - countA.toString().length) +
            countA33.toString();
          var Day1 = dateKKa.getDate();
          var Month1 = dateKKa.getMonth();
          var Year1 = dateKKa.getFullYear();
          Month1 = Month1 + 1;
          if (Day1.toString().length === 1) {
            var Day1 = "0" + Day1;
          }
          if (Month1.toString().length === 1) {
            var Month1 = "0" + Month1;
          }
          var kkPaBar =
            randomProvinsi +
            randomkabKac +
            Day1 +
            Month1 +
            Year1.toString().substring(2, 4) +
            ans1;
          var ansRtA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRtA1.toString().length
            ) + randomRtA1.toString();
          var ansRwA1 =
            padRtRw.substring(
              0,
              padRtRw.toString().length - randomRwA1.toString().length
            ) + randomRwA1.toString();
          RtRwResult = ansRtA1 + "/" + ansRwA1;
          kkID = kkPaBar;
        } else if (a33 === randomA33) {
          a33 = -1;
          randomA33 = 2;
          countA33++;
        }
        a33++;
        console.log(a33);
      }

      console.log(" provinsi ", provinsi);

      const KtpSchema = await new Ktp({
        nama: faker.name.findName(),
        nik:
          randomProvinsi +
          randomkabKac +
          Day +
          Month +
          Year.toString().substring(2, 4) +
          ans,
        kkId: kkID,
        provinsi: provinsi,
        ttl: faker.address.city() + " ,  " + Day + "-" + Month + "-" + Year,
        jk: jenisKelamin,
        goldar: faker.random.arrayElement(["A", "AB", "B", "O"]),
        alamat: faker.address.streetAddress(),
        rtrw: RtRwResult,
        keldes: faker.address.county({}),
        kecamatan: faker.address.state({}),
        kabkot: faker.address.city({}),
        agama: faker.random.arrayElement([
          "Islam",
          "Kristen Protestan",
          "Katolik",
          "Hindu",
          "Buddha",
          "Kong Hu Cu"
        ]),
        status: faker.random.arrayElement(["KAWIN", "BELUM KAWIN"]),
        pekerjaan: faker.name.jobTitle(),
        kewarganegaraan: "WNI",
        foto: faker.image.avatar()
      }).save();
    }
    res.sendStatus(200);
  }
};
