fetch('../navbar.html')
    .then(res => res.text())
    .then(data => document.getElementById('navbar').innerHTML = data);

fetch('../footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer').innerHTML = data);


  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

document.addEventListener("DOMContentLoaded", function() {
    const toggler = document.querySelector(".navbar-toggler");
    const navbarMenu = document.querySelector("#navbarMenu");
    const overlay = document.querySelector("#overlay");
    const closeBtn = document.querySelector(".mobile-close-btn");

    const solutionsToggle = document.querySelector("#solutionsToggle");
    const solutionsDropdown = solutionsToggle.closest(".dropdown").querySelector(".dropdown-menu");

    const companyToggle = document.querySelector("#companyToggle");
    const companyDropdown = companyToggle.closest(".dropdown").querySelector(".dropdown-menu");

    // Open/close mobile menu
    toggler.addEventListener("click", function() {
        navbarMenu.classList.toggle("show");
        overlay.classList.toggle("active");
    });

    // Close button click
    closeBtn.addEventListener("click", function() {
        navbarMenu.classList.remove("show");
        overlay.classList.remove("active");
    });

    // Overlay click closes menu
    overlay.addEventListener("click", function() {
        navbarMenu.classList.remove("show");
        overlay.classList.remove("active");
        document.querySelectorAll(".dropdown-menu.show").forEach(menu => menu.classList.remove("show"));
    });

    // Scroll navbar background
    window.addEventListener("scroll", function() {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Mobile dropdown toggles
    solutionsToggle.addEventListener("click", function(e) {
        e.preventDefault();
        solutionsDropdown.classList.toggle("show");
        companyDropdown.classList.remove("show");
    });

    companyToggle.addEventListener("click", function(e) {
        e.preventDefault();
        companyDropdown.classList.toggle("show");
        solutionsDropdown.classList.remove("show");
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function(e) {
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-menu.show").forEach(menu => menu.classList.remove("show"));
        }
    });
});