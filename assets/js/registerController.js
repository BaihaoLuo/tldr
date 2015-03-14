app.controller("registerController", function($scope, $http) {

    $scope.register = function() {
      $http.post("/postLogin", {
        email: $scope.email,
        password: $scope.password,
        confirmPassword: $scope.confirmPassword
      }).success(function(response) {
        console.log(response);
        location.href = "/";
      }).error(function(response) {
        console.log(response);
      })
    }

});
