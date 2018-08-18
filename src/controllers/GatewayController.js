const Nexmo = require("nexmo");
const nexmo = new Nexmo({
  apiKey: e630389a,
  apiSecret: SKfAMDiGewnO0pEa
});

app.post('/api/send', (req, res) => {
  // Send SMS
  nexmo.message.sendSms(
    config.number,
    req.body.toNumber,
    req.body.message,
    { type: "unicode" },
    (err, responseData) => {
      if (responseData) {
        console.log(responseData);
      }
    }
  );
});
