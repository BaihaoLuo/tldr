/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	login: function(req, res) {
		return res.view("login");
	},

	postLogin: function(req, res) {

	},

	register: function(req, res) {
		return res.view("register");
	},

	postRegister: function(req, res) {
		var email = req.param("email");
		var password = req.param("password");
		var confirm = req.param("confirm");

		if (password != confirm) {
			console.log("Passwords do not match");
			return res.send(400, "Passwords do not match");
		}

		var bcrypt = require("bcrypt-nodejs");

		var hash = bcrypt.hashSync(password);

		User.create({email: email, password: hash}).exec(function(error, article) {
			if(error){
				console.log(error);
				return res.send(400, error);
			}
			else {
				console.log("Successfully created an account");
			}
		});
	}
};
