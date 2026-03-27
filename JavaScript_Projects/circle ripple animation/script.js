function createCircle(x, y) {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  circle.style.left = x + "px";
  circle.style.top = y + "px";

  document.body.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 1000);
}

// Create circle on mouse move
document.addEventListener("mousemove", (e) => {
  createCircle(e.clientX, e.clientY);
});