const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const registrationSchema = new mongoose.Schema({
    uniqueid:{
        type: String,
        required: true,
        trim: true
    },
    fullname:{
        type: String,
        trim: true
    },
    username:{
        type: String,
        trim: true
    },
    email:{
        type: String,
        trim: true
    },
    dob:{
        type: Date,
        trim: true
    },
    doreg:{
        type: Date,
        trim: true
    },
    phone:{
        type: String,
        trim: true
    },
    gender:{
        type: String,
        trim: true
    },
    role:{
        type: String,
        trim: true
    },
    nin:{
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
    address:{
        type: String,
        trim: true
    },
    password:{
        type: String,
    }

})

registrationSchema.plugin(passportLocalMongoose,{
    usernameField: 'uniqueid'
});
module.exports = mongoose.model('Registration', registrationSchema);


