const demoAlertContainer = document.querySelector("#demo-alert-container");
const demoAlertCloseBtn = document.querySelector("#demo-alert-close-btn");

demoAlertCloseBtn.addEventListener("click", () => {
    console.log(demoAlertContainer.classList);
    demoAlertContainer.classList.toggle("display-none");
})