const express = require("express");
const router = express.Router();

//Route to display Farmerone list------------------
router.get("/folist", async (req, res) => {
  try {
      let farmerOnes = await Registration.find({ role: "farmerone" });
      res.render("folist", {farmerone:farmerOnes});
  } catch (error) {
      res.status(400).send("Unable to find Farmer Ones in the Database");
  console.log(error);
  }
});

//FARMER ONE Registration-------------------------
router.get('/foregister', (req, res) => {
  res.render('foregistration')
})

router.get('/fosdashboard', (req, res) => {
  res.render('fosdashboard')
})

//IMPORTING Model
const Registration = require('../models/Reg')

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
          res.redirect('/aodashboardroute')
      })
    }
}catch(error){
    res.status(400).send('Sorry something went wrong');
    console.log(error)
} 
});

module.exports = router;