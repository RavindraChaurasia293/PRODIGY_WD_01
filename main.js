window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.style.backgroundColor = window.scrollY > 50 ? "#555" : "#333";
});

var navLinks = document.querySelectorAll("nav a");
navLinks.forEach(function(navLink) {
    navLink.addEventListener("mouseover", function() {
        this.style.color = "#ff9900";
    });

    navLink.addEventListener("mouseout", function() {
        this.style.color = "white";
    });
});