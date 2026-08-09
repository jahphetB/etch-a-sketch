const container = document.querySelector(".container");
const gridButton = document.querySelector(".grid-button");

function createGrid(size) {
    container.innerHTML = "";
    const squareSize = 960/size;

    for (let i = 0; i < size * size ; i++) {
        const square = document.createElement("div");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        let opacity = 0;

        square.addEventListener("mouseenter", function () {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);

            square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

            if (opacity < 1) {
                opacity += 0.1;
            }

            square.style.opacity = opacity;
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