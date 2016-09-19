app.factory('SignUpFactory', function($http, NavFactory){
  return {
    signUp: function(signUpInfo){
      return $http.post('/api/users/', signUpInfo)
              .then(function(user){
                console.log("USER FROM SIGNUP", user);
                NavFactory.setLoggedIn(true);
              }).catch(function(err){
                console.log("err", err)
              })
    }
  }
})
