const container = document.querySelector(".container");

createGrid(16);

function createGrid(squares) {
	for (let i = 0; i < `${squares}` * `${squares}`; i++) {
		const gridSquare = document.createElement("div");
		container.appendChild(gridSquare);
		gridSquare.classList.toggle("grid-square");
		let size = 800 / `${squares}` + "px";
		gridSquare.style.height = size;
		gridSquare.style.width = size;
	}
}
