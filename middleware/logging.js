
const logging = (req, res, next) =>{
    console.log("MIDDLEWARE:", req.method)
    console.log('Request URL:', req.originalUrl);

    // if (true){
    //     res.status(400).send("UH UH UH")
    // }
    next();
}

module.exports = logging;