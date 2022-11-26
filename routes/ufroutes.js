const express = require("express");
const router = express.Router();
const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login');


//Urban Farmer Registration Route---------------------/
router.get('/ufregister', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.render('ufregistration', {currentUser:req.session.user})
})


//Import the user model---------------------------------/
const Registration = require('../models/Reg');


// Urban Farmer registration post route-------------------/
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

//Route to display Urban Farmer list-----------------------/
router.get("/uflist", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    req.session.user = req.user
    try {
        let urbanFarmers = await Registration.find({role: "urbanfarmer"});
        res.render("uflist", {urbanFarmers:urbanFarmers, currentUser:req.session.user});
    } catch (error) {
        res.status(400).send("Unable to find Urban Farmers in the Database");
    console.log(error);
    }
  });


// Updating urban farmers ---------------------------------/
router.get("/urbanFarmer/update/:id", async (req, res) => {
	try {
		const urbanFarmer = await Registration.findOne({ _id: req.params.id });
		res.render("ufupdate", {urbanFarmers: urbanFarmer});
	} catch (error) {
		res.status(400).send("Unable to update urban farmer");
	}
});

router.post("/urbanFarmer/update", async (req, res) => {
	try {
		await Registration.findOneAndUpdate({ _id: req.query.id }, req.body);
		res.redirect("/uflist");
	} catch (error) {
		res.status(400).send("Unable to update urban farmer");
	}
});


module.exports = router;