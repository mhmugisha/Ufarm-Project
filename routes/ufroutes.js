const express = require("express");
const router = express.Router();
const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login');


//Dashboard route-------------------------------------
router.get("/ufdashboard", (req, res) => {
	res.render("ufdashboard");
});

//-----------------------------------------------------
//Register/get route for Masajja A Urban Farmer
router.get('/ufregister', (req, res) => {
    res.render('ufregistration')
})

// //Register/get route for Masajja B Urban Farmer
// router.get('/ufregisterB', (req, res) => {
//     res.render('ufregistrationB')
// })

// //Register/get route for Masajja C Urban Farmer
// router.get('/ufregisterC', (req, res) => {
//     res.render('ufregistrationC')
// })

// //Register/get route for Masajja D Urban Farmer
// router.get('/ufregisterD', (req, res) => {
//     res.render('ufregistrationD')
// })
//---------------------------------------------------

//Import the user model--------------/
const Registration = require('../models/Reg');

//--------------------------------------------------
// Urban Farmer registration post route
router.post('/ufregister', async(req, res) => {
  console.log(req.body);
  try{
      const user = new Registration(req.body);
      await Registration.register(user, req.body.password, (error)=>{
          if(error){
              throw error
          }
          res.redirect('/masajjaAfodashboard')
      })
  }catch(error){
      res.status(400).send('Sorry something went wrong');
      console.log(error)
  } 
});

// //Post route for Masajja B Urban Farmer
// router.post('/ufregisterB', async(req, res) => {
//     console.log(req.body);
//     try{
//         const user = new Registration(req.body);
//         await Registration.register(user, req.body.password, (error)=>{
//             if(error){
//                 throw error
//             }
//             res.redirect('/ufregisterB')
//         })
//     }catch(error){
//         res.status(400).send('Sorry something went wrong');
//         console.log(error)
//     } 
//   });

//   //Post route for Masajja C Urban Farmer
// router.post('/ufregisterC', async(req, res) => {
//     console.log(req.body);
//     try{
//         const user = new Registration(req.body);
//         await Registration.register(user, req.body.password, (error)=>{
//             if(error){
//                 throw error
//             }
//             res.redirect('/ufregisterC')
//         })
//     }catch(error){
//         res.status(400).send('Sorry something went wrong');
//         console.log(error)
//     } 
//   });

//   //Post route for Masajja D Urban Farmer
// router.post('/ufregisterD', async(req, res) => {
//     console.log(req.body);
//     try{
//         const user = new Registration(req.body);
//         await Registration.register(user, req.body.password, (error)=>{
//             if(error){
//                 throw error
//             }
//             res.redirect('/ufregisterD')
//         })
//     }catch(error){
//         res.status(400).send('Sorry something went wrong');
//         console.log(error)
//     } 
//   });


module.exports = router;