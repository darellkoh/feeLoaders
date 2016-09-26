app.directive('order', function(OrderFactory, ProductsFactory){
  return {
    restrict: 'E',
    scope: { //is there a point to isolating the scope here? Just for safety -- KHGB
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
        <button ng-click="submitOrder(makeItRain)" class="btn btn-primary waves-effect waves-light toggle-section">Proceed to Checkout</button>
      </div>
    `, //sooooo much HTML in the JS file. Modularize this by making it a file and using templateUrl -- KHGB
    controller: function($scope){ //why controller and link here? I'm not seeing the difference -- KHGB
      $scope.subTotal = OrderFactory.getSubTotal; //same comment as scope.cart -- KHGB
    },
    link: function(scope){
      scope.cart = OrderFactory.getCart; //scope.cart is a function -- think of naming; getCart is a verb for a function (invoking in the template); cart is a noun that should already be an array or object -- KHGB
      scope.submitOrder = OrderFactory.submitOrder;
      scope.makeItRain = makeItRain;

      function makeItRain(){
        angular.element("#botImageEnd").css({
          "animation": "stephRoll 2s linear",
        })

        angular.element('#money').css({
          "display": "block",
          "background-image": "url('dollars/dollar01.png'), url('dollars/dollar02.png'), url('dollars/dollar03.png')",
          "animation": "snow 3s linear",
          "-webkit-animation": "snow 3s linear",
          "z-index": "980"
        }) //consider using a ng-class or ng-style -- KHGB
        setTimeout(function(){
          // angular.element("#botImageEnd").hide();
          angular.element("#money").hide();
        },3000)
      }
    }
  }
})





