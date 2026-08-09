const container = document.querySelector(".container");
const gridButton = document.querySelector(".grid-button");

function createGrid(size) {
    container.innerHTML = "";
    const squareSize = 960/size;

    for (let i = 0; i < size * size ; i++) {
        const square = document.createElement("div");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseenter", function () {
            square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}

createGrid(16);

gridButton.addEventListener("click", function () {
    let size = prompt("Enter the number of squares per side (maximum 100):");
    size = Number(size);

    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("please enter a number between 1 and 100.");
    }
})