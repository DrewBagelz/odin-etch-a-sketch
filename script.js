const container = document.querySelector(".container");
const button = document.querySelector("button");

etchSetUp(16);
button.addEventListener("click", promptUser);

function etchSetUp(squares) {
	for (let i = 0; i < `${squares}` * `${squares}`; i++) {
		const gridSquare = document.createElement("div");
		container.appendChild(gridSquare);
		gridSquare.classList.add("grid-square");
		let size = 800 / `${squares}` + "px";
		gridSquare.style.height = size;
		gridSquare.style.width = size;
		let opacity = 0;
		gridSquare.addEventListener("mouseover", () => {
			opacity += 0.1;
			gridSquare.style.background = `rgb(0 0 0 / ${opacity})`;
		});
	}
}

function promptUser() {
	let squares = Number(prompt("Choose number of squares for each axis:", ""));
	while (squares > 100 || squares < 1 || isNaN(squares)) {
		squares = Number(prompt("Please choose a number from 1 to 100:", ""));
	}
	container.replaceChildren();
	etchSetUp(squares);
}
