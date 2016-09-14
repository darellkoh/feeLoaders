app.directive('navBarUtil', function(){
    return {
        restrict: 'A',
        link: function(s,e,a){
            var toolbarToggle = $('.toolbar-toggle'),
                toolbarDropdown = $('.toolbar-dropdown'),
                toolbarSection = $('.toolbar-section');

            function closeToolBox() {
                toolbarToggle.removeClass('active');
                toolbarSection.removeClass('current');
            }

            toolbarToggle.on('click', function(e) {
                var currentValue = $(this).attr('href');
                if ($(e.target).is('.active')) {
                    closeToolBox();
                    toolbarDropdown.removeClass('open');
                } else {
                    toolbarDropdown.addClass('open');

                    closeToolBox();
                    $(this).addClass('active');
                    $(currentValue).addClass('current');
                }
                e.preventDefault();
            });
            $('.close-dropdown').on('click', function() {
                toolbarDropdown.removeClass('open');
                toolbarToggle.removeClass('active');
                toolbarSection.removeClass('current');
            });

            var toggleSection = $('.toggle-section');

            toggleSection.on('click', function(e) {
                var currentValue = $(this).attr('href');
                toolbarSection.removeClass('current');
                $(currentValue).addClass('current');
                e.preventDefault();
            });
        }
    }
})



