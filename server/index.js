var express=require('express');
var morgan=require('morgan');
var mongoose=require('mongoose');
var models=require('../database/index');
var bodyParser = require('body-parser');

var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

var port=process.env.PORT || 8000;

app.use(express.static(__dirname+'/../client/'))
app.use(morgan('dev'));

app.listen(port,function(){
	console.log('Hanan and sarah listeninig on port '+port);
})

app.post('/sth',function(req,res){
	var data = JSON.parse(Object.keys(req.body)[0]);
	var n=data.name;
	var d=data.status;
	console.log(data.name,data.status)
	var newInput = {
 		name:n,
 		status:d
 	}
 	models.User.create(newInput)
 	res.redirect('/')
})