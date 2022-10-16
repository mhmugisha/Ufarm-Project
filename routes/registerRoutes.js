const express = require('express');
const router = express.Router();

//IMPORTING Model
const Registration = require('../models/Reg')

//Writing router 
//LOG IN ROUTES--------------------------------------------------/
router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', async(req, res) => {
  console.log(req.body);
  try{
      const user = new Registration(req.body);
      await Registration.register(user, req.body.password, (error)=>{
          if(error){
              throw error
          }
          res.redirect('/login')
      })
  }catch(error){
      res.status(400).send('Sorry something went wrong');
      console.log(error)
  } 
});



//FARMER ONE ROUTES-------------------------------------------------/
router.get('/foregister', (req, res) => {
      res.render('foregistration')
})

router.post('/foregister', async(req, res) => {
    console.log(req.body);
    try{
        const user = new Registration(req.body);
        await Registration.register(user, req.body.password, (error)=>{
            if(error){
                throw error
            }
            res.redirect('/register')
        })
    }catch(error){
        res.status(400).send('Sorry something went wrong');
        console.log(error)
    } 
});

//AGRICULTURAL OFFICER routes--------------------------------------/
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

//URBAN FARMER ROUTES routes--------------/
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

//Very important. Last line in this folder
module.exports = router;