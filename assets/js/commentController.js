app.controller("commentController", function($scope, $http) {

  var init = function() {
    $scope.comment = "";
    if(isArticle) {
      $http.get("/getArticleComments/" + article.id)
      .success(function(response) {
        $scope.comments = response;
      }).error(function(response) {
        console.log(response);
      });
    } else if(isBlog) {
      $http.get("/getBlogComments/" + blog.id)
      .success(function(response) {
        $scope.comments = response;
      }).error(function(response) {
        console.log(response);
      });
    }
  };

  $scope.submitArticleComment = function() {
    $http.post("/postArticleComment", {
      comment: $scope.comment,
      article: article.id
    }).success(function(response) {
      init();
    }).error(function(response) {
      console.log(response);

    });
  };

  $scope.submitBlogComment = function() {
    $http.post("/postBlogComment", {
      comment: $scope.comment,
      blog: blog.id
    }).success(function(response) {
      init();
    }).error(function(response) {
      console.log(response);

    });
  };

  init();

});
