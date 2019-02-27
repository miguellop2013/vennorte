'use strict'

var express = require("express");
var bodyparser = require("body-parser");
var url = "/api";
var app = express();



//rutas
var rutas_cuenta = require("./routes/cuenta");


//middlewares
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//cors

//rutas
app.use(url+'/cuenta/', rutas_cuenta );

//exportar
module.exports = app;


