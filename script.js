const container = document.querySelector("#container");
const btn = document.querySelector("button");
let N = 16;

function makeDivs(numDivs) {
    for (let d = 0; d < numDivs; d++) {
        let cells = document.createElement('div');
        cells.style.width = (100 / N + "%")
        cells.addEventListener('mouseenter', () => cells.classList.add('hovered'));
        cells.addEventListener('click', () => cells.classList.remove('hovered'));
        container.appendChild(cells)
    }
}

makeDivs(N * N);

btn.addEventListener('click', () => {
    let input = prompt("Provide the number of squares per side (max 100):");
    let newN = parseInt(input);
    if (isNaN(newN) || newN < 1 || newN > 100) return alert("Invalid input");
    N = newN;
    container.innerHTML = "";
    makeDivs(N * N);
});
