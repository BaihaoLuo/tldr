/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	newArticle: function(req, res) {

	},

	postNewArticle: function(req, res) {

	},

	getArticle: function(req, res) {
		var id = req.param("id");
		return res.view("article", {
			id: id,
			name: "Name test",
			description: "description",
			list: ["test1", "test2", "test3"]
		});
	},

	getAllArticles: function(req, res) {
		res.view("homepage", {});
	}

};
