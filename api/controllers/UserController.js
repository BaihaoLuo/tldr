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
		
	}

};
