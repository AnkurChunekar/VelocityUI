const lastInputChip = document.querySelector("#demo-chip-container");
const chipInputElement = document.querySelector("#chip-inputElement");
const inputChipConatinerDiv = document.querySelectorAll(".chips-container")[1];
let n = 2;

function createChip(chipLabel) {

    const div = document.createElement("div");
    div.setAttribute("class", "chip-body black-chip")
    const span = document.createElement("span");
    span.innerText = chipLabel;
    const i = document.createElement("i");
    i.setAttribute("class", "fas fa-times close");

    div.appendChild(span);
    div.appendChild(i);

    return div;
}


lastInputChip.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        inputChipConatinerDiv.insertBefore(createChip(chipInputElement.value), inputChipConatinerDiv.childNodes[n]); //childNodes[0]
        chipInputElement.value = "";
        n++;
    }

    const chipsContainerList = document.querySelectorAll(".chip-body");
    chipsContainerList.forEach((chipContItem) => {
        chipContItem.childNodes[1].addEventListener("click", () => chipContItem.remove());
    });
          
});