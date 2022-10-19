


// image upload
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
});

// instantiate variable upload to store multer functionality to upload image
var upload = multer({ storage: storage })

//Here you put code for upload routes