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
           
            //My Aggregations
            // Poultry
            let totalChicken = await Pdtupload.aggregate([
                { $match: { productname: "Chicken" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                }}
            ])

            let totalEggs = await Pdtupload.aggregate([
                { $match: { productname: "Eggs" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                }}
            ])

            let totalChicks = await Pdtupload.aggregate([
                { $match: { productname: "Chicks" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                }}
            ])

            let totalDressed = await Pdtupload.aggregate([
                { $match: { productname: "Dressed Chicken" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                }}
            ])

            let totalDrumStick = await Pdtupload.aggregate([
                { $match: { productname: "Drum Sticks" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                }}
            ])

            let totalGizzard = await Pdtupload.aggregate([
                { $match: { productname: "Gizzard" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                }}
            ])

            //Horticulture
            let totalBeans = await Pdtupload.aggregate([
                { $match: { productname: "Beans" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                }}
            ])

            let totalMaize = await Pdtupload.aggregate([
                { $match: { productname: "Maize" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                }}
            ])

            let totalTomato = await Pdtupload.aggregate([
                { $match: { productname: "Tomatoes" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                }}
            ])

            let totalCabbage = await Pdtupload.aggregate([
                { $match: { productname: "Cabbage" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                }}
            ])

            let totalSweetP = await Pdtupload.aggregate([
                { $match: { productname: "Sweet Pepper" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                }}
            ])

            let totalOkra = await Pdtupload.aggregate([
                { $match: { productname: "Okra" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                }}
            ])
 
            //Dairy
            let totalMilk = await Pdtupload.aggregate([
                { $match: { productname: "Milk" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                }}
            ])

            let totalCalves = await Pdtupload.aggregate([
                { $match: { productname: "Calves" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                }}
            ])

            let totalGhee = await Pdtupload.aggregate([
                { $match: { productname: "Ghee" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                }}
            ])

            let totalCheese = await Pdtupload.aggregate([
                { $match: { productname: "Cheese" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                }}
            ])

            let totalYoghurt = await Pdtupload.aggregate([
                { $match: { productname: "Yoghurt" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$quantity" },
                }}
            ])

            let totalHeifers = await Pdtupload.aggregate([
                { $match: { productname: "Heifers" } },
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

           //Poultry Variables
            totalCn:totalChicken[0],
            totalE:totalEggs[0],
            totalCs:totalChicks[0],
            totalDc:totalDressed[0],
            totalDs:totalDrumStick[0],           
            totalGz:totalGizzard[0],           
            
            //Horticulture Variables
            totalB:totalBeans[0],
            totalMz:totalMaize[0],
            totalTm:totalTomato[0],
            totalCb:totalCabbage[0],
            totalSp:totalSweetP[0],
            totalOk:totalOkra[0],

            //Dairy Variables
            totalMk:totalMilk[0],
            totalCv:totalCalves[0],
            totalGi:totalGhee[0],
            totalCz:totalCheese[0],
            totalYg:totalYoghurt[0],
            totalHf:totalHeifers[0],

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