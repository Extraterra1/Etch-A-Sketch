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
  if (randomColorActive) return (e.target.style.backgroundColor = getRandomColor());
  e.target.style.backgroundColor = "black";
};

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

const eraseTrail = (e) => {
  document.querySelectorAll(".tile").forEach((el) => el.removeAttribute("style"));
};

document.querySelectorAll(".tile").forEach((el) => {
  el.addEventListener("mouseenter", handleHover);
});

document.querySelector(".newGrid").addEventListener("click", handleNewGridClick);
document.querySelector(".clear").addEventListener("click", eraseTrail);

let randomColorActive = false;
let progressiveDarken = false;

document.querySelector(".randomColor").addEventListener("click", (e) => {
  e.target.classList.toggle("active");
});
