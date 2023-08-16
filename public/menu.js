let menuIcon = document.querySelector("#menuIcon");
let menuBar = document.querySelector("#menuBar");

menuIcon.addEventListener("click", menuFunction);

function menuFunction() {
  if (menuBar.classList.contains("left-[-900px]")) {
    menuBar.classList.remove("left-[-900px]");
    menuBar.classList.add("left-[-10px]");
    menuIcon.innerHTML = '<i class="fa-solid fa-xmark text-3xl text-blue-600"></i>';
  } else {
    menuBar.classList.remove("left-[-10px]");
    menuBar.classList.add("left-[-900px]");
    menuIcon.innerHTML = '<i class="fa-solid fa-bars text-3xl text-blue-600"></i>';
  }
}
