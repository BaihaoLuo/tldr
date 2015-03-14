/**
 * BlogController
 *
 * @description :: Server-side logic for managing blogs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	newBlog: function(req, res) {
		return res.view("newBlog", {});
	},

	postNewBlog: function(req, res) {

	}

};
