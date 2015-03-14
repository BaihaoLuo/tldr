app.controller("loginController", function($scope, $http) {

    $scope.login = function(){
      $http.post("/postLogin", {
        email: $scope.email,
        password: $scope.password
      }).success(function(response) {
        console.log(response);
        location.reload();
      }).error(function(response) {
        console.log(response);
      })
    }

});
