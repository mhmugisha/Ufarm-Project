const express = require("express");
const router = express.Router();
const passport = require('passport');


//LOG IN ROUTES--------------------------------------/
router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), (req,res)=>{
    req.session.user = req.user
    const user = req.session.user
    console.log("This is the user", user);
        if(user.role ==''){
            res.send('Enter log in details!')
        }else if(user.role == 'agricofficer'){
            res.redirect('/aodashboardroute')
        }else if(user.role == 'farmerone'){
            res.redirect('/masajjaAfodashboard')    
       }else if(user.role == 'urbanfarmer'){
            res.redirect('/ufdashboardroute')
        } else{
            res.send('You are not a registered user')
        }   
});

//AO Dashboard route---------------------------------/
router.get('/aodashboardroute', (req,res) =>{
    res.render('fosdashboard', {currentUser:req.session.user});
})


//AO Dashboard route original---------------------------------/
router.get('/aodashboard', (req,res) =>{
    res.render('aodashboard', {currentUser:req.session.user});
})

//Urban Farmer dashboard route-----------------------/
router.get('/ufdashboardroute', (req,res) =>{
    res.render('ufdashboard', {currentUser:req.session.user});
})

//Farmer One dashboard route-------------------------/
router.get('/masajjaAfodashboard', (req,res) =>{
    res.render('masajjaAfodashboard', {currentUser:req.session.user});
})


//Log out route-------------------------------------/
router.post('/logout', (req,res)=>{
if(req.session){
    req.session.destroy(function(err){
        if(err){
            res.status(400).send('Unable to log out')
        }else{
            return res.redirect('/login')
        }
    })
}
  });

//   //Farmer One dashboard route-------------------------/
// router.get('/index', (req,res) =>{
//     res.render('index', {currentUser:req.session.user});
// })


module.exports = router;
