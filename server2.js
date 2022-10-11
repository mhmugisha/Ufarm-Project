
//This is the server file we are going to use for our project

/***************      DEPENDENCIES    *********************/
const express = require("express"); //Always the first line of code
const path = require('path')

/****************    INSNTANTIATIONS ***********************/
const app = express();



// Configurations
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.set('views', './views'); 



// To parse URL encoded data
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/uploads', express.static(__dirname + '/public/uploads'))


/********************** ROUTES ****************************/
app.get("/register", (req, res) => {
	res.render('foregistration');
});
  
app.post("/register", (req, res) => {
	console.log(req.body);
	res.redirect("/register");
  });

// For invalid routes. always the last route in the server file(index.js).
app.get("*", (req, res) => {
	res.send("404! This is an invalid URL.");
});

// Bootstrapping Server always the last line of code in the server file(index.js).
app.listen(3000, () => console.log("We are listening on port 3000"));