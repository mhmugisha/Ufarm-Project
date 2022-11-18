const express = require("express");
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login')


//Importing model
const Pdtupload = require('../models/Produce')

//FO Aggregating routes--------------------------------
router.get("/FO_reports", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
  req.session.user = req.user;
  if(req.user.role == 'farmerone'){
      try {
          let totalPoultry = await Pdtupload.aggregate([
          { $match: { "$and":[{ward:req.user.ward}, {productcategory: "Poultry"}]  } },
          { $group: { _id: "$all", 
          // totalQuantity: { $sum: "$quantity" },
          totalCost: { $sum: { $multiply: [ "$unitprice", "$quantity" ] } },            
        }}
          ])
          let totalHort = await Pdtupload.aggregate([
              { $match: {"$and":[{ward:req.user.ward}, {productcategory: "Horticulture"}]} },
              { $group: { _id: "$all", 
              // totalQuantity: { $sum: "$quantity" },
              totalCost: { $sum: { $multiply: [ "$unitprice", "$quantity" ] } },            
              }}
          ])
          let totalDairy = await Pdtupload.aggregate([
              { $match: { "$and":[{ward:req.user.ward}, {productcategory: "Dairy"}] } },
              { $group: { _id: "$all", 
              // totalQuantity: { $sum: "$quantity" },
              totalCost: { $sum: { $multiply: [ "$unitprice", "$quantity" ] } },            
              }}
          ])
         
         
          /*----------------------------------------------------------------------------*/
          // My Aggregations

          //Poultry
          let totalChicken= await Pdtupload.aggregate([
            { $match: { "$and":[{ward:req.user.ward}, {productname: "Chicken"}] } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$quantity" },
            }}
        ])

          let totalEggs= await Pdtupload.aggregate([
            { $match: { "$and":[{ward:req.user.ward}, {productname: "Eggs"}] } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$quantity" },
            }}
        ])

          let totalChicks= await Pdtupload.aggregate([
            { $match: { "$and":[{ward:req.user.ward}, {productname: "Chicks"}] } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$quantity" },
            }}
        ])

          let totalDressed= await Pdtupload.aggregate([
            { $match: { "$and":[{ward:req.user.ward}, {productname: "Dressed Chicken"}] } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$quantity" },
            }}
        ])

          let totalDrumStick= await Pdtupload.aggregate([
            { $match: { "$and":[{ward:req.user.ward}, {productname: "Drum Sticks"}] } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$quantity" },
            }}
        ])

          let totalGizzard= await Pdtupload.aggregate([
            { $match: { "$and":[{ward:req.user.ward}, {productname: "Gizzard"}] } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$quantity" },
            }}
          ])


          //Horticulture
          let totalBeans= await Pdtupload.aggregate([
            { $match: { "$and":[{ward:req.user.ward}, {productname: "Beans"}] } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$quantity" },
            }}
        ])

          let totalMaize= await Pdtupload.aggregate([
            { $match: { "$and":[{ward:req.user.ward}, {productname: "Maize"}] } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$quantity" },
            }}
        ])

          let totalTomato= await Pdtupload.aggregate([
            { $match: { "$and":[{ward:req.user.ward}, {productname: "Tomatoes"}] } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$quantity" },
            }}
        ])

          let totalCabbage= await Pdtupload.aggregate([
            { $match: { "$and":[{ward:req.user.ward}, {productname: "Cabbage"}] } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$quantity" },
            }}
        ])

          let totalSweetP= await Pdtupload.aggregate([
            { $match: { "$and":[{ward:req.user.ward}, {productname: "Sweet Pepper"}] } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$quantity" },
            }}
        ])

          let totalOkra= await Pdtupload.aggregate([
            { $match: { "$and":[{ward:req.user.ward}, {productname: "Okra"}] } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$quantity" },
            }}
          ])

          //Dairy
          let totalMilk= await Pdtupload.aggregate([
            { $match: { "$and":[{ward:req.user.ward}, {productname: "Milk"}] } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$quantity" },
            }}
        ])

          let totalCalves= await Pdtupload.aggregate([
            { $match: { "$and":[{ward:req.user.ward}, {productname: "Calves"}] } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$quantity" },
            }}
        ])

          let totalGhee= await Pdtupload.aggregate([
            { $match: { "$and":[{ward:req.user.ward}, {productname: "Ghee"}] } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$quantity" },
            }}
        ])

          let totalCheese= await Pdtupload.aggregate([
            { $match: { "$and":[{ward:req.user.ward}, {productname: "Cheese"}] } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$quantity" },
            }}
        ])

          let totalYoghurt= await Pdtupload.aggregate([
            { $match: { "$and":[{ward:req.user.ward}, {productname: "Yoghurt"}] } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$quantity" },
            }}
        ])

          let totalHeifers= await Pdtupload.aggregate([
            { $match: { "$and":[{ward:req.user.ward}, {productname: "Heifers"}] } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$quantity" },
            }}
          ])

          //My Aggregations
          // console.log("Poultry collections", totalPoultry)
          // console.log("Hortcul. collections", totalHort)
          // console.log("Dairy collections", totalDairy)

          res.render("FO_reports", { 
          title: 'Reports', 
          currentUser:req.session.user,
          totalPA:totalPoultry[0],
          totalHA:totalHort[0],
          totalDA:totalDairy[0],

          //Poultry
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

//Display Farmerones list---------------------------/
router.get("/folist", async (req, res) => {
  try {
      let farmerOnes = await Registration.find({ role: "farmerone" });
      res.render("folist", {farmerones:farmerOnes, currentUser:req.session.user});
  } catch (error) {
      res.status(400).send("Unable to find Farmer Ones in the Database");
  console.log(error);
  }
});


//Farmer One registration route --------------------------------/
router.get('/foregister2', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.render('foregistration2')
})


//All 4 Farmer Ones Dashboard------------------------------------/
router.get('/fosdashboard', (req, res) => {
  res.render('fosdashboard', {currentUser:req.session.user});
})

//IMPORTING Model
const Registration = require('../models/Reg')


//Farmer One Registration Post Route -------------------------------------/
router.post('/foregister2', async(req, res) => {
  console.log(req.body);
  try{
      const user = new Registration(req.body);
      let uniqueExist = await Registration.findOne({uniqueid:req.body.uniqueid})
      if(uniqueExist){
        return res.status(400).send('This no is already taken')
      }else{
        await Registration.register(user, req.body.password, (error)=>{
            if(error){
                throw error
            }
            res.redirect('/aodashboardroute')
        })
      }
  }catch(error){
      res.status(400).send('Sorry something went wrong');
      console.log(error)
  } 
  });
  

// Farmer One Update Routes----------------------------------------/
router.get("/farmerone/update/:id", async (req, res) => {
	try {
		const farmerone = await Registration.findOne({ _id: req.params.id });
		res.render("foupdate", {farmerones: farmerone });
	} catch (error) {
		res.status(400).send("Unable to update farmerone!");
	}
});

router.post("/farmerone/update", async (req, res) => {
	try {
		await Registration.findOneAndUpdate({ _id: req.query.id }, req.body);
		res.redirect("/folist");
	} catch (error) {
		res.status(400).send("Unable to update farmer one!");
	}
});


module.exports = router;