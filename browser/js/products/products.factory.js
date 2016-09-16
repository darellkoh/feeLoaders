app.factory('ProductsFactory', function($http){

	var productService = {};

		productService.getAll = function(){
			
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
