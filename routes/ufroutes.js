const express = require("express");
const router = express.Router();
const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login');


//URBAN FARMER ROUTES routes--------------/




//Dashboard route
router.get("/ufdashboard", (req, res) => {
	res.render("ufdashboard");
});

// Changing availability route
router.get('/produce/available/:id', async (req, res) =>{
	try {
		const sellProduct = await Pdtupload.findOne({_id:req.params.id});
		res.render('availability',{item:updateProduct});
		console.log('Product approved', sellProduct);
	} catch (error) {
		res.status(400).send('Unable to update produce');
	}
});

router.post("/produce/approve", async (req, res) => {
	try {
		await Pdtupload.findOneAndUpdate({_id:req.query.id},req.body);
		res.redirect("/producelist");
	} catch (error) {
		res.status(400).send("Unable to update produce");
	}
});


//Register route
router.get('/ufregister', (req, res) => {
    res.render('ufregistration')
})

//Import the user model--------------/
const Registration = require('../models/Reg');

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