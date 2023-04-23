const ratio = 0.2;
// const ratio2 = 0.5;

const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

// const toggleLinks = () => {
//   links.forEach((link) => {
//     link.classList.remove("active");
//   });
// };

const toggleLinks1 = function (entries) {
  const link1 = document.querySelector("#link-1");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      //   console.log("link1");
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link1.classList.add("active");
    }
  });
  //   console.log(toggleLinks1);
};
const toggleLinks2 = function (entries) {
  const link2 = document.querySelector("#link-2");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      //   console.log("link2");
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link2.classList.add("active");
    }
  });
  //   console.log(toggleLinks2);
};
const toggleLinks3 = function (entries) {
  const link3 = document.querySelector("#link-3");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      //   console.log("link3");
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link3.classList.add("active");
    }
  });
  //   console.log(toggleLinks1);
};
const toggleLinks4 = function (entries) {
  const link4 = document.querySelector("#link-4");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      //   console.log("link4");
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link4.classList.add("active");
    }
  });
  //   console.log(toggleLinks1);
};
const toggleLinks5 = function (entries) {
  const link5 = document.querySelector("#link-5");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      //   console.log("link5");
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link5.classList.add("active");
    }
  });
  //   console.log(toggleLinks1);
};
const toggleLinks6 = function (entries) {
  const link6 = document.querySelector("#link-6");
  let homeBtn = document.querySelector(".home button");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      //   console.log("link6");
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link6.classList.add("active");
      // homeBtn.style.top = "60%";
    }
  });
  //   console.log(toggleLinks6);
};

const observer1 = new IntersectionObserver(toggleLinks1, options);
const observer2 = new IntersectionObserver(toggleLinks2, options);
const observer3 = new IntersectionObserver(toggleLinks3, options);
const observer4 = new IntersectionObserver(toggleLinks4, options);
const observer5 = new IntersectionObserver(toggleLinks5, options);
const observer6 = new IntersectionObserver(toggleLinks6, options);

let target1 = document.querySelector(".heading-1");
observer1.observe(target1);
let target2 = document.querySelector(".heading-2");
observer2.observe(target2);
let target3 = document.querySelector(".heading-3");
observer3.observe(target3);
let target4 = document.querySelector(".heading-4");
observer4.observe(target4);
let target5 = document.querySelector(".heading-5");
observer5.observe(target5);
let target6 = document.querySelector(".heading-6");
observer6.observe(target6);
