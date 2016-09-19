app.directive('login', function(NavFactory, AuthService, $state){
  return {
    restrict: 'E',
    templateUrl: '/js/login/login.html',
    controller: function($scope){

      $scope.login = {};
      $scope.error = null;

      // $scope.signup = NavFactory.signup;
      $scope.sendLogin = function (loginInfo) {

      $scope.error = null;

      AuthService.login(loginInfo).then(function () {
            NavFactory.setLoggedIn(true);
        }).catch(function () {
            $scope.error = 'Invalid login credentials.';
      });

      $scope.setSignUp = NavFactory.setSignUp;

      }

    }
}
})
