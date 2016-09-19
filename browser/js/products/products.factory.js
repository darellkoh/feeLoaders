app.factory('ProductsFactory', function($http, $log){

	var services = {};

		services.getAll = function(){

			return $http.get('/api/products/')
					.then(function(response){
						return response.data;
					})
					.catch($log)
		}

		services.getOne = function(id){
			return $http.get('/api/products/' + id )
						.then(function(response){
							return response.data;
						})
						.catch($log)
		}


	return services;

});
