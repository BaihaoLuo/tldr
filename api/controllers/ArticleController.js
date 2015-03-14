/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	newArticle: function(req, res) {
		return res.view("newArticle", {});
	},

	postNewArticle: function(req, res) {
		var title = req.param("title");
		var link = req.param("link");
		Article.create({title: title, link: link}).exec(function(error, created) {
			if(error){
				console.log(error);
				return res.send(400, {error: error});
			} else{
				console.log("Successfuly created article");
				return res.send(created);
			}
		});
	},

	getArticle: function(req, res) {
		var id = req.param("id");
		Article.findOne({id: id}).exec(function(error, article) {
			console.log(article);
			if(error) {
				console.log(error);
				return res.view("article", {});
			} else {
				res.view("article", {article: article});
			}
		});
	},

	getAllArticles: function(req, res) {
		Article.find({}).exec(function(error, articles) {
			console.log(articles);
			if(error) {
				console.log(error);
				res.view("homepage", {articles: []});
			} else {
				res.view("homepage", {articles: articles});
			}
		});

	}

};
