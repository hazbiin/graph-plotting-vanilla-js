const gridContainer = document.querySelector(".grid-container");

const maxXSize = document.getElementById("max-X-input");
const maxYSize = document.getElementById("max-Y-input");

const xInput = document.getElementById("x-axis-input");
const YInput = document.getElementById("y-axis-input");

const actionBtn = document.getElementById("draw-mark-clear-btn");
const resetBTn = document.getElementById("reset-btn");


let drawState = true;
let markState = false;

if(drawState) {
    xInput.disabled = true;
    YInput.disabled = true;
}

actionBtn.addEventListener("click", () => {
    const maxX = Number(maxXSize.value); //row size
    const maxY = Number(maxYSize.value); //column size

    if(drawState){
        if(!maxX || !maxY || (maxX <= 0) || (maxY <= 0)) {
            alert("Invalid grid dimensions specified!");
            return;
        }

        // in grid rows and columns are flipping
        gridContainer.style.gridTemplateRows = `repeat(${maxY}, minmax(10px, 50px))`;
        gridContainer.style.gridTemplateColumns = `repeat(${maxX}, minmax(10px, 50px))`;
        gridContainer.innerHTML = "";

        // populating with blocks 
        for(let i = maxY - 1; i >= 0; i--) { //row
            for(let j = 0; j < maxX; j++) { //column
                const block = document.createElement("div");
                block.classList.add('block');
                block.dataset.xy = `${j},${i}`;
                block.textContent = `${j},${i}`;
                gridContainer.appendChild(block);
            }
        }

        drawState = false;
        // markState = true;
        actionBtn.textContent = "Mark";
        actionBtn.classList.add("clicked");
        maxXSize.disabled = true;
        maxYSize.disabled = true;

        xInput.disabled = false;
        YInput.disabled = false;
    }








    // marking logic
    const xToPlot = Number(xInput.value);
    const yToPlot = Number(YInput.value);

    // if((!xToPlot || !yToPlot) && !drawState) {
    //     alert("x and y points are not specified to mark the point!");
    // }

    // validating with correct plot points
    if((xToPlot >= maxX) || (yToPlot >= maxY)) {
        alert("x or y point does not includes in the grid generated");
        return;
    }

    // only mark if these conditions met
    if(xToPlot!== null && yToPlot!== null && (xToPlot < maxX) && (yToPlot < maxY)) {
        markPoint(xToPlot, yToPlot);
    }
})


function markPoint(x, y) {
    console.log("fun called")
    const blockToColor = gridContainer.querySelector(`[data-xy = "${x},${y}"]`);

    if(x && y && !markState){ 
        blockToColor.style.backgroundColor = "blueviolet";
       
        markState = true;
        actionBtn.textContent = "Clear";
    }else {
        blockToColor.style.backgroundColor = "";

        markState = false;
        actionBtn.textContent = "Mark"
        xInput.value = '';
        YInput.value = '';
    }
}


function mark(x, y) {

}

function clear(x, y) {

}


resetBTn.addEventListener("click", () => {
    if(!drawState || markState) {
        gridContainer.innerHTML = "";
        drawState = true;
        actionBtn.textContent = "Draw";
        actionBtn.classList.remove("clicked");
    
        maxXSize.disabled = false;
        maxYSize.disabled = false;
        maxXSize.value = "";
        maxYSize.value = "";
    
        xInput.disabled = true;
        YInput.disabled = true;
        
        if(markState) {
            markState = false;
        }
       
        xInput.value = "";
        YInput.value = "";
        xInput.disabled = true;
        YInput.disabled = true;
    }
})