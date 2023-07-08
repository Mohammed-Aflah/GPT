let menu_btn = document.querySelector("#menu");
let side_bar = document.querySelector(".all");
let close = document.querySelector("#close");
let input = document.getElementById("inpt").value;
let btn = document.querySelector("#btn");
menu_btn.addEventListener("click", () => {
  side_bar.classList.toggle("active");
});
close.addEventListener("click", () => {
  side_bar.classList.remove("active");
});
