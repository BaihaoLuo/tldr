app.controller("registerController", function($scope, $http) {

    $scope.register = function() {
      console.log("registering");
      $http.post("/register", {
        email: $scope.email,
        password: $scope.password,
        confirm: $scope.confirmPassword
      }).success(function(response) {
        console.log(response);
        location.href = "/";
      }).error(function(response) {
        console.log(response);
      })
    }

});
