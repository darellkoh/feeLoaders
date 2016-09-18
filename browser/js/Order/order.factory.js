app.factory('OrderFactory', function($http){
  var showCart = false;
  var order = [];

  return {
    sendCartToSession: function(order){
      $http.post('/api/orders/?sessionSave=true', order)
      .then(function(orderConf){
      })
    },
    getSessionCart: function(){
      return $http.get('/sessionCart')
      .then(function(cart){
       if(cart.data.length > 0)
        order = cart.data
      })
    },
    addToCart: function(product){
      if(!product.qty){
        product.qty = 1;
      }else{
        product.qty++;
        return;
      }
      order.push(product);
      this.sendCartToSession(order);
    },
    removeFromCart: function(product){
      var index = order.map(function(item){
        return item.id
      }).indexOf(product.id);
      order.splice(index, 1);
      this.sendCartToSession(order);
    },
    totalQuantity: function(){
      var subTotal = order.reduce(function(prev, cur){
        var subTotalLine = cur.qty;
        prev += subTotalLine;
        return prev;
      },0)
      return subTotal;
    },
    getSubTotal: function(){
      var subTotal = order.reduce(function(prev, cur){
        var subTotalLine = cur.qty * cur.price;
        prev += subTotalLine;
        return prev;
      },0)
      return subTotal;
    },
    increaseQty: function(product){
      product.qty++;
      this.sendCartToSession(order);
    },
     decreaseQty: function(product){
      console.log('productttt', product);
      if(product.qty){
        product.qty--;
        this.sendCartToSession(order);
      }
    },
    getCart: function(){
      console.log("running getCart", order)
      return order;
    },
    getShowCart: function(){
      return showCart;
    },
    toggleShowCart: function(){
      console.log("toggling showcarttttt", showCart);
      if(showCart === false){
        showCart = true;
      } else {
        showCart = false;
      }
    },
    setShowCart: function(value){
      if(value === undefined){
        value = !showCart;
      }else{
        showCart = value;
      }
    }
  }
})
