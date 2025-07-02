// Dropdown menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".dropdown-toggle");
  const menu = document.querySelector(".dropdown-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
  });

  // Optional: Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("show-menu");
    }
  });
});