const demoSnackbar = document.querySelector("#demo-snackbar");
const demoSnackbarCloseBtn = document.querySelector("#demo-snackbar-close-btn");
const demoSnackbarPreviewBtn = document.querySelector("#demo-snackbar-preview-btn");

demoSnackbarPreviewBtn.addEventListener("click", () => {
    demoSnackbar.classList.toggle("display-none");
});
demoSnackbarCloseBtn.addEventListener("click", () => {
    demoSnackbar.classList.toggle("display-none");
});