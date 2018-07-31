const UserController = require("../controllers/UsersController");
const SeederController = require("../controllers/SeederController");
const SummaryController = require("../controllers/SummaryController");

module.exports = (app) => {

    app.post('/api/signup', UserController.register);
    app.post('/api/login', UserController.login);
    app.post('/api/add-presiden', UserController.addPresiden);
    app.post('/api/add-parpol', UserController.addParpol);
    app.post('/api/voteAll-capres', UserController.voteAllCapres);
    app.post('/api/add-randomktp', SeederController.addRandomKtp);
    app.post('/api/add-province', UserController.addProvince);
    app.get('/api/get-all-presiden', UserController.getPresiden);
    app.get('/api/get-user', UserController.getUser);
    app.get('/api/get-summary-presiden', SummaryController.getSummaryPresiden);

}