const express = require("express");
const router = express.Router();
const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login');


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