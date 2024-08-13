document.getElementById('navbarToggle').addEventListener('click', function() {
    let menu = document.getElementById('navbarMenu');
    menu.classList.toggle('active');
});

// Close the menu when a link is clicked
let menuLinks = document.querySelectorAll('.navbar-menu a');
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        let menu = document.getElementById('navbarMenu');
        menu.classList.remove('active');
    });
});