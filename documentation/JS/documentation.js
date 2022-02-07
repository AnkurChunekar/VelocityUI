const hamburgerMenuIcon = document.querySelector("#hamburger-menu-icon");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenuIcon.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    hamburgerMenuIcon.classList.toggle("fa-bars");
    hamburgerMenuIcon.classList.toggle("fa-times");
});