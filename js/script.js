// nav
const links = document.querySelectorAll("nav a");
const toggle = (e) => {
  links.forEach((link) => {
    link.classList.remove("active");
  });
  const element = e.target;
  element.classList.add("active");
};

links.forEach((link) => {
  link.addEventListener("click", toggle);
});

const init = () => {
  const firstLink = links[0];
  firstLink.classList.add("active");
};

init();
