app.controller("articleController", function($scope, $http) {

    $scope.submit = function(){
      console.log("submit");
      $http.post("/newDescription", {
        article: article.id,
        descriptionTitle: $scope.descriptionTitle,
        description: $scope.description
      }).success(function(response) {
        console.log(response);
        location.reload();
      }).error(function(response) {

      })
    }

});
