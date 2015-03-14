app.controller("newBlogController", function($scope, $http) {

    $scope.submit = function(){
      $http.post("/newBlog", {
        title: $scope.title,
        content: $scope.content
      }).success(function(response) {
        console.log(response);
        location.href = "/blog/" + response.id;
      }).error(function(response) {
        console.log(response);
      })
    }

});
