const express = require('express');
const app = express();
const thingsRoute = require('./pages/things')
const aboutRoute = require('./pages/about')
const PORT = 3000;
app.use('/pages',thingsRoute)
app.use('/pages',aboutRoute)



app.get('/demo1', function(req, res){
    res.send("Hello React!");
 });


 app.get('/:id', function(req, res){
    res.send('The id you specified is ' + req.params.id);
 });


 app.get('/items/:name/:id', function(req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
 });



 app.get('/demo2', function(req, res){
    res.send("Hello Node!");
 });



 

app.listen(PORT, () => {
    console.log(`Server running at port!!! ${PORT}`);
});