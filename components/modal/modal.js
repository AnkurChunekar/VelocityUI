const demoModal = document.querySelector("#demo-modal");
const demoModalPreviewBtn = document.querySelector("#demo-modal-preview-btn");
const demoModalCloseBtn = document.querySelector("#demo-modal-close-btn");

demoModalPreviewBtn.addEventListener("click", () => {
demoModal.classList.toggle("active");
});
demoModalCloseBtn.addEventListener("click", () => {
demoModal.classList.toggle("active");
});