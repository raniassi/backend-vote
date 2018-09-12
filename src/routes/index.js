const UserController = require("../controllers/UsersController");
const SeederController = require("../controllers/SeederController");
const SummaryController = require("../controllers/SummaryController");
const VoteStatusController = require("../controllers/VoteStatusController");
const multer = require("multer")

// configure storage
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        /*
          Files will be saved in the 'uploads' directory. Make
          sure this directory already exists!
        */

        // console.log(req.files)
        cb(null, './public/assets-img');
      },
      filename: (req, file, cb) => {  
        /*
          uuidv4() will generate a random ID that we'll use for the
          new filename. We use path.extname() to get
          the extension from the original file name and add that to the new
          generated ID. These combined will create the file name used
          to save the file on the server and will be available as
          req.file.pathname in the router handler.
        */
      //  console.log(req.file)
        const newFilename = file.originalname.toLocaleLowerCase();
        cb(null, newFilename);
      },
    });
    // create the multer instance that will be used to upload/save the file

const upload = multer({ storage });
module.exports = (app) => { 

    app.post('/api/signup', UserController.register);
    app.post('/api/login-admin', UserController.loginAdmin);
    app.post('/api/login', UserController.login);
    app.post('/api/add-presiden', UserController.addPresiden);
    app.post('/api/add-parpol', UserController.addParpol);
    app.post('/api/voteAll-capres', UserController.voteAllCapres);
    app.post('/api/add-province', UserController.addProvince);
    app.post('/api/add-admin', UserController.addAdmin);
    app.post('/api/upload-photo', upload.single('photos'), UserController.uploadPhoto);
    app.post('/api/get-ktp', UserController.getKtp);
    app.post('/api/add-randomktp', SeederController.addRandomKtp);
    app.post('/api/add-vote-status',VoteStatusController.addStatus);
    app.post('/api/update-time-status',VoteStatusController.postStatusUpdate);
    app.post('/api/update-status',VoteStatusController.updateStatus);
    app.post('/api/update-presiden',UserController.updatePresiden);
    app.post('/api/delete-parpol', UserController.deleteParpol)
    app.post('/api/delete-presiden', UserController.deletePresiden)
 
    app.get('/api/get-all-presiden', UserController.getPresiden);
    app.get('/api/get-all-parpol', UserController.getParpol);
    app.get('/api/get-user', UserController.getUser);
    app.get('/api/get-all-users', UserController.getAllUsers);
    app.get('/api/get-all-ktp', UserController.getAllKtp);
    app.get('/api/get-users', UserController.getUsers);
    app.get('/api/get-presiden', UserController.getSinglePresiden);
    app.get('/api/get-status-vote',VoteStatusController.getStatus);
    app.get('/api/get-summary-presiden', SummaryController.getSummaryPresiden);

    
}