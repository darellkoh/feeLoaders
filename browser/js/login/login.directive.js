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
            NavFactory.setLoggedIn(true); //this seems redundant to AuthService functions (isAuthenticated) -- KHGB
            console.log("USER FROM AUTH LOGIN IN LOGIN DIRECTIVE", user)
            NavFactory.setUser(user) //check `onSuccessfulLogin` -- KHGB
        }).catch(function () {
            $scope.error = 'Invalid login credentials.'; //this is a great way to catch errors and show them to the user!! -- KHGB
      });

      $scope.setSignUp = NavFactory.setSignUp;

      }

    }
}
})
