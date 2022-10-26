const express = require("express");
const router = express.Router();
const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login')


//Agric Officer Dashboard route
// router.get("/aodashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
// 	req.session.user=req.user;
//     if(req.user.role=='agricofficer'){
//         res.render('aodashboard')
//     }else{
//         res.send('only for ao')
//     }
// });

//AO Dashboard route------------------
router.get('/aodashboardroute', (req,res) =>{
    res.render('aodashboard');
})

//Farmer One Dashboard route-----------
router.get('/fodashboardroute', (req,res) =>{
        res.render('fodashboard');
})

//Urban Farmer dashboard route----------
router.get('/ufdashboardroute', (req,res) =>{
    res.render('ufdashboard');
})





//AGRICULTURAL OFFICER Registration routes---------------------/
router.get('/aoregister', (req, res) => {
    res.render('aoregistration')
});

//IMPORTING Model - should be last section in this file.
const Registration = require('../models/Reg')

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