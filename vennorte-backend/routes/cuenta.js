'use strict'

var express = require("express");
var controller_cuenta = require("../controllers/cuenta");
var router = express.Router();

//para consultar los datos e iniciar sesion
router.get('/login/:usuario/:password', controller_cuenta.login);


module.exports = router;
