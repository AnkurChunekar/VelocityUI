const navMenuIcon = document.querySelector("#ham-icon");
const navMenuCloseIcon = document.querySelector("#ham-close-icon");
const navSideMenu = document.querySelector("#navigation-ham-menu");

navMenuIcon.addEventListener("click", () => {
    navSideMenu.classList.toggle("active");
});

navMenuCloseIcon.addEventListener("click", () => {
    navSideMenu.classList.toggle("active");
});


