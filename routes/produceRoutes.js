const express= require('express');
const router = express.Router(); 
const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login');

// Importing Model--------------------------------------------
const Pdtupload = require("../models/Produce");
const Registration = require('../models/Reg');


// Image upload-------------------------------------------------
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/uploads");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

// Variable to store multer functionality to upload image-----------
var upload = multer({ storage: storage });


//Add Produce route shared by Irene in classroom-----------------------
router.get('/addproduceroute', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	req.session.user = req.user;
	try {
		res.render('addproduce', { currentUser:req.session.user })	
	} catch (error) {
		res.status(400).send('Unable to upload produce')
	}
  })

router.post("/addproduceroute", upload.single("uploadimage"), async (req, res) => {
	console.log(req.body);
	try {
		const produce = new Pdtupload(req.body);
		produce.uploadimage = req.file.path;
		console.log("This is my produce", produce);
		await produce.save();
		res.redirect("/ufdashboard");
	} catch (error) {
		res.status(400).send("Not able to add produce to the database");
		console.log(error);
	}
});

//Getting/Displaying produce list----------------------------
router.get("/producelist", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	req.session.user = req.user
	try {
		const produceOrderedList = {_id:-1}
		let products = await Pdtupload.find().sort(produceOrderedList);
		res.render("producelist", {products: products, currentUser:req.session.user});
	} catch (error) {
		res.status(400).send("Unable to get Produce list");
	}
});

// Updating Produce Routes-------------------------------------
router.get('/produce/update/:id', async (req, res) =>{
	try {
		const updateProduct = await Pdtupload.findOne({_id:req.params.id});
		res.render('updateProduce',{product:updateProduct});
		console.log('Product updated', updateProduct)
	} catch (error) {
		res.status(400).send('Unable to update produce!');
	}
});

router.post("/produce/update", async (req, res) => {
	try {
		await Pdtupload.findOneAndUpdate({_id:req.query.id},req.body);
		res.redirect("/producelist");
	} catch (error) {
		res.status(400).send("Unable to update produce!!");
	}
});

// Approving Produce Routes---------------------------------------
router.get('/produce/approve/:id', async (req, res) =>{
	try {
		const updateProduct = await Pdtupload.findOne({_id:req.params.id});
		res.render('approve',{product:updateProduct});
		console.log('Product updated', updateProduct)
	} catch (error) {
		res.status(400).send('Unable to approve produce!!!.');
	}
});

router.post('/produce/approve', async (req,res) => {
	try {
	  await Pdtupload.findOneAndUpdate({_id:req.query.id}, req.body);
	  res.redirect('/seeapprovedlist');
	} catch (error) {
	  res.status(400).send('Sorry product not approved.');
	}
  });

//Changing availability status - available, booked, N/A.-----------
router.get('/produce/available/:id', async (req, res) =>{
	try {
		const saleProduct = await Pdtupload.findOne({_id:req.params.id});
		res.render('availability',{item:saleProduct});
		console.log('Product approved', saleProduct)
	} catch (error) {
		res.status(400).send('Unable to approve produce.');
	}
});

router.post('/produce/available', async (req,res) => {
	try {
	  await Pdtupload.findOneAndUpdate({_id:req.query.id}, req.body);
	  res.redirect('/producelist');
	} catch (error) {
	  res.status(400).send('Sorry product not approved.');
	}
  });

  //--------------------------------------------------------------
  // Returning approved product list
  router.get("/seeapprovedlist", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	req.session.user = req.user
	try {
		let products = await Pdtupload.find().sort({$natural:-1});
		res.render("availabilitylist", { products: products, currentUser:req.session.user});
	} catch (error) {
		res.status(400).send("Unable to get Produce list");
	}
});

// Returning pending product list---------------------------------
router.get("/pendinglist", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	req.session.user = req.user;
	try {
		let products = await Pdtupload.find().sort({$natural:-1});
		res.render("pendinglist", { products: products, currentUser:req.session.user });
	} catch (error) {
		res.status(400).send("Unable to get Produce list");
	}
});


//Delete product--------------------------------------------------
router.post('/produce/delete', async (req,res)=>{
	try{
		await Pdtupload.deleteOne({_id:req.body.id});
		res.redirect('back');
	}catch(error){
		res.status(400).send('Sorry product cannot be deleted')
	}
})

//Returns approved list--------------------------------------------
router.get("/approvedList", async (req, res) => {
	try {
		let product = await Pdtupload.find().sort({$natural:-1});
		res.render("approvedList", { farmproducts: product });
	} catch (error) {
		res.status(400).send("Unable to get Produce list");
	}
});



module.exports = router; 
