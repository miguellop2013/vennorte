'use strict'

var controller = {

		login: function(req,res){
			
			return res.status(200).send(
				{
					usuario: req.params.usuario,
					password: req.params.password
				}
			);
		}

};

module.exports = controller;
