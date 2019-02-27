'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CuentaSchema = Schema({
	
	correo: 		String,
	rut:			String,
	creacion:		String, //fecha de creacion de la cuenta
	actualizacion:	String, //fecha de la ultima actualizacion
	estatus:		Number //estado de la cuenta 0 = bloqueada/inactiva, 1 = activa, 2 = esperando confirmar correo, 3 = obligar a cambiar contraseña
	
});


module.exports = mongoose.model("Cuenta", CuentaSchema);
