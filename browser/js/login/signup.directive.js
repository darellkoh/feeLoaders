app.directive('signup', function(NavFactory, SignUpFactory){
  return {
    restrict: 'E',
    templateUrl: '/js/login/signup.html',
    controller: function($scope){
      $scope.sendSignUp = SignUpFactory.signUp;
      $scope.setSignUp = NavFactory.setSignUp;
    },
    link: function(s, e, a) {

    }
  }
} )
