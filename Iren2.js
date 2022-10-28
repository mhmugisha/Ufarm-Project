router.get("/reports", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
    req.session.user = req.user;
    if(req.user.role == 'AgricOfficer'){
        try {
            
            // New
            // instantiate a crop variable you will use to select a crop.
            let selectedProduce;
            if (req.query.searchProduce)
                selectedProduce = req.query.searchProduce
            // Query for returning all tonnage and revenue of a produce
            let items = await Produce.find({prodname:selectedProduce});

            // console.log("products from the db", goods)
            console.log("products from the db after search", items)


            // New
            let totalCrop = await Produce.aggregate([
                { $match: { prodname: selectedProduce } },
                { $group: { _id: "$prodname", 
                totalQuantity: { $sum: "$quantity" },
                totalCost: { $sum: { $multiply: [ "$unitprice", "$quantity" ] } },
            ])
            
            console.log("Crop collections", totalCrop)

            res.render("reports", { 
            title: 'Reports', 
            products:items,
            totalC:totalCrop[0]
            });
        } catch (error) {
            res.status(400).send("unable to find items in the database");
            console.log (error)
        }
        
    }else {
        res.send("This page is only accessed by Agric Officers")
    }
})