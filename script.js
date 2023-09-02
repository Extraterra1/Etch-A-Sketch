for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("tile");
  document.querySelector(".container").appendChild(div);
}

const handleHover = (e) => {
  e.target.classList.add("active");
};

const handleNewGridClick = (e) => {
  const gridSize = prompt("Enter the size of your new grid");
  document.querySelector(".container").innerHTML = "";
  for (let i = 0; i < gridSize ** 2; i++) {
    const divToAdd = document.createElement("div");
    divToAdd.classList.add("tile");
    divToAdd.style.flexBasis = Math.floor(500 / gridSize) + "px";
    divToAdd.addEventListener("mouseenter", handleHover);
    document.querySelector(".container").append(divToAdd);
  }
};

const eraseTrail = (e) => {
  document.querySelectorAll(".tile").forEach((el) => el.classList.remove("active"));
};

document.querySelectorAll(".tile").forEach((el) => {
  el.addEventListener("mouseenter", handleHover);
});

document.querySelector(".newGrid").addEventListener("click", handleNewGridClick);
document.querySelector(".clear").addEventListener("click", eraseTrail);
