app.factory('NavFactory', function(AuthService, $http){
  var signup = false;
  var loggedIn = false;

  return {

    setLoggedIn: function(){
      loggedIn = !loggedIn;
    },


    isLoggedIn : function(){
     return AuthService.isAuthenticated()
            .then(function(user){
              if(!user){
                loggedIn = false;
              }else{
                loggedIn = true;
              }
              return loggedIn;
            })

    },

     getSignup : function(){
      return signup;
     },

     setSignup : function(){
        console.log('got into setSignup')
        signup = true;
      }

  }

})
