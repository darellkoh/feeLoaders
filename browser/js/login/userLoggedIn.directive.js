app.directive('userLoggedIn', function(NavFactory, AuthService) {
    return {
        restrict: 'E',
        template: `<h3>you got to the user logged in pg</h3>
                   <div class="form-submit">
                   <button ng-click="logOut()" type="submit" class="btn btn-primary btn-block waves-effect waves-light">Log Out</button>
                    </div>

                   <button ui-sref="EditProducts" type="submit" class="btn btn-primary btn-block waves-effect waves-light">Edit Products</button>
                    </div>

                     <button ui-sref="AddProduct" type="submit" class="btn btn-primary btn-block waves-effect waves-light">Add New Product</button>
                    </div>

                    <button ui-sref="EditUsers" type="submit" class="btn btn-primary btn-block waves-effect waves-light">Edit Users</button>
                    </div>

                    <button ui-sref="AdminGetOrders" type="submit" class="btn btn-primary btn-block waves-effect waves-light">Review Orders</button>
                    </div>

                     <button ui-sref="UserReviewPastOrders" type="submit" class="btn btn-primary btn-block waves-effect waves-light">Review Past Orders</button>
                    </div>

                    <button ui-sref="UserEditAccount" type="submit" class="btn btn-primary btn-block waves-effect waves-light">Edit Account</button>
                    </div>
                    `,
    controller: function($scope) {
        $scope.logOut = function() {
            $scope.error = null;
            AuthService.logout().then(function() {
                NavFactory.setLoggedIn(false)
            }).catch(function() {
                $scope.error = 'Invalid login credentials.';
            });
        }
    }
  }
})
