// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
//if empty input
app.get("/api",(req,res)=>{
 let date = new Date();
 res.json({
     "unix":date.getTime(),
     "utc":date.toUTCString(),
   })
})
app.get("/api/:date", (req, res) => {
  var date_string = req.params.date;
 let date ;
  if(!isNaN(date_string)){
      date= new Date(parseInt(date_string));
    }
    else{
      date= new Date(date_string);
}
 
   if(date.toString() ==='Invalid Date'){
   res.json({"error":'Invalid Date'})
 } 
 else{
   res.json({
     "unix":date.getTime(),
     "utc":date.toUTCString(),
   })
 }
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
