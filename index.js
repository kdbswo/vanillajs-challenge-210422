
const color = document.querySelector("body");

function handleResize() {
  let frameList = window.frames.innerWidth;
  console.log(frameList);
  if (frameList < 500 && frameList > 250) {
    color.style.backgroundColor = "#9b59b6";
  } else if (frameList > 501) {
    color.style.backgroundColor = "#f39c12";
  } else {
    color.style.backgroundColor = "#e74c3c";
  }
}

function init() {
  window.addEventListener("resize", handleResize);
}

init();
