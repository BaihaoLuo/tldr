app.controller("categoryController", function($scope, $http) {

  var init = function() {
    $http.get("/getCategories").success(function(response) {
      $scope.categories = response;
    }).error(function(response) {
      console.log(response);
    })
  };

  $scope.submit = function(){
    console.log("submit");
    $http.post("/newCategory", {
      title: $scope.categoryTitle
    }).success(function(response) {
      console.log(response);
      init();
    }).error(function(response) {
      console.log(response);
    })
  };

  init();

});
