app.factory('ReviewsFactory', function($http, $log){

  var services = {};

    services.getAll = function(){

      return $http.get('/api/reviews/')
          .then(function(response){
            return response.data;
          })
          .catch($log)
    }

    services.getOne = function(id){
      return $http.get('/api/reviews/' + id )
            .then(function(response){
              return response.data;
            })
            .catch(function(err){
              if (err){
                 return [{}];
              }

            })
    }

    services.postOne = function(review){

              console.log("REVIEW FOR POST ONE", review)
      return $http.post('/api/reviews/', review )
            .then(function(response){
              return response.data;
            })
            .catch($log)
    }


  return services;

});
