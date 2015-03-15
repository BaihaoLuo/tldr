/**
 * BlogController
 *
 * @description :: Server-side logic for managing blogs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	getBlog: function(req, res) {
		id = req.param("id");
		Blog.findOne({id: id}).populate("blogSources")
		.exec(function(error, blog) {
			if(error) {
				console.log(error);
				return res.send(error);
			} else {
				console.log(blog);
				return res.view("blog", {blog: blog});
			}
		})
	},

	getAllBlogs: function(req, res){
		var user = req.session.user;
		Blog.find({}).populate("user").exec(function(error, blogs) {
			if(error) {
				console.log(error);
				res.send(500, error);
			} else {
				console.log(blogs);
				return res.view("blogs", {
					blogs: blogs});
			}
		});
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
				Blog.find({}).populate("user").exec(function(error, blogs) {
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
		var image = req.param("image");
		var sources = req.param("sources");

		Blog.create({
			title: title,
			content: content,
			user: req.session.user.id,
			image: image
		}).exec(function(error, blog) {
			if(error){
				console.log(error);
				res.send(error);
			} else {

				// now add the BlogSources
				for(var i=0; i<sources.length; i++) {
					var source = sources[i];
					BlogSource.create({
						blog: blog.id,
						article: source
					}).exec(function(error, blogSource) {
						if(error) {
							console.log("blogSource failed to be created");
							console.log(error);
						} else {
							console.log("blogSource successfully created");
						}
					});
				}

				res.send(blog);
			}
		});

	},

	getBlogSource: function(req, res) {
		var id = req.param("id");
		BlogSource.findOne({id: id})
		.populate("article")
		.exec(function(error, blogSource) {
			if(error) {
				console.log(error);
				return res.send(400);
			} else {
				return res.send(blogSource);
			}
		})
	}

};
