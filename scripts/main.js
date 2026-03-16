document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("navbar-placeholder").innerHTML = html;
    });
});

function highlightCurrentNav() {
  var placeholder = document.getElementById("navbar-placeholder");
  if (!placeholder) return;

  var navLinks = placeholder.querySelectorAll(".nav-link");
  if (navLinks.length === 0) {
    setTimeout(highlightCurrentNav, 100);
    return;
  }

  var currentPath = window.location.pathname.replace(/\/$/, "");

  navLinks.forEach(function (link) {
    var linkPath = link.pathname.replace(/\/$/, "");
    if (linkPath === currentPath) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
}

// Run the function after page is ready
document.addEventListener("DOMContentLoaded", highlightCurrentNav);
