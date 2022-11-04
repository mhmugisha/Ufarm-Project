const express = require("express");
const router = express.Router();
const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login')


//Agric Officer Dashboard route
// router.get("/aodashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
// 	req.session.user=req.user;
//     if(req.user.role=='agricofficer'){
//         res.render('aodashboard')
//     }else{
//         res.send('only for ao')
//     }
// });

//Importing model
const Pdtupload = require('../models/Produce')

//AO Aggregating routes--------------------------------
router.get("/aoreports", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
    req.session.user = req.user;
    if(req.user.role == 'agricofficer'){
        try {
            let totalPoultry = await Pdtupload.aggregate([
            { $match: { productcategory: "poultry" } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$quantity" },
            totalCost: { $sum: { $multiply: [ "$unitprice", "$quantity" ] } },
            // totalCost: { $sum: "totalamount" },
            }}
            ])
            let totalHort = await Pdtupload.aggregate([
                { $match: { productcategory: "horticulture" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                totalCost: { $sum: { $multiply: [ "$unitprice", "$quantity" ] } },
                // totalCost: { $sum: "totalamount" },
            }}
            ])
            let totalDairy = await Pdtupload.aggregate([
                { $match: { productcategory: "dairy" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                totalCost: { $sum: { $multiply: [ "$unitprice", "$quantity" ] } },
                // totalCost: { $sum: "totalamount" },
            }}
            ])
            
            console.log("Poultry collections", totalPoultry)
            console.log("Hort collections", totalHort)
            console.log("Dairy collections", totalDairy)

            res.render("aoreports", { 
            title: 'Reports', 
            totalP:totalPoultry[0],
            totalH:totalHort[0],
            totalD:totalDairy[0],
            });
        } catch (error) {
            res.status(400).send("unable to find items in the database");
        }
        
    }else {
        res.send("This page is only accessed by Agric Officers")
    }
});
//------------------------------------            


//AGRICULTURAL OFFICER Registration routes---------------------/
router.get('/aoregister', (req, res) => {
    res.render('aoregistration2')
});

//IMPORTING Model - should be last section in this file.
const Registration = require('../models/Reg')

router.post('/aoregister', async(req, res) => {
  console.log(req.body);
  try{
      const user = new Registration(req.body);
      await Registration.register(user, req.body.password, (error)=>{
          if(error){
              throw error
          }
          res.redirect('/aoregister2')
      })
  }catch(error){
      res.status(400).send('Sorry something went wrong');
      console.log(error)
  } 
});

module.exports = router;