const express = require('express');
const router = express.Router();


//IMPORTING Model
const Registration = require('../models/Reg')


//Route to display list
router.get("/folist", async (req, res) => {
    try {
        let farmerOne = await Registration.find({ role: "Farmer One" });
        res.render("folist", {farmerones:farmerOne});
    } catch (error) {
        res.status(400).send("Unable to find Farmer Ones in the Database");
		console.log(error);
    }
});





//Very important. Last line in this folder
module.exports = router;