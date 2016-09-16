app.controller('ProductsCtrl', function($scope, products, $stateParams){

	$scope.products = products;

	$scope.categories = _.uniq(_.pluck(products, 'category'));

	function getCategories(){
		var categoryObj = {};

		$scope.categories.forEach(function(val){
			categoryObj[val] = 0;
		})

		return categoryObj;
	}

	$scope.accumObj = products.reduce(function(prev, cur){
		if(!prev[cur.category]){
			prev[cur.category] = 1;
			return prev
		}
		prev[cur.category]++
		prev["all"]++
		return prev;
	}, getCategories());

	$scope.selected = $stateParams.selectedString; // Initialize to all on initial page load

	$scope.setSelected = function(string){
		$scope.selected = string;
	};

	$scope.isActive = function(string){
		if( string === $scope.selected )
			return 'active';
		else
			return '';
	}
});

app.controller('singleProductCtrl', function($scope, product){
  $scope.product = product;
  var products = [];
  for(var i = 0; i < 4; i++){
    products.push(product)
  }
  $scope.products = products;

  $scope.leaveReview = {};
  $scope.submitReview = function(){
    console.log($scope.leaveReview)
  }

  $scope.reviewArray = [
  {
    title: "title for you",
    rating: 4,
    content: "this is great!",
    user: "Milad Nazeri"
  },
  {
    title: "title title title",
    rating: 2,
    content: "this is fucking great!",
    user: "Joe"
  },
  ]

})
