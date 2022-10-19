const express = require("express");
const router = express.Router();


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





module.exports = router;