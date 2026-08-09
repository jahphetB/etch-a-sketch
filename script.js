const container = document.querySelector("div");

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");

    square.style.width = "60px";
    square.style.height = "60px";

    square.addEventListener("mouseenter", function () {
        square.style.backgroundColor = "black";
    });

    container.appendChild(square);
    
}