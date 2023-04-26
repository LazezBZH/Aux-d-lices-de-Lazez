// nav burger en responsive

let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");
let burgerLinks = document.querySelectorAll(".mySidenav li a");

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);
sidenav.addEventListener("click", closeNav);

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}
