const express = require("express");
const router = express.Router();
const passport = require('passport');


//LOG IN ROUTES--------------------------------------------------/
router.get('/login', (req, res) => {
    res.render('login')
})

//Log in route
router.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), (req,res)=>{
    console.log(req.body);
    res.redirect('/ufregister');
});

//Log out route
router.post('/login', (req,res)=>{
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
