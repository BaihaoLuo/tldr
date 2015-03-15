/**
 * BookmarkController
 *
 * @description :: Server-side logic for managing the relationship between users and bookmarks
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */


module.exports = {

	bookmark:function(req, res) {
		var articleId = req.param("id");
		var userId = req.session.user.id;

		Bookmark.create({user: userId, article: articleId}).exec(function (error, bookmark) {
			if (error) {
				console.log(error);
				return res.send(400, error);
			}
			else {
				res.redirect("/article/" + articleId);
			}
		});
}
}
