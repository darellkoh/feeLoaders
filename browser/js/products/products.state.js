app.config(function($stateProvider){
	$stateProvider.state('products', {
		url: '/products',
		// Stubbing this in for now
		// Will be providing an html file later
		template: `<h1> Welcome to products! </h1>
					{{ products }}`,
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
		// Stubbing this in for now
		// Will be providing an html file later
		template: ` <h1> Welcome to individual product page </h1>
					{{ product }}`,
		controller: 'singleProductCtrl',
		resolve: {
			product: function($stateParams, ProductsFactory){
				return ProductsFactory.getOne($stateParams.id);
			}
		}
	});
});
