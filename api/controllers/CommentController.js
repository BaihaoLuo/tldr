module.exports = {

  postArticleComment: function(req, res) {
    var content = req.param("comment");
    var article = req.param("article");
		ArticleComment.create({
      content: content,
      article: article,
      user: req.session.user.id
      }).exec(function(error, comment) {
      if(error) {
        console.log(error);
        res.send(400, error);
      } else {
        res.send(comment);
      }
    });
	},

  postBlogComment: function(req, res) {
    var content = req.param("comment");
    var blog = req.param("blog");
		BlogComment.create({
      content: content,
      blog: blog,
      user: req.session.user.id
      }).exec(function(error, comment) {
      if(error) {
        console.log(error);
        res.send(400, error);
      } else {
        res.send(comment);
      }
    });
  },

  getArticleComments: function(req, res) {
		var id = req.param("id");
		ArticleComment.find({article: id}).exec(function(error, comments) {
			if(error){
				res.send(400, error);
			} else {
				res.send(comments);
			}
		});
	},

  getBlogComments: function(req, res) {
		var id = req.param("id");
		BlogComment.find({blog: id}).exec(function(error, comments) {
			if(error) {
				res.send(400, error);
			} else {
				res.send(comments);
			}
		});
	},

};
