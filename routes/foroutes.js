const express = require("express");
const router = express.Router();

//FARMER ONE REGISTRATION ROUTES-------------------------------------------------/


//Route to display Farmerone list
router.get("/folist", async (req, res) => {
  try {
      let farmerOnes = await Registration.find({ role: "Farmer One" });
      res.render("folist", {farmerone:farmerOnes});
  } catch (error) {
      res.status(400).send("Unable to find Farmer Ones in the Database");
  console.log(error);
  }
});



//Farmerone dashboard route


// Approving produce routes
router.get('/produce/approve/:id', async (req, res) =>{
	try {
		const updateProduct = await Pdtupload.findOne({_id:req.params.id});
		res.render('approve',{product:updateProduct});
		console.log('Product approved', updateProduct);
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

//FARMER ONE Registration---------------------/
router.get('/foregister', (req, res) => {
  res.render('foregistration')
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
          res.redirect('/foregister')
      })
    }
}catch(error){
    res.status(400).send('Sorry something went wrong');
    console.log(error)
} 
});

module.exports = router;