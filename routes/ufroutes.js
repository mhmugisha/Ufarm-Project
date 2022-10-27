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

//---------------------------------------------------
//Register/get route for Masajja A Urban Farmer
router.get('/ufregisterA', (req, res) => {
    res.render('ufregistrationA')
})

//Register/get route for Masajja B Urban Farmer
router.get('/ufregisterB', (req, res) => {
    res.render('ufregistrationB')
})

//Register/get route for Masajja C Urban Farmer
router.get('/ufregisterC', (req, res) => {
    res.render('ufregistrationC')
})

//Register/get route for Masajja D Urban Farmer
router.get('/ufregisterD', (req, res) => {
    res.render('ufregistrationD')
})
//---------------------------------------------------

//Import the user model--------------/
const Registration = require('../models/Reg');

//--------------------------------------------------
//Post route for Masajja A Urban Farmer
router.post('/ufregisterA', async(req, res) => {
  console.log(req.body);
  try{
      const user = new Registration(req.body);
      await Registration.register(user, req.body.password, (error)=>{
          if(error){
              throw error
          }
          res.redirect('/ufregisterA')
      })
  }catch(error){
      res.status(400).send('Sorry something went wrong');
      console.log(error)
  } 
});

//Post route for Masajja B Urban Farmer
router.post('/ufregisterB', async(req, res) => {
    console.log(req.body);
    try{
        const user = new Registration(req.body);
        await Registration.register(user, req.body.password, (error)=>{
            if(error){
                throw error
            }
            res.redirect('/ufregisterB')
        })
    }catch(error){
        res.status(400).send('Sorry something went wrong');
        console.log(error)
    } 
  });

  //Post route for Masajja C Urban Farmer
router.post('/ufregisterC', async(req, res) => {
    console.log(req.body);
    try{
        const user = new Registration(req.body);
        await Registration.register(user, req.body.password, (error)=>{
            if(error){
                throw error
            }
            res.redirect('/ufregisterC')
        })
    }catch(error){
        res.status(400).send('Sorry something went wrong');
        console.log(error)
    } 
  });

  //Post route for Masajja D Urban Farmer
router.post('/ufregisterD', async(req, res) => {
    console.log(req.body);
    try{
        const user = new Registration(req.body);
        await Registration.register(user, req.body.password, (error)=>{
            if(error){
                throw error
            }
            res.redirect('/ufregisterD')
        })
    }catch(error){
        res.status(400).send('Sorry something went wrong');
        console.log(error)
    } 
  });


module.exports = router;