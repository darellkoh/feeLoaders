app.directive('userLoggedIn', function(NavFactory, AuthService) {
    return {
        restrict: 'E',
        template: `<h3>you got to the user logged in pg</h3>
                   <div class="form-submit">
                   <button ng-click="logOut()" type="submit" class="btn btn-primary btn-block waves-effect waves-light">Log Out</button>
                    </div>`,
    controller: function($scope) {
        $scope.logOut = function() {
            $scope.error = null;
            AuthService.logout().then(function() {
                NavFactory.setLoggedIn()
            }).catch(function() {
                $scope.error = 'Invalid login credentials.';
            });
        }
    }
  }
})
