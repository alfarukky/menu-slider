const navBtn = document.getElementById("nav-toggle");
const openModel = document.getElementById("open-modal");
const closeModel = document.getElementById("close-modal");
const modal = document.getElementById("modal");

navBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

openModel.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

closeModel.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

window.addEventListener("click", (e) => {
  e.target === modal ? modal.classList.remove("show-modal") : false;
});
