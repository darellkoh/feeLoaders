app.directive('randoGreeting', function (RandomGreetings) {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/rando-greeting/rando-greeting.html',
        link: function (scope,e) {
            scope.greeting = RandomGreetings.getRandomGreeting();
              e.css({
                "margin": "500px"
              })
        }
    };

});
