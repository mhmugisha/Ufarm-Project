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

//AGRICULTURAL OFFICER Registration routes---------------------/
router.get('/aoregister', (req, res) => {
    res.render('aoregistration2')
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
          res.redirect('/aoregister2')
      })
  }catch(error){
      res.status(400).send('Sorry something went wrong');
      console.log(error)
  } 
});

module.exports = router;