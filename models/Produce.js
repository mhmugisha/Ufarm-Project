const { text } = require('express');
const mongoose = require('mongoose');

const produceSchema = new mongoose.Schema({

    product:{
        type: text,
        required: true,
        trim: true
    },
    quantity: {
        type: number,
        required: true,
        trim: true
    },
    unitprice:{
        type: number,
        required: true,
        trim: true
    },
    totalamount:{
        type: number,
        required: true,
        trim: true
    },
    modeofpay: {
        type: String,
        required: true,
        trim: true
    },
    producttype:{
        type: String,
        required: true,
        trim: true
    },
    deliverymode:{
        type: String,
        required: true,
        trim: true
    },
})