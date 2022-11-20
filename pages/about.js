const express = require('express');
const router = express.Router();




router.get('/about', function(req, res){
    res.send("this is about page!");
 });

 module.exports=router;


