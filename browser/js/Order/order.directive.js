app.directive('order', function(OrderFactory, ProductsFactory){
  return {
    restrict: 'E',
    scope: {

    },
    template: `

     <div class="row">
     <div class="col-md-2"><h6></h6></div>
     <div class="col-md-3"><h6>description</h6></div>
      <div class="col-md-2" ><h6 class="text-center">qty</h6></div>
     <div class="col-md-1"><h6>item</h6></div>
     <div class="col-md-1"><h6></h6></div>
      <div class="col-md-2" ><h6>sub-total</h6></div>
     <div class="col-md-1"><h6>remove</h6></div>
     </div>

      <order-item ng-repeat="product in cart() track by $index" product="product"></order-item>
      <!-- Subtotal -->
      <br>
      <div class="cart-subtotal space-bottom">
        <div class="column">
          <h3 style="display: inline" class="toolbar-title">Total:</h3>
          <h3 style="display: inline" class="amount">{{subTotal() | priceFilter }}</h3>
        </div>

       <!-- <div class="column">
          <h3 class="amount">{{subTotal() | priceFilter }}</h3>
        </div> -->
      </div><!-- .subtotal -->
      <!-- Buttons -->
      <div class="text-right">
        <a href="#" class="btn btn-default btn-ghost close-dropdown">Continue Shopping</a>
        <button ng-click="submitOrder()" class="btn btn-primary waves-effect waves-light toggle-section">Proceed to Checkout</button>
      </div>
    `,
    controller: function($scope){
      console.log("$scope.cart", $scope.cart)
      $scope.subTotal = OrderFactory.getSubTotal;
    },
    link: function(scope){
      scope.cart = OrderFactory.getCart;
      console.log("scope.cart", scope.cart)
      scope.submitOrder = OrderFactory.submitOrder;
    }
  }
})





