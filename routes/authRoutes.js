const express = require("express");
const router = express.Router();
const passport = require('passport');


//LOG IN ROUTES--------------------------------------------------/
router.get('/login2', (req, res) => {
    res.render('login2')
})

//Log in route

//confirm the roles in db and the routes
router.post('/login2', passport.authenticate('local', {failureRedirect: '/login2'}), (req,res)=>{
    req.session.user = req.user
    console.log("This is the user",   req.session.user);
    if(req.user.role == 'agricofficer'){
        res.redirect('/aodashboard')
    }else if(req.user.role == 'farmerone'){
        res.redirect('/fodashboard') 
    }else if(req.user.role == 'urbanfarmer'){
        res.redirect('/ufdashboard')
    } else{
        res.send('You are not a registered user')
    }
});


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
