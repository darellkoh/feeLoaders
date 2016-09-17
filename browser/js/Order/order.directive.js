app.directive('order', function(OrderFactory, ProductsFactory){
  return {
    restrict: 'E',
    scope: {

    },
    template: `

      <div class="toolbar-section" id="cart">
        <div class="shopping-cart">

          <h1>TESTING</h1>

        </div><!-- .shopping-cart -->
      </div><!-- .toolbar-section#cart -->

      <order-item ng-repeat="product in cart track by $index" product="product"></order-item>
      <!-- Subtotal -->
      <div class="cart-subtotal space-bottom">
        <div class="column">
          <h3 class="toolbar-title">Subtotal:</h3>
        </div>
        <div class="column">
          <h3 class="amount">$161.90</h3>
        </div>
      </div><!-- .subtotal -->
      <!-- Buttons -->
      <div class="text-right">
        <a href="#" class="btn btn-default btn-ghost close-dropdown">Continue Shopping</a>
        <a href="#checkout" class="btn btn-primary waves-effect waves-light toggle-section">Proceed to Checkout</a>
      </div>
    `,
    controller: function($scope){
      $scope.cart = OrderFactory.getCart();
    }
  }
})





