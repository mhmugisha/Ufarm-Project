const express= require('express');
const router = express.Router(); 
const multer = require('multer');

// Importing the User Model or Schema
const Pdtupload = require('../models/Produce');


// image upload
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
  cb(null, file.originalname);
  }
  });
  
  //Instantiate variable upload to store multer functionality to upload image
  var upload = multer({ storage: storage }) 

router.get("/pdtupdate", async (req, res) => {
  let farmerList = await Pdtupload.find({role: 'urbanFarmer'});
  res.render('pdtupdate', {urbanfarmers:farmerList});
});

router.post("/pdtupdate", upload.single('productimage'), async (req, res) => {
  console.log(req.body);
  try {
    const product = new Pdtupload(req.body);
    product.productimage = req.file.path;
    await product.save();
      res.redirect('/pdtupdate');
    }
    catch (error) {
      res.status(400).send("Sory product not saved.");
      console.log(error);
  }
});

module.exports = router; 
