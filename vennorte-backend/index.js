'use strict'

var mongoose = require("mongoose");
let config = {
	useNewUrlParser: true
};
let url = "mongodb://localhost:27017/citas";

var app = require("./app");
var puerto = 3700;

mongoose.connect(url).then(()=>{
	
	console.log("Conexion establecida, sin contraseña!!!!");
	var express = require("express");
	
	app.listen(puerto, ()=>{
		console.log("servidor en linea");
		
	});
	
}).catch(error=>{

	console.log("Error de conexion: "+error);
	
});
