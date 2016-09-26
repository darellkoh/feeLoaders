app.service('OrderFactory', function($http){ //is there a reason you are using a service rather than a factory here? -- KHGB
  var showCart = false;
  var order = [];
  console.log("HERE ORDER")
  var self = this;

    this.sendCartToSession = function(order){
      console.log("order!!!!", order)
      $http.post('/api/orders/?sessionSave=true', order) //having this as a query seems strange, unless you are saving it to the session as well as posting it to the cart, but it seems like it would be a put not a post because you don't want more than one cart I would think. Just thinking about semantically meaningful RESTful routes -- KHGB
      .then(function(orderConf){
      }) //return this promise -- KHGB
    }
    this.getSessionCart = function(){
      return $http.get('/sessionCart')
      .then(function(cart){
       if(cart.data.length > 0)
        order = cart.data
      })
    }
    this.addToCart = function(product){
      if(!product.qty){
        product.qty = 1;
      }else{
        product.qty++;
        return; 
      }
      order.push(product); //it would make more sense to have these two lines inside of the if logic rather than the return from else -- KHGB
      self.sendCartToSession(order);
    }
    this.removeFromCart = function(product){
      var index = order.map(function(item){
        return item.id
      }).indexOf(product.id);
      order.splice(index, 1);
      self.sendCartToSession(order);
    }
    this.totalQuantity = function(){
      var subTotal = order.reduce(function(prev, cur){
        var subTotalLine = cur.qty;
        prev += subTotalLine;
        return prev;
      },0)
      return subTotal;
    }
    this.getSubTotal= function(){
      var subTotal = order.reduce(function(prev, cur){
        var subTotalLine = cur.qty * cur.price;
        prev += subTotalLine;
        return prev;
      },0)
      return subTotal;
    }
    this.increaseQty = function(product){
      console.log("THIS", this) //no logs in master :) -- KHGB
      product.qty++;
      self.sendCartToSession(order); //this should be a promise, return it so you don't have race conditions. Same for everywhere else I see it -- KHGB
    }
    this.decreaseQty = function(product){
      if(product.qty > 0){
        product.qty--;
        self.sendCartToSession(order);
      }
      if(product.qty === 0){
        delete product.qty;
        self.removeFromCart(product);
        self.sendCartToSession(order);
      }

    }
    this.getCart =  function(){
      return order;
    }
    this.getShowCart = function(){
      return showCart;
    }
    this.toggleShowCart = function(){
      if(showCart === false){
        showCart = true;
      } else {
        showCart = false;
      }
    }
    this.setShowCart = function(value){
      if(value === undefined){
        value = !showCart;
      }else{
        showCart = value;
      }
    }
    this.submitOrder = function(cb){
      console.log('submitting order');
      if(order.length === 0){ //if (!order.length) -- KHGB
        return;
      } else {
          $http.post('/api/orders', order) //make sure to return promises to prevent race conditions -- KHGB
          .then(function(response){
            console.log('orderrrrr', order);
            if(response.status === 201){
              order = [];
              cb();
            }
          })
      }
    }
})
