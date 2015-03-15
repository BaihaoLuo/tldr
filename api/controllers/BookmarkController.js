/**
 * BookmarkController
 *
 * @description :: Server-side logic for managing the relationship between users and bookmarks
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var bookmark = {}

module.exports = {

	bookmark:function(req, res) {
		var user = User;
    var article = Article;

		user.findOne.exec (function (error, user, article) {
			if (error) {
				console.log(error);
				return res.send(400, error);
			}
			else {
				bookmark[key(article)];
				console.log("Sucessfully bookmarked");
				return res.send(article);
			}
		})}
};
