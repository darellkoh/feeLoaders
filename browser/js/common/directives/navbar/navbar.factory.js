app.factory('NavFactory', function(AuthService, $http){
  var signup = false;
  var login = true;
  var loggedIn = false;
  var setUser = null;

  return {
    setUser: function(user){
      setUser = user;
    },
    setLoggedIn: function(value){
      console.log("SETTING THIS!!!")
      signup = false;
      login = !value;
      loggedIn = value;
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

     getSignUp : function(){
      return signup;
     },

     setSignUp : function(value){
        signup = value;
        login = !value;
      },

     getLogin : function(){
      return login;
     },

     setLogin : function(value){
        login = value;
        signup = !value;
      },

     getLoggedIn : function(){
      return loggedIn;
     }
  }

})
