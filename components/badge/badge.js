const demoBadge = document.querySelector("#demo-badge");
const demoBadgeHideBtn = document.querySelector("#demo-badge-hide-btn");


demoBadgeHideBtn.addEventListener("click", () => {
demoBadge.classList.toggle("display-none");
})