app.factory('SignUpFactory', function($http, NavFactory){
  return {
    signUp: function(signUpInfo){
      return $http.post('/api/users/', signUpInfo)
              .then(function(user){
                console.log("USER FROM SIGNUP", user);
                NavFactory.setLoggedIn(true);
              }).catch(function(err){
                console.log("err", err) //show it to the user in a meaningful way -- KHGB
              })
    }
  }
})
