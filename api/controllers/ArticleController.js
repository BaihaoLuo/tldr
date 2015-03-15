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
		var text = req.param("text");

		var author = req.param("author");
		var image = req.param("image");

		var descriptionTitle = req.param("descriptionTitle");
		var description = req.param("description");

		Article.create({
			title: title,
			author: author,
			link: link,
			image: image,
			text: text}).exec(function(error, article) {
			if(error){
				console.log(error);
				return res.send(400, error);
			} else {
				console.log("Article successfully created");

				var sys = require('sys')
				var exec = require('child_process').exec;
				var child;

				// executes `pwd`
				child = exec("python test.py " + " \"" + title + "\" \"" + String(text) + "\"", function (error, stdout, stderr) {
					sys.print("python test.py " + title + " " + String(text)+ "\n");
					sys.print('stdout: ' + stdout);
					sys.print('stderr: ' + stderr);
					if (error !== null) {
						console.log('exec error: ' + error);
					}

					Description.create({
						article: article.id,
						title: "summary",
						content: stdout})
					.exec(function(error, description) {
						if(error) {
							console.log(error);
							return res.send(400, error);
						} else {
							console.log("Generated description successfully created");
							return res.send(article);
						}
					})

				});

				// now create the descriptions
				Description.create({
					article: article.id,
					title: descriptionTitle,
					content: description})
				.exec(function(error, description) {
					if(error) {
						console.log(error);
					} else {
						console.log("Description successfully created");

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
		Article.find({}).populate("descriptions").exec(function(error, articles) {
			console.log(articles);
			if(error) {
				console.log(error);
				return res.view("articles", {articles: []});
			} else {
				return res.view("articles", {articles: articles});
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
	},

	searchArticles: function(req, res) {
		var fragment = req.param("fragment");
		Article.find().where({
			title: {
				contains: fragment
			}
		}).exec(function(error, articles) {
			if(error) {
				console.log(error);
				res.send(error);
			} else {
				console.log(articles);
				res.send(articles);
			}
		});
	},

};
