var drive = require("drive-db").load(),
    express = require('express'),
    Router = require('node-simple-router'),
    router = Router(),
    fs = require('fs'),
    app = express();

app.use(express.static(__dirname + '/public'));
app.listen(8080);

drive.update("15YLkKhzlKtB4djYpGyYStBGteiLCKyG9ApsPkEzspy4");

// Creates an array with all the objects from de Database
var sheet = drive.find({ id: { $ne: "" } });

res.json(list);