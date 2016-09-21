
app.config(function($stateProvider){
  $stateProvider.state('AddProduct',{
    url: '/add-product/',
    templateUrl: '/js/admin/admin.addproduct.html',
    controller: 'AdminCtrl',
    resolve: {
    products: function(ProductsFactory){
        return ProductsFactory.getAll();
    },
    categories: function(categoryFactory){
      return categoryFactory.getAll()
    },
    tags: function(tagsFactory){
      return tagsFactory.getAll()
    }
  }
  })

})

app.config(function($stateProvider){
  $stateProvider.state('EditProducts',{
    url: '/edit-products/',
    templateUrl: '/js/admin/admin.editproducts.html',
    controller: 'AdminCtrl',
    resolve: {
      products: function(ProductsFactory){
        return ProductsFactory.getAll();
      },
      categories: function(categoryFactory){
        return categoryFactory.getAll()
      },
      tags: function(tagsFactory){
        return tagsFactory.getAll()
      }
    }
  })

})


