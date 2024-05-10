const express = require("express");
const fs = require("fs");
//const carData = require("./data/cars.json")
const app = express();
const api = require("./routes");

const logging = require('./middleware/logging')

app.use(express.static("public"));

//Body Parsers
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(logging);

const PORT = process.env.PORT || 3001;

//html routes
app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/public/cars.html")
});

app.get('/addcar',  (req, res)=>{
    res.sendFile(__dirname + "/public/addcar.html")
});

app.use('/api', api);

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});