const express = require("express");
const router = express.Router();
const passport = require('passport');


//LOG IN ROUTES--------------------------------------------------/
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
        // }else if(user.role == 'farmerone'){
        //     res.redirect('/masajjaAfodashboard')    
        // }else if(user.role ==  'farmerone'){
        //     res.redirect('/masajjaAfodashboard')    
        // }else if(user.role == 'farmerone'){
        //     res.redirect('/masajjaAfodashboard')    
        // 
    }
        else if(user.role == 'urbanfarmer'){
            res.redirect('/ufdashboardroute')
        } else{
            res.send('You are not a registered user')
        }   
});

//AO Dashboard route------------------
router.get('/aodashboardroute', (req,res) =>{
    res.render('aodashboard', {currentUser:req.session.user});
})

//Farmer One Dashboard route-----------
router.get('/fodashboardroute', (req,res) =>{
        res.render('fodashboard');
})

//Urban Farmer dashboard route----------
router.get('/ufdashboardroute', (req,res) =>{
    res.render('ufdashboard');
})

//Masajja A FO dashboard route----------
router.get('/masajjaAfodashboard', (req,res) =>{
    res.render('masajjaAfodashboard');
})

//Dashboard layout route----------
router.get('/dashboardlayout', (req,res) =>{
    res.render('layout2');
})

//Log out route
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



module.exports = router;
