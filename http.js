var http 	 = require('http'),
	drive    = require("drive-db").load(),
	express  = require('express'),
	Router   = require('node-simple-router'),
	router   = Router(),
	fs       = require('fs');


//Router list
router.get("/list", function(request, response) {
    drive.update("15YLkKhzlKtB4djYpGyYStBGteiLCKyG9ApsPkEzspy4", function(data){
    	response.end(JSON.stringify(data));
   	});
});

//Router Index with Get File
router.get("/", function(request, response) {
	fs.readFile("public/index.html", function (err, html) {
	    if (err) {
	        throw err;
	    }
	    response.writeHeader(200, {"Content-Type": "text/html", 'Set-Cookie': 'lang=en'});
	    response.write(html);
	    response.end();
	});
});


var server = http.createServer(router);
server.listen(process.env.PORT || 3000, function(){
  console.log('listening on', server.address().port);
});