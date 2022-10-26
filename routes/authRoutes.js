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
        if(user.role == 'agricofficer'){
            res.redirect('/aodashboardroute')
        }else if(user.role == 'farmerone'){
            res.redirect('/fodashboardroute') 
        }else if(user.role == 'urbanfarmer'){
            res.redirect('/ufdashboardroute')
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
