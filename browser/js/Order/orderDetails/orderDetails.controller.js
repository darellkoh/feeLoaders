app.controller( 'orderDetailsCtrl', function($scope, $stateParams, orderDetailsFactory) {

	orderDetailsFactory.getOrderById($stateParams.id)
	.then(function(order){
		$scope.order = order;
		$scope.orderItems = order.orderItems;
	});
	
});