app.controller('AdminCtrl', function($scope, products, ProductsFactory, tags, category, $state){

$scope.products = products;
$scope.tags = tags;
$scope.categories = categories;

$scope.toggleEdit = function(){
  if($scope.edit){
    $scope.edit = false;
  }else{
    $scope.edit = true;
  }
}

$scope.addNewProduct = function(product){
  return ProductsFactory.createOne(product)
        .then(function(){
          $state.go('EditProducts');
        })
}

$scope.save = function(product){
  console.log('sssaaaveee', product); //no logs in master -- KHGB
  return ProductsFactory.updateOne(product)
}

$scope.deleteProduct = function(id){
  return ProductsFactory.deleteOne(id)
   .then(function(){
    return ProductsFactory.getAll()
   })
   .then(function(products){
      console.log("PRODUCTs", products)
      $scope.products = products;
   })
}

})
