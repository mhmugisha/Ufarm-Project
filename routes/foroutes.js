const express = require("express");
const router = express.Router();

//Route to display Farmerone list------------------
router.get("/folist", async (req, res) => {
  try {
      let farmerOnes = await Registration.find({ role: "farmerone" });
      res.render("folist", {farmerones:farmerOnes, currentUser:req.session.user});
  } catch (error) {
      res.status(400).send("Unable to find Farmer Ones in the Database");
  console.log(error);
  }
});

//FARMER ONE Registration-------------------------
// router.get('/foregister', (req, res) => {
//   res.render('foregistration')
// })

router.get('/foregister2', (req, res) => {
  res.render('foregistration2')
})


router.get('/fosdashboard', (req, res) => {
  res.render('fosdashboard')
})

//IMPORTING Model
const Registration = require('../models/Reg')

// router.post('/foregister', async(req, res) => {
// console.log(req.body);
// try{
//     const user = new Registration(req.body);
//     let uniqueExist = await Registration.findOne({uniqueid:req.body.uniqueid})
//     if(uniqueExist){
//       return res.status(400).send('This no is already taken')
//     }else{
//       await Registration.register(user, req.body.password, (error)=>{
//           if(error){
//               throw error
//           }
//           res.redirect('/aodashboardroute')
//       })
//     }
// }catch(error){
//     res.status(400).send('Sorry something went wrong');
//     console.log(error)
// } 
// });
//*********************************************** */
//foregister2 trying out
router.post('/foregister2', async(req, res) => {
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
  
//****************************************** */


// Farmer One Update Route
router.get("/farmerone/update/:id", async (req, res) => {
	try {
		const farmerone = await Registration.findOne({ _id: req.params.id });
		res.render("foupdate", {farmerones: farmerone });
	} catch (error) {
		res.status(400).send("Unable to update farmerone!");
	}
});

router.post("/farmerone/update", async (req, res) => {
	try {
		await Registration.findOneAndUpdate({ _id: req.query.id }, req.body);
		res.redirect("/folist");
	} catch (error) {
		res.status(400).send("Unable to update farmer one!");
	}
});


module.exports = router;