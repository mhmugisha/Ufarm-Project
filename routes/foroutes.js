const express = require("express");
const router = express.Router();

//IMPORTING Model
const Registration = require('../models/Reg')



//FARMER ONE REGISTRATION ROUTES-------------------------------------------------/
router.get('/foregister', (req, res) => {
    res.render('foregistration')
})

router.post('/foregister', async(req, res) => {
  console.log(req.body);
  try{
      const user = new Registration(req.body);
      let uniqueExist = await Registration.findOne({uniqueid:req.body.uniqueid})
      if(uniqueExist){
        return res.status(400).send('This no is already taken')
      }else{
        await Registration.register(user, req.body.password, (error)=>{
            if(error){
                throw error
            }
            res.redirect('/login')
        })
      }
  }catch(error){
      res.status(400).send('Sorry something went wrong');
      console.log(error)
  } 
});






module.exports = router;