const express= require('express');
const router = express.Router(); 
const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login');

// Importing Model
const Pdtupload = require("../models/Produce");
const Registration = require("../models/Reg");

// image upload
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/uploads");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

// instantiate variable upload to store multer functionality to upload image
var upload = multer({ storage: storage });

router.get("/addproduce", async (req, res) => {
	const urbanFarmerList = await Registration.find({ role: "urbanfarmer" });
	console.log(urbanFarmerList);
	res.render("pdtupdate", { urbanfarmers: urbanFarmerList });
});

// router.get("/addproduce", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
// 	console.log("This is the Current User ", req.session.user);
// 	res.render("produce", { currentUser: req.session });
// });

router.post("/addproduce", upload.single("uploadimage"), async (req, res) => {
	console.log(req.body);
	try {
		const produce = new Pdtupload(req.body);
		produce.uploadimage = req.file.path;
		console.log("This is my produce", produce);
		await produce.save();
		res.redirect("/producelist");
	} catch (error) {
		res.status(400).send("Not able to add produce to the database");
		console.log(error);
	}
});

/*Displays produce list */
router.get("/producelist", async (req, res) => {
	try {
		let product = await Pdtupload.find();
		res.render("producelist", { products: product });
	} catch (error) {
		res.status(400).send("Unable to get Produce list");
	}
});

// Updating Produce
router.get('/produce/update/:id', async (req, res) =>{
	try {
		const updateProduct = await Pdtupload.findOne({_id:req.params.id});
		res.render('produce-update',{product:updateProduct});
	} catch (error) {
		res.status(400).send('Unable to update produce');
	}
});

router.post("/produce/update", async (req, res) => {
	try {
		await Pdtupload.findOneAndUpdate({_id:req.query.id},req.body);
		res.redirect("/producelist");
	} catch (error) {
		res.status(400).send("Unable to update produce");
	}
});
// Dashboard Route
router.get("/UFdashboard", (req, res) => {
	res.render("dashboards/UF-dashboard");
});




module.exports = router; 
