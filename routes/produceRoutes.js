const express= require('express');
const router = express.Router(); 
const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login');

// Importing Model---------------------------------------------/
const Pdtupload = require("../models/Produce");
const Registration = require('../models/Reg');


// Image upload-------------------------------------------------/
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/uploads");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

// Multer functionality to upload image-----------------------------/
var upload = multer({ storage: storage });

//Add Produce route ----------------------/
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
		res.redirect("/ufdashboardroute");
	} catch (error) {
		res.status(400).send("Not able to add produce to the database");
		console.log(error);
	}
});

//Displaying produce list-------------------------------------------/
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

// Updating Produce Routes------------------------------------/
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

// Approving Produce Routes-------------------------------------/
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

//Changing availability status - available, booked, N/A.-----------/
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
	  res.redirect('/bookedlist');
	} catch (error) {
	  res.status(400).send('Sorry product not approved.');
	}
  });

  // Returning approved product list-----------------------------------/
  router.get("/seeapprovedlist", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	req.session.user = req.user
	try {
		let products = await Pdtupload.find().sort({$natural:-1});
		res.render("pendinglist", { products: products, currentUser:req.session.user});
	} catch (error) {
		res.status(400).send("Unable to get Produce list");
	}
});

// Returning pending product list-----------------------------------/
router.get("/pendinglist", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	req.session.user = req.user;
	try {
		let products = await Pdtupload.find().sort({$natural:-1});
		res.render("pendinglist", { products: products, currentUser:req.session.user });
	} catch (error) {
		res.status(400).send("Unable to get Produce list");
	}
});


//Delete product-----------------------------------------------------/
router.post('/produce/delete', async (req,res)=>{
	try{
		await Pdtupload.deleteOne({_id:req.body.id});
		res.redirect('back');
	}catch(error){
		res.status(400).send('Sorry product cannot be deleted')
	}
})

//Returns approved list---------------------------------------------/
router.get("/approvedList", async (req, res) => {
	try {
		let product = await Pdtupload.find().sort({$natural:-1});
		res.render("approvedList", { farmproducts: product });
	} catch (error) {
		res.status(400).send("Unable to get Produce list");
	}
});



//Ordering routes -----------/
router.get('/produce/order/:id', async (req, res) =>{
	try {
		const saleProduct = await Pdtupload.findOne({_id:req.params.id});
		res.render('order',{item:saleProduct});
		console.log('Ordered list', saleProduct)
	} catch (error) {
		res.status(400).send('Unable to orderproduce.');
	}
});

router.post('/produce/order', async (req,res) => {
	try {
	  await Pdtupload.findOneAndUpdate({_id:req.query.id}, req.body);
	  res.redirect('/index');
	} catch (error) {
	  res.status(400).send('Sorry order not successful.');
	}
  });
//Returns booked list---------------------------------------------/
router.get("/bookedlist", async (req, res) => {
	try {
		let listedOrders = await Pdtupload.find().sort({$natural:-1});
		res.render("bookedlist", { orders: listedOrders, currentUser:req.session.user });
	} catch (error) {
		res.status(400).send("Unable to display booked list");
	}
});

//Returns list of products viewed by customers ------------------------/
router.get("/index", async (req, res) => {
	try {
		let produce = await Pdtupload.find().sort({$natural:-1});
		res.render("index", {customerproducts: produce});
	} catch (error) {
		res.status(400).send("Unable to display produce to customer");
	}
});

//Displaying pages for customer-------------------------------------------/

//Poultry page
router.get("/poultry", async (req, res) => {
	try {
		let poultpdts = await Pdtupload.find({ role: "urbanfarmer" });
		res.render("00poultry", { poultryProduces:poultpdts });
	} catch (error) {
		res.status(400).send("Unable to find produce");
	}
});

//Horticulture page-------------------------------------------/
router.get("/horticulture", async (req, res) => {
	try {
		let hortProduce = await Pdtupload.find({ role: "urbanfarmer" });
		res.render("01horticulture", { hortproduces:hortProduce });
	} catch (error) {
		res.status(400).send("Unable to find produce");
	}
});

//Dairy page-------------------------------------------/
router.get("/dairy", async (req, res) => {
	try {
		let dairyProduce = await Pdtupload.find({ role: "urbanfarmer" });
		res.render("02dairy", {dairyproduces:dairyProduce });
	} catch (error) {
		res.status(400).send("Unable to find produce");
	}
});



module.exports = router; 
