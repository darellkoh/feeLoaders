'use strict'

app.factory('categoryFactory', function($http, $log){

	var services = {};

		services.getAll = function(){
			return $http.get('/api/categories')
					.then(function(response){
						return response.data;
					})
					.catch($log)
		}

	return services;
});