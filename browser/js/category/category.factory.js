'use strict'

app.factory('categoryFactory', function($http, $log){

	var services = {};

		services.getAll = function(){
			return $http.get('/api/category')
					.then(function(response){
						return response.data;
					})
					.catch($log) //careful of catches in factories; you want to make sure to be able to show the user appropriate messages (i.e. catch in controllers) -- KHGB
		}

	return services;
});