app.controller("newArticleController", function($scope, $http) {

    $scope.submit = function(){
      console.log("submit");
      $http.post("/newArticle", {
        title: $scope.title,
        link: $scope.link
      }).success(function(response) {
        console.log(response);
        location.href = "/article/" + response.id;
      }).error(function(response) {

      })
    }

});
