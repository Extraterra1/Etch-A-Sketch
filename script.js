//Global Variables
let randomColorActive = false;
let progressiveDarken = false;
let curBrightness = 10;

//Create Grid Div
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("tile");
  document.querySelector(".container").appendChild(div);
}

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;

  return `rgb(${r}, ${g}, ${b})`;
};

const handleHover = (e) => {
  let bgColor = "black";
  if (progressiveDarken) {
    e.target.style.filter = `brightness(${curBrightness / 10})`;
    if (curBrightness > 0) --curBrightness;
    bgColor = "white";
  }
  if (randomColorActive) bgColor = getRandomColor();
  e.target.style.backgroundColor = bgColor;
};

//Create new grid
const handleNewGridClick = (e) => {
  const errMessage = document.querySelector("h4");
  if (errMessage) errMessage.remove();
  let gridSize = prompt("Enter the size of your new grid (max 100)");
  if (!(gridSize > 0 && gridSize <= 100)) {
    const el = document.createElement("h4");
    el.textContent = "Invalid Grid Size, defaulting to 16x16 grid";
    document.querySelector(".title").appendChild(el);
    gridSize = 16;
  }

  document.querySelector(".container").innerHTML = "";
  for (let i = 0; i < gridSize ** 2; i++) {
    const divToAdd = document.createElement("div");
    divToAdd.classList.add("tile");
    divToAdd.style.flexBasis = Math.floor(500 / gridSize) + "px";
    divToAdd.addEventListener("mouseenter", handleHover);
    document.querySelector(".container").append(divToAdd);
  }
};

const clearBoard = (e) => {
  document.querySelectorAll(".tile").forEach((el) => el.style.removeProperty("background-color"));
};

const handleToggleableClick = (e) => {
  if (e.target.textContent === "Random Colors") randomColorActive = !randomColorActive;
  if (e.target.textContent === "Darken") {
    progressiveDarken = !progressiveDarken;
    curBrightness = 10;
  }
  e.target.classList.toggle("active");
};

document.querySelectorAll(".tile").forEach((el) => el.addEventListener("mouseover", handleHover));
document.querySelector(".newGrid").addEventListener("click", handleNewGridClick);
document.querySelector(".clear").addEventListener("click", clearBoard);
document.querySelectorAll(".toggleable").forEach((el) => el.addEventListener("click", handleToggleableClick));
