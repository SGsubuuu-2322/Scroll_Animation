// This is the constant containing the box HTML for further modifications...
const boxes = document.querySelectorAll(".box");

// Adding the scroll eventlisteners to the windows...
window.addEventListener("scroll", checkBoxes);

checkBoxes();

// This checkBoxes() function is written for dynamically adding scroll animation to the windows...
function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
