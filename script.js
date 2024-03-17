const container = document.querySelector("#container");

// multiple divs
for (let i = 0; i < 256; i++) {
  const squares = document.createElement("div");
  squares.classList.add("squares");
  container.appendChild(squares);
}
