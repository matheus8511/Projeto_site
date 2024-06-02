document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('nav-menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
});
