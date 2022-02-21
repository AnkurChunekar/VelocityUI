const demoAlertContainer = document.querySelector("#demo-alert-container");
const demoAlertCloseBtn = document.querySelector("#demo-alert-close-btn");

demoAlertCloseBtn.addEventListener("click", () => {
    demoAlertContainer.classList.toggle("display-none");
});