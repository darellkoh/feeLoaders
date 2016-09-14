app.factory('ProductsFactory', function($http){

	var productService = {};

		productService.getAll = function(){
			console.log('got here')
			return $http.get('/api/products/')
					.then(function(response){
						return response.data;
					})
		}

		productService.getOne = function(id){
			return $http.get('/api/products/' + id )
						.then(function(response){
							return response.data;
						});
		}


	return productService;

});
