app.directive('navbar', function ($rootScope, AuthService, AUTH_EVENTS, $state) {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/navbar/navbar.html',
        link: function (scope) {

            scope.items = [
                { label: 'Home', state: 'home' },
                { label: 'Products', state: 'about' },
                { label: 'FAQ', state: 'docs' },
                { label: 'Members Only', state: 'membersOnly', auth: true }
            ];

            // var toolbarToggle = $('.toolbar-toggle'),
            //             toolbarDropdown = $('.toolbar-dropdown'),
            //             toolbarSection = $('.toolbar-section');

            //     function closeToolBox() {
            //         toolbarToggle.removeClass('active');
            //         toolbarSection.removeClass('current');
            //     }

            //     toolbarToggle.on('click', function(e) {
            //         var currentValue = $(this).attr('href');
            //         if($(e.target).is('.active')) {
            //             closeToolBox();
            //             toolbarDropdown.removeClass('open');
            //         } else {
            //             toolbarDropdown.addClass('open');

            //             closeToolBox();
            //             $(this).addClass('active');
            //             $(currentValue).addClass('current');
            //         }
            //         e.preventDefault();
            //     });
            //     $('.close-dropdown').on('click', function() {
            //         toolbarDropdown.removeClass('open');
            //         toolbarToggle.removeClass('active');
            //         toolbarSection.removeClass('current');
            //     });

            //     var toggleSection = $('.toggle-section');

            //     toggleSection.on('click', function(e) {
            //         var currentValue = $(this).attr('href');
            //         toolbarSection.removeClass('current');
            //         $(currentValue).addClass('current');
            //         e.preventDefault();
            //     });

            scope.clickedMenuIcon = false;

            scope.user = null;

            scope.isLoggedIn = function () {
                return AuthService.isAuthenticated();
            };

            scope.logout = function () {
                AuthService.logout().then(function () {
                   $state.go('home');
                });
            };

            var setUser = function () {
                AuthService.getLoggedInUser().then(function (user) {
                    scope.user = user;
                });
            };

            var removeUser = function () {
                scope.user = null;
            };

            setUser();

            $rootScope.$on(AUTH_EVENTS.loginSuccess, setUser);
            $rootScope.$on(AUTH_EVENTS.logoutSuccess, removeUser);
            $rootScope.$on(AUTH_EVENTS.sessionTimeout, removeUser);

        }

    };

});
