var express = require('express');

var app = express();
app.use(express.static('public'));
app.listen(2999, function(){
	console.log('Express server is up on port 3000');
});