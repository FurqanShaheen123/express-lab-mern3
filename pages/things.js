const express = require('express');
const router = express.Router();




router.get('/things', function(req, res){
    res.send("This is thing page!");
 });
 

 module.exports=router;


