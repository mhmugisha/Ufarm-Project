const { text } = require('express');
const mongoose = require('mongoose');


const produceSchema = new mongoose.Schema({

    uniqueid:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Registration'
    },
    suppliername:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Registration'
    },
    doreg:{
        type: String,
        trim: true
    },
    address:{
        type: String,
        trim: true
    },
    product:{
        type: String,
        trim: true
    },
    quantity: {
        type: String,
        trim: true
    },
    unitprice:{
        type: String,
        trim: true
    },
    totalamount:{
        type: String,
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
    ward:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Registration'
    },
    uploadimage:{
        type: String,
    },
    status:{
        type:String,
        default: 'Pending',
        enum:['Pending', 'Approved']
    }
})


module.exports = mongoose.model('Pdtupload', produceSchema);