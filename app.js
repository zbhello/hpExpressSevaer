const express = require('express') 
const app = express()
app.use('/',express.static(__dirname+'/dist'))
app.get('/',function(_,res){
    res.sendFile(__dirname+'/dist/index.html')
})
var server = app.listen(3000,function(){
    var port = server.address().port;
    console.log('localhost:' + port);
})

