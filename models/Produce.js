const { text } = require('express');
const mongoose = require('mongoose');


const produceSchema = new mongoose.Schema({

    uniqueid:{
       type: String
    },
    fullname:{
        type: String
    },
    doreg:{
        type: String,
        trim: true
    },
    address:{
        type: String,
        trim: true
    },
    productcategory:{
        type: String,
        trim: true
    },
    productname:{
        type: String,
        trim: true
    },
    quantity: {
        type: Number,
        trim: true
    },
    unitprice:{
        type: Number,
        trim: true
    },
    totalamount:{
        type: Number,
        trim: true
    },
    producttype:{
        type: String,
        trim: true
    },
    modeofpay: {
        type: String,
        trim: true
    },  
    deliverymode:{
        type: String,
        trim: true
    },
    phone:{
        type: String,
    },
    ward:{
        type: String,
    },
    customeremail:{
        type: String,
    },
    customerphone:{
        type: String,
    },
    uploadimage:{
        type: String,
    },
    status:{
        type:String,
        default: 'Pending',
        enum:['Pending', 'Approved']
    },
    availability: {
        type: String, 
          default: "available",
          enum: ["available", "booked", "N/A"] 
      }
})


module.exports = mongoose.model('Pdtupload', produceSchema);