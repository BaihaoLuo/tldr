app.controller("newBlogController", function($scope, $http) {

    $scope.submit = function() {

      var blogSources = $scope.blogSources;
      var blogSourceIds = blogSources.map(function(article) {
        return article.id;
      });

      $http.post("/newBlog", {
        title: $scope.title,
        content: $scope.content,
        sources: blogSourceIds,
        image: $scope.image
      }).success(function(response) {
        console.log(response);
        location.href = "/blog/" + response.id;
      }).error(function(response) {
        console.log(response);
      })
    };

    $scope.searchArticles = function(val) {
      console.log("Searching articles with title including: " + val);
      $http.get('/searchArticles/' + val)
      .then(function(response) {
        $scope.searchedArticles = response.data;
      });
    };

    $scope.addBlogSource = function(index) {
      var article = $scope.searchedArticles[index];
      $scope.blogSources.push(article);
    };

});
