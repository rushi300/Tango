require("dotenv/config");
var express = require("express");
var router = express.Router();
var User = require("../models/user");  
var cities = require("all-countries-and-cities-json");
var indianCities = cities["India"];
var mongoose = require("mongoose");

router.post("/savedUser/:id", function(req,res){
    User.findById(req.params.id, function(err,savedUser){
        if(err){
            console.log(err);
            res.redirect("back");
        }else{
            savedUser.push(savedUser);
        }
    });
});