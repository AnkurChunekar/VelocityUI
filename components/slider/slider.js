const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

sliderValue.innerHTML = slider.value;

slider.addEventListener("input", (e) => {
    sliderValue.innerHTML = e.target.value * 50;
});

slider.addEventListener("mousemove", (e) => {
    let outputPercentValue = slider.value;
    let color = `linear-gradient(90deg, var(--primary-color) ${outputPercentValue}%, var(--slider-bg-color) ${outputPercentValue}%)`;
    slider.style.background = color;
});