app.controller("categoryController", function($scope, $http) {

    $scope.submit = function(){
      console.log("submit");
      $http.post("/newCategory", {
        category: category.title
      }).success(function(response) {
        console.log(response);
        location.reload();
      }).error(function(response) {
      })
    }

});
