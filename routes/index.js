const router = require('express').Router();
const fs = require('fs');

//api routes
router.get('/cars', (req, res)=>{

    fs.readFile('./data/cars.json', 'utf8', (err, data) => {
        if (err){
            console.error(err);
        }
        else{
            res.json(JSON.parse(data))
        }
    });

});



router.post('/cars', (req, res)=>{
   
    const newCarObj = {
        id: parseInt(req.body.carId),
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        sold: false
    }
    console.log(newCarObj);
    // non-persistant Data
    //carData.push(newCarObj); 

    fs.readFile('./data/cars.json', 'utf8', (err, data) => {
        if (err){
            console.error(err);
        }
        else{
            //write to file
            const parsedCars = JSON.parse(data);
            parsedCars.push(newCarObj);
            const stringifyCars = JSON.stringify(parsedCars, '', 4);
            fs.writeFile('./data/cars.json', stringifyCars, (writeErr)=>{
                if (writeErr){
                    console.error(writeErr);
                }
                else{
                    console.log("File Written!")
                }
            })
        }
    })



    res.json(`The ${req.body.make} was added!`);
    //console.log(`${req.method} was used!`)
});

router.put('/cars', (req, res)=>{
    res.json(`${req.method} was used!`);
    console.log(`${req.method} was used!`)
});

router.delete('/cars', (req, res)=>{
    res.json(`${req.method} was used and everything was deleted!`);
    console.log(`${req.method} was used and everything was deleted!`);
});


module.exports = router;