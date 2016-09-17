app.factory('OrderFactory', function($http){
  var showCart = false;
  var order = [];

  return {
    addToCart: function(product){
      order.push(product);
      console.log(order)
    },
    updateCart: function(){

    },
    removeFromCart: function(){

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
