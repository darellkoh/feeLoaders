app.directive('fullstackLogo', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/fullstack-logo/fullstack-logo.html',
        link: function(s,e,a){
          e.css({
            "width":"50px",
            "height":"50px"
          })
        }
    };
});
