const express = require("express");
const router = express.Router();
const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login')


//Importing model
const Pdtupload = require('../models/Produce')

//AO Aggregating routes--------------------------------
router.get("/AO_reports", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
    req.session.user = req.user;
    if(req.user.role == 'agricofficer'){
        try {
            let totalPoultry = await Pdtupload.aggregate([
            { $match: { productcategory: "Poultry" } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$quantity" },
            totalCost: { $sum: { $multiply: [ "$unitprice", "$quantity" ] } },             
            }}
            ])
            let totalHort = await Pdtupload.aggregate([
                { $match: { productcategory: "Horticulture" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                totalCost: { $sum: { $multiply: [ "$unitprice", "$quantity" ] } },            
                }}
            ])
            let totalDairy = await Pdtupload.aggregate([
                { $match: { productcategory: "Dairy" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                totalCost: { $sum: { $multiply: [ "$unitprice", "$quantity" ] } },            
                }}
            ])
            
            let totalBeans = await Pdtupload.aggregate([
                { $match: { productname: "Beans" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                }}
            ])

            console.log("Poultry collections", totalPoultry)
            console.log("Hortcul. collections", totalHort)
            console.log("Dairy collections", totalDairy)

            res.render("AO_reports", { 
            title: 'Reports', 
            currentUser:req.session.user,
            totalP:totalPoultry[0],
            totalH:totalHort[0],
            totalD:totalDairy[0],
            totalB:totalBeans[0],
            });
        } catch (error) {
            res.status(400).send("unable to find items in the database");
        }
        
    }else {
        res.send("This page is only accessed by Agric Officers")
    }
});

//AGRICULTURAL OFFICER Registration route---------------------/
router.get('/aoregister', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.render('aoregistration')
});


//IMPORTING Model - should be last section in this file-------/
const Registration = require('../models/Reg')

router.post('/aoregister', connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
  console.log(req.body);
  try{
      const user = new Registration(req.body);
      await Registration.register(user, req.body.password, (error)=>{
          if(error){
              throw error
          }
          res.redirect('/aodashboardroute')
      })
  }catch(error){
      res.status(400).send('Sorry something went wrong');
      console.log(error)
  } 
});

module.exports = router;