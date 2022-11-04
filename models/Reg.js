const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const registrationSchema = new mongoose.Schema({
    uniqueid:{
        type: String,
        required: true,
        trim: true
    },
    role:{
        type: String,
        trim: true
    },
    fullname:{
        type: String,
        trim: true
    },
    nin:{
        type: String,
        trim: true
    },
    doreg:{
        type: Date,
        trim: true
    },  
    dob:{
        type: Date,
        trim: true
    },
    gender:{
        type: String,
        trim: true
    },
    address:{
        type: String,
        trim: true
    },
    phone:{
        type: String,
        trim: true
    },
    activity:{
        type: String,
        trim: true
    },
    ward:{
        type: String,
        trim: true
    },
    residencetype:{
        type: String,
        trim: true
    },
    duration:{
        type: Number,
        trim: true
    },
       email:{
        type: String,
        trim: true
    },
    
})

registrationSchema.plugin(passportLocalMongoose,{
    usernameField: 'uniqueid'
});
module.exports = mongoose.model('Registration', registrationSchema);


