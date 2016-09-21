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

      AuthService.login(loginInfo).then(function (user) {
            NavFactory.setLoggedIn(true);
            console.log("USER FROM AUTH LOGIN IN LOGIN DIRECTIVE", user)
            NavFactory.setUser(user)
        }).catch(function () {
            $scope.error = 'Invalid login credentials.';
      });

      $scope.setSignUp = NavFactory.setSignUp;

      }

    }
}
})
