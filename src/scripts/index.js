import '../styles/hoop.sass';

document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Get all "navbar-menu" elements
    var $navBarMenus = Array.prototype.slice.call(document.querySelectorAll('.navbar-menu'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                if ($target) {
                    $target.classList.toggle('is-active');
                }

                if ($navBarMenus.length > 0) {
                    $navBarMenus.forEach(function ($menu) {
                        $menu.classList.toggle('is-active');
                    });
                }


            });
        });
    }



});
