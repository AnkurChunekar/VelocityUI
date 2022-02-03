const navMenuIcon = document.querySelector("#nav-menu-icon");
const navDropdownMenu = document.querySelector(".nav-dropdown-menu");

navMenuIcon.addEventListener("click", () => {
navDropdownMenu.classList.toggle("active");
});