const UserController = require("../controllers/UsersController");
<<<<<<< HEAD
const SeederController = require("../controllers/SeederController");
const SummaryController = require("../controllers/SummaryController");
=======
>>>>>>> f14a5d17a64c370cda223b0510c46dff4a766349

module.exports = (app) => {

    app.post('/api/signup', UserController.register);
    app.post('/api/login', UserController.login);
<<<<<<< HEAD
    app.post('/api/add-presiden', UserController.addPresiden);
    app.post('/api/add-parpol', UserController.addParpol);
    app.post('/api/voteAll-capres', UserController.voteAllCapres);
    app.post('/api/add-randomktp', SeederController.addRandomKtp);
    app.post('/api/add-province', UserController.addProvince);
    app.get('/api/get-all-presiden', UserController.getPresiden);
    app.get('/api/get-user', UserController.getUser);
    app.get('/api/get-summary-presiden', SummaryController.getSummaryPresiden);
=======
>>>>>>> f14a5d17a64c370cda223b0510c46dff4a766349

}