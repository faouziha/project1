//jshint eversion: 6

const express = require ("express");
const bodyParser = require("body-parser");
const request = require("request");
const ejs = require("ejs");


const app = express();
app.set('view engine', 'ejs');

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/test.html")
})


app.get("/ScienceFiction", function(req, res){
    res.render("ScienceFiction")
})




app.get("/page", function(req, res){
    res.render("page")
})

app.listen(4000, function(){
    console.log("server is running on port 4000")
})