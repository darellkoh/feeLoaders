app.factory( 'OrdersFactory', function($http, $log){

	var services = {};

		services.getAll = function(){
			return $http.get('/api/orders')
					.then(function(response){
						return response.data;
					})
					.catch($log) //be careful; if you catch the error here, you are going to want to throw it again so that you can handle it for the user in the controller (i.e. display it the user in a meaningful way -- NOT a log) -- KHGB
		}

	return services;
});