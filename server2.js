//DEPENDENCIES    ---------------/
const express = require("express"); //Always the first line of code
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/db');
const passport = require('passport');

//Defining Express Session
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,  
});
//Import the user model
const Registration = require('./models/Reg')
const Pdtupload = require('./models/Produce')

//IMPORTING route files
const registrationRoutes = require('./routes/registerRoutes')
const agricOffRoutes = require('./routes/aoroutes');
const farmerOneRoutes = require('./routes/foroutes');
const urbanFarmerRoutes = require('./routes/ufroutes');
const authRoutes = require('./routes/authRoutes');
const pdtUpdateRoutes = require('./routes/pdtupdateroutes');
const aodashboardRoutes = require('./routes/aodashboardroutes');



//INSNTANTIATIONS  --------------/
const app = express();

//Setting up database connections
mongoose.connect(config.database,{ useNewUrlParser: true });
const db = mongoose.connection;

// Check connection------------/
db.once('open', function(){
  console.log('Connected to MongoDB');
});

// Check for db errors
db.on('error', function(err){
  console.error(err);
});

//CONFIGURATIONS --------------------/
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
//app.set('views', './views'); 


//MIDDLEWARE  ------------------------/
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(expressSession);

/*....Passport configuration middleware...*/
app.use(passport.initialize());
app.use(passport.session());
passport.use(Registration.createStrategy());
passport.serializeUser(Registration.serializeUser());
passport.deserializeUser(Registration.deserializeUser)


//ROUTES for using import--------------------------------------------------/
app.use('/', registrationRoutes);
app.use('/', agricOffRoutes);
app.use('/', farmerOneRoutes);
app.use('/', urbanFarmerRoutes);
app.use('/', authRoutes);
app.use('/', pdtUpdateRoutes);
app.use('/', aodashboardRoutes);



// For invalid routes. always the last route in the server file(index.js).
app.get("*", (req, res) => {
	res.send("404! This is an invalid URL.");
});

// Bootstrapping Server always the last line of code in the server file(index.js).
app.listen(3000, () => console.log("We are listening on port 3000"));