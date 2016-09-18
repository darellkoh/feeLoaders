app.factory('OrderFactory', function($http){
  var showCart = false;
  var order = [];

  return {
    addToCart: function(product){
      if(!product.qty){
        product.qty = 1;
      }else{
        product.qty++;
        return;
      }
      order.push(product);
      console.log(order)
    },
    updateCart: function(){

    },
    removeFromCart: function(product){
      console.log('hit ittt', product)
      var index = order.map(function(item){
        return item.id
      }).indexOf(product.id);
      console.log('INDEXXXXXX', index);
      order.splice(index, 1);
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
    },
     decreaseQty: function(product){
      console.log('productttt', product);
      if(product.qty){
        product.qty--;
      }
    },
    getCart: function(){
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
