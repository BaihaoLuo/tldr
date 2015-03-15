app.controller("loginController", function($scope, $http) {

    $scope.login = function(){
      $http.post("/login", {
        email: $scope.email,
        password: $scope.password
      }).success(function(response) {
        console.log(response);
        location.href = "/";
      }).error(function(response) {
        console.log(response);
      })
    }
});
