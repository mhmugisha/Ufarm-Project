const express = require("express");
const router = express.Router();
const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login');


//Agricultural Officer Dashboard Routes 
//Note that they simply display

router.get("/aodashboard", (req, res) => {
	res.render("aodashboard"); //u will need an aodashboard pug file to render.
});

// // Farmer One list
// router.get("/folist", (req, res) => {
// 	res.render("AO/AO-fo-accounts");
// });
// // Farmer One Activities
// router.get("/FOactivities", (req, res) => {
// 	res.render("AO/AO-fo-activities");
// });
// // Ward Routes
// router.get("/addward", (req, res) => {
// 	res.render("AO/ward");
// });
// // Testing layout Page
// router.get("/layout", (req, res) => {
// 	res.render("AO/layout");
// });

module.exports = router;