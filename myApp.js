var express = require('express');

var app = express();





/** 2) A first working Express Server */
app.get('/hello',function(req,res){
  res.send('Hello Express');
});


/** 3) Serve an HTML file */
app.get('/', function(req,res){
  res.sendFile(process.cwd() + '/views/index.html');
});

/** 4) Serve static assets  */
app.use(express.static(process.cwd() + '/public'));



/** 9)  Get input from client - Route parameters */

app.get('/api/whoami', function(req,res){
  
  var ipaddress = req.headers['x-forwarded-for'];
  var language = req.headers['accept-language'];
  var software = req.headers['user-agent'];
  
  ipaddress= ipaddress.substring(0, ipaddress.indexOf(','))
  language= language .substring(0, language.indexOf(','))
  software= software.substring(software.indexOf('(')+1, software.indexOf(')'))
    // res.writeHead(200, { 'Content-Type': 'application/json' });
     res.json({ ipaddress: ipaddress, language: language, software: software});

});






// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;