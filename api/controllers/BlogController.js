/**
 * BlogController
 *
 * @description :: Server-side logic for managing blogs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	getBlog: function(req, res) {
		id = req.param("id");
		Blog.findOne({id: id}).populate("blogSources").exec(function(error, blog) {
			if(error) {
				console.log(error);
				return res.send(error);
			} else {
				console.log(blog);
				return res.view("blog", {blog: blog});
			}
		})
	},

	getAllArticlesAndBlogs: function(req, res) {
		var user = req.session.user;
		Article.find({}).populate("descriptions").exec(function(error, articles) {
			console.log(articles);
			if(error) {
				console.log(error);
				return res.view("homepage", {articles: []});
			} else {

				// now get all blogs
				Blog.find({}).exec(function(error, blogs) {
					if(error) {
						console.log(error);
						res.send(500, error);
					} else {
						console.log(blogs);
						return res.view("homepage", {
							articles: articles,
							blogs: blogs});
					}
				});

			}
		});

	},

	newBlog: function(req, res) {
		return res.view("newBlog", {});
	},

	postNewBlog: function(req, res) {
		var title = req.param("title");
		var content = req.param("content");

		var sources = req.param("sources");

		console.log(req.session.user);

		Blog.create({
			title: title,
			content: content,
			user: req.session.user.id
		}).exec(function(error, blog) {
			if(error){
				console.log(error);
				res.send(error);
			} else {
				console.log(blog);

				// now add the BlogSources
				for(var i=0; i<sources.length; i++) {
					var source = sources[i];
					// somehow add each source to BlogSource synchronously
				}

				res.send(blog);
			}
		});

	}

};
