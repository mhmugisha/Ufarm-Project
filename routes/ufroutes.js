const express = require("express");
const router = express.Router();
const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login');



//IMPORTING Model
const Registration = require('../models/Reg');
const Pdtupload = require('../models/Produce')

// image upload
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
});

// instantiate variable upload to store multer functionality to upload image
var upload = multer({ storage: storage })

//Here you put code for upload routes

//Product update route
router.get("/pdtupdate", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	
	res.render("pdtupdate", {currentUser: req.session.user});
});

router.post("/pdtupdate", connectEnsureLogin.ensureLoggedIn(), upload.single("uploadimage"), async (req, res) => {
	console.log(req.body);
	try {
		const produce = new Pdtupload(req.body);
		produce.uploadimage = req.file.path;
		await produce.save();
		res.redirect("/pdtupdate");
	} catch (error) {
		res.status(400).send("Can't save this image");
		console.log(error);
	}
});


//URBAN FARMER ROUTES routes--------------/
//Register route
router.get('/ufregister', (req, res) => {
    res.render('ufregistration')
})
router.post('/ufregister', async(req, res) => {
  console.log(req.body);
  try{
      const user = new Registration(req.body);
      await Registration.register(user, req.body.password, (error)=>{
          if(error){
              throw error
          }
          res.redirect('/ufregister')
      })
  }catch(error){
      res.status(400).send('Sorry something went wrong');
      console.log(error)
  } 
});

module.exports = router;