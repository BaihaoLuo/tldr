app.controller("blogSourceController", function($scope, $http) {

  var init = function() {
    for(var i=0; i<blog.blogSources.length; i++) {
      var blogSource = blog.blogSources[i];
      $http.get("/getBlogSource/" + blogSource.id).success(function(response) {
        $scope.blogSources.push(response);
        console.log($scope.blogSources);
      }).error(function(response) {
        console.log(response);
      });
    }
  };

  init();

});
