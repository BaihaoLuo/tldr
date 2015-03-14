module.exports = {

  getCategories: function(req, res) {
		Category.find({}).exec(function(error, categories) {
				console.log(categories);
				if(error) {
					console.log(error);
					return res.send(500);
				} else {
					return res.send(categories);
				}
		});
	},

  newCategory: function(req, res) {
    var title = req.param("title");

    Category.create({title: title}).exec(function(error, category) {
      if(error) {
        console.log(error);
        return res.send(error);
      } else {
        return res.send(category);
      }
    });
  }
};
