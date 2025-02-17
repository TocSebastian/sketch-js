const container = document.querySelector(".container");
const gridSizeInput = document.getElementById("gridSizeInput");
const generateGridBtn = document.getElementById("generateGrid");

// Function to create the grid
function createGrid(gridSize) {
    // Clear previous grid
    container.innerHTML = "";

    // Set CSS variable for proper size
    container.style.setProperty("--grid-size", gridSize);

    for (let i = 0; i < gridSize * gridSize; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");

        // Add hover effect
        pixel.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "blue";
        });

        container.appendChild(pixel);
    }
}

// Event listener to generate grid on button click
generateGridBtn.addEventListener("click", function () {
    const gridSize = parseInt(gridSizeInput.value);
    
    if (gridSize > 0 && gridSize <= 100) { // Limit size for usability
        createGrid(gridSize);
    } else {
        alert("Please enter a grid size between 1 and 100.");
    }
});
