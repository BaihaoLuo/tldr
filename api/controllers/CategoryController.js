

module.exports = {

  getCategory: function(req, res) {
		var title = req.param("title");
		Category.findOne({title: title})
			.exec(function(error, category) {
				console.log(category);
				if(error) {
					console.log(error);
					return res.view("category", {});
				} else {
					return res.view("category", {category: category});
				}
			});
	},

    newCategory: function(req, res) {
      var category = req.param("categoryTitle");

      Category.create({title: categoryTitle}).exec(function(error, category) {
        if(error) {
          console.log(error);
          return res.send(error);
        } else {
          return res.send(category);
        }
      });
    }
};
