app.config(function($stateProvider){

	$stateProvider.state('products', {
		url: '/products',
		params: { selectedString: '' },
		templateUrl: '/js/products/products.html',
		controller: 'ProductsCtrl',
		resolve: {
			products: function(ProductsFactory){
				return ProductsFactory.getAll();
			}
		}
	});

});

app.config(function($stateProvider){

	$stateProvider.state('singleProduct', {
		url: '/products/:id',
		templateUrl: '/js/products/product.html',
		controller: 'singleProductCtrl',
		resolve: {
			product: function($stateParams, ProductsFactory){
				return ProductsFactory.getOne($stateParams.id);
			}
		}
	});
	
});
