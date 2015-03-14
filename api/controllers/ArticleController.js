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
		var author = req.param("author");

		var descriptionTitle = req.param("descriptionTitle");
		var description = req.param("description");

		Article.create({title: title, link: link}).exec(function(error, article) {
			if(error){
				console.log(error);
				return res.send(400, error);
			} else {
				console.log("Article successfully created");

				// now create the descriptions
				Description.create({
					article: article.id,
					title: descriptionTitle,
					content: description})
				.exec(function(error, description) {
					if(error) {
						console.log(error);
						return res.send(400, error);
					} else {
						console.log("Description successfully created");
						return res.send(article);
					}
				})

			}
		});
	},

	getArticle: function(req, res) {
		var id = req.param("id");
		Article.findOne({id: id}).populate("descriptions")
			.exec(function(error, article) {
				console.log(article);
				if(error) {
					console.log(error);
					return res.view("article", {});
				} else {
					return res.view("article", {article: article});
				}
			});
	},

	getAllArticles: function(req, res) {
		var user = req.session.user;
		Article.find({}).exec(function(error, articles) {
			console.log(articles);
			if(error) {
				console.log(error);
				return res.view("homepage", {articles: []});
			} else {
				return res.view("homepage", {articles: articles});
			}
		});

	},

	newDescription: function(req, res) {
		var article = req.param("article");
		var descriptionTitle = req.param("descriptionTitle");
		var description = req.param("description");

		Description.create({
			article: article,
			title: descriptionTitle,
			content: description})
		.exec(function(error, description) {
			if(error) {
				console.log(error);
				return res.send(error);
			} else {
				return res.send(description);
			}
		});
	}

};
