const gridContainer = document.querySelector(".grid-container");

const xInput = document.getElementById("x-axis-input");
const YInput = document.getElementById("y-axis-input");
const generateBtn = document.querySelector(".generate-graph-btn");


document.addEventListener("DOMContentLoaded", () => {
    for(let i = 11; i >= 0 ; i--) { //rows
        for(let j = 0; j < 20; j++) { //columns
            const block = document.createElement("div");
            block.dataset.xy = `${i},${j}`;
            // block.textContent = `${i},${j}`;
            gridContainer.appendChild(block);
        }
    }
})

generateBtn.addEventListener("click", () => {
    const x = xInput.value; // column
    const y = YInput.value; // row  -- height of the bar
    
    const cell = gridContainer.querySelector(`[data-xy="${x},${y}"]`);
    cell.style.backgroundColor = "blueviolet";

    // for(let i = 0; i <= y; i++) { 
    //     const cell = gridContainer.querySelector(`[data-xy="${i},${x}"]`);
    //     cell.style.backgroundColor = "blueviolet";
    // }
})
