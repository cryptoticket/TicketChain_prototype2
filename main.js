var express  = require('express');
var app      = express();
var port_num = 3000;
var fs       = require('fs');



eval(fs.readFileSync('requests/info.js')+'');
eval(fs.readFileSync('requests/tickets.js')+'');




console.log(`server is running on port ${port_num}`) 
app.listen(port_num)