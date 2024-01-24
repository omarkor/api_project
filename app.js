//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const urlencoded = require("body-parser/lib/types/urlencoded");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
});
app.post("/", function(req,res){
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    console.log(email,lname,fname)

});

app.listen(3000, function(){
    console.log("server is runing on port 3000");
});