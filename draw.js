const ns = "http://www.w3.org/2000/svg";
const canvas = document.querySelector("#canvas");
let color = "black"
let prevX = null
let prevY = null
const rect = canvas.getBoundingClientRect();
canvas.addEventListener("click", (e) => {
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const dot = document.createElementNS(ns, "circle");
    dot.setAttributeNS(null, "cx", x);
    dot.setAttributeNS(null, "cy", y);
    dot.setAttributeNS(null, "r", "25px");
    dot.classList.add("dot");
    canvas.appendChild(dot);


    if (!erase) {
        setTimeout(() => {
            canvas.removeChild(dot);
        }, 300)

        if (prevX != null) {
            const line = document.createElementNS(ns, "line");
            line.setAttributeNS(null, "x1", prevX);
            line.setAttributeNS(null, "y1", prevY);
            line.setAttributeNS(null, "x2", x);
            line.setAttributeNS(null, "y2", y);
            line.style.stroke = color;
            canvas.appendChild(line);
            prevX = null;
        }
        else {
            prevX = e.clientX - rect.left;
            prevY = e.clientY - rect.top;
        }
    }
    else {
        dot.style.fill = "white";
        dot.style.stroke = "white";
        prevX = null;
    }
}

)
canvas.addEventListener("mousemove", (e) => {
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    while (document.querySelector("#eraserLocation")) {
        canvas.removeChild(document.querySelector("#eraserLocation"));
    }
    if (erase) {
        const tempdot = document.createElementNS(ns, "circle");
        tempdot.setAttributeNS(null, "cx", x);
        tempdot.setAttributeNS(null, "cy", y);
        tempdot.setAttributeNS(null, "r", "25px");
        tempdot.classList.add("dot");
        tempdot.id = "eraserLocation";
        canvas.appendChild(tempdot);
        if (isErasing) {
            const dot = document.createElementNS(ns, "circle");
            dot.setAttributeNS(null, "cx", x);
            dot.setAttributeNS(null, "cy", y);
            dot.setAttributeNS(null, "r", "25px");
            dot.classList.add("dot");
            canvas.appendChild(dot);
            dot.style.fill = "white";
            dot.style.stroke = "white";
            prevX = null;
        }
    }
    else if (prevX != null) {
        if (document.querySelector("#temp")) canvas.removeChild(document.querySelector("#temp"))
        const tempLine = document.createElementNS(ns, "line");
        tempLine.setAttributeNS(null, "x1", prevX);
        tempLine.setAttributeNS(null, "y1", prevY);
        tempLine.setAttributeNS(null, "x2", x);
        tempLine.setAttributeNS(null, "y2", y);
        tempLine.style.stroke = color;
        tempLine.id = "temp";
        canvas.appendChild(tempLine);
    }
    // setTimeout(()=>{
    //     canvas.removeChild(dot);
    // },300)

}
)

isErasing = false;
// Event listeners
canvas.addEventListener('mousedown', () => {
    isErasing = true;
});
canvas.addEventListener('mouseup', () => {
    isErasing = false;
});

const eraseButton = document.querySelector("#erase");
const penButton = document.querySelector("#pen");
let erase = false;

eraseButton.addEventListener("click", () => {

    erase = true;
})
penButton.addEventListener("click", () => {
    erase = false;
})

const colorInput = document.querySelector("#color");
colorInput.addEventListener("input", () => {
    color = colorInput.value;
})