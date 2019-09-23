var express = require('express');
var app = express();

app.get("/", function(req, res){
    res.send("Hi there");
}) //root path

app.get("/bye", function(req, res){
    res.send("Good bye");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
}) //listen to port and ip