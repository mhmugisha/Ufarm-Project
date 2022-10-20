const express = require("express");
const router = express.Router();
const multer = require('multer');

//IMPORTING Model
const Registration = require('../models/Reg')


//AGRICULTURAL OFFICER Registration routes---------------------/
router.get('/aoregister', (req, res) => {
    res.render('aoregistration')
})

router.post('/aoregister', async(req, res) => {
  console.log(req.body);
  try{
      const user = new Registration(req.body);
      await Registration.register(user, req.body.password, (error)=>{
          if(error){
              throw error
          }
          res.redirect('/aoregister')
      })
  }catch(error){
      res.status(400).send('Sorry something went wrong');
      console.log(error)
  } 
});

//Agric Officer Dashboard route
router.get("/aodashboard", (req, res) => {
	res.render("aodashboard"); //u will need an aodashboard pug file to render.
});

// // Farmer One list
// router.get("/folist", (req, res) => {
// 	res.render("AO/AO-fo-accounts");
// });
// // Farmer One Activities
// router.get("/FOactivities", (req, res) => {
// 	res.render("AO/AO-fo-activities");
// });
// // Ward Routes
// router.get("/addward", (req, res) => {
// 	res.render("AO/ward");
// });
// // Testing layout Page
// router.get("/layout", (req, res) => {
// 	res.render("AO/layout");
// });



module.exports = router;