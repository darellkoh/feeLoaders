app.directive("reviewRating", function(){
  return {
    restrict: "E",
    scope: {
      rate: "="
    },
    template: `
    <div class="column pull-right">
      <span class="product-rating text-warning">
        <i class="material-icons star" ng-repeat="t in getTimes(rate) track by $index"></i>
      </span>

    </div>
    `,
    link: function( s, e, a ){
      s.getTimes=function(n){
        return new Array(n);
      }
    }
  }
});
