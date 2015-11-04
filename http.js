var http 	 	= require('http'),
	Spreadsheet = require('edit-google-spreadsheet');
	Router   	= require('node-simple-router'),
	router   	= Router(),
	fs       	= require('fs'),
	spreadsheet = [];


/*------------------------------
Parse data: by Victor mothafucker
------------------------------*/

function parse(data) {
    var result = [],
        factory = null;
    Object.keys(data).forEach(function(x) {
        if(x === '1') {
            var keys = Object.keys(data[x]).map(function(key) { return data[x][key]; });
            factory = function(x) {
                var obj = {};
                keys.forEach(function(key, index) {
                    obj[key] = x[index + 1];
                });
                return obj;
            };
        } else {
            result.push(factory(data[x]));
        }
    });
    return result;
}


/*------------------------------
Load Database Spreadsheet
------------------------------*/
Spreadsheet.load({
    debug: true,
    spreadsheetId: '15YLkKhzlKtB4djYpGyYStBGteiLCKyG9ApsPkEzspy4',
    worksheetId: 'od6',

    oauth : {
      email: '108713759324-vv4cguqlanjkto1cmqlo97ke8mivi0lv@developer.gserviceaccount.com',
      keyFile: 'secret.pem'
    }

  }, function sheetReady(err, data) {

  	if(err) throw err;

  	spreadsheet = data;

  });

/*------------------------------
Routes
------------------------------*/

//List Excuses
router.get("/list", function(request, response) {
	spreadsheet.receive(function(err, rows, info) {
		if(err) throw err;

		response.setHeader('Content-Type', 'application/json; charset=utf-8');
		rows = parse(rows);
		response.end(JSON.stringify({ rows }));

    });
});

//View unique
router.get("/list/:id", function(request, response) {

	spreadsheet.receive(function(err, rows, info) {
		var id = parseInt(request.params.id)-1;
		rows = parse(rows);
    rows[id].details = rows[id].details.replace(/\n/g, '<br/>');

		response.end(JSON.stringify( rows[id] ));
	});
});

//Upvote
router.get("/upvote/:id", function(request, response) {

	spreadsheet.receive(function(err, rows, info) {
		var id = parseInt(request.params.id)+1;
		var votes = JSON.stringify(rows[id][5] + 1);
		var obj = {};

		obj[id] = { 5: votes };
		spreadsheet.add(obj);

		spreadsheet.send(function(err) {
      		if(err) throw err;
  		});

	});

  	response.end();
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

//INIT
var server = http.createServer(router);
server.listen(process.env.PORT || 3000, function(){
  console.log('listening on', server.address().port);
});