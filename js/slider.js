// carousel page accueil

(function () {
  myCarousel = function () {
    var carousel = {
      containerCarousel: document.querySelector(".carousel"),
      listCarousel: document.querySelectorAll(".carousel li"),
      itemCarousel: [],
      countLeft: 0,
      countRight: 0,
      maxHeigth: 0,
      pagination: document.createElement("div"),
    };

    function moveLeft() {
      var left = document.querySelector(".left");
      var center = document.querySelector(".center");
      var right = document.querySelector(".right");

      left.innerHTML = carousel.itemCarousel[carousel.countLeft++];
      if (carousel.countLeft === carousel.itemCarousel.length)
        carousel.countLeft = 0;

      carousel.countRight++;
      if (carousel.countRight === carousel.itemCarousel.length)
        carousel.countRight = 0;

      center.className = "left";
      right.className = "center";
      left.className = "right first";
    }

    function moveRight() {
      var left = carousel.containerCarousel.querySelector(".left");
      var center = carousel.containerCarousel.querySelector(".center");
      var right = carousel.containerCarousel.querySelector(".right");

      right.innerHTML = carousel.itemCarousel[carousel.countRight--];
      if (carousel.countRight == -1)
        carousel.countRight = carousel.itemCarousel.length - 1;

      carousel.countLeft--;
      if (carousel.countLeft === -1)
        carousel.countLeft = carousel.itemCarousel.length - 1;

      center.className = "right";
      left.className = "center";
      right.className = "left first";
    }

    function buildCarousel() {
      if (carousel.listCarousel.length > 2) {
        if (carousel.listCarousel.length === 3) {
          carousel.countLeft = 0;
          carousel.countRight = 2;
        } else {
          carousel.countLeft = 3;
          carousel.countRight = carousel.listCarousel.length - 1;
        }

        for (var i = carousel.listCarousel.length - 1; i >= 0; i--) {
          if (carousel.maxHeigth < carousel.listCarousel[i].offsetHeight)
            carousel.maxHeigth = carousel.listCarousel[i].offsetHeight;
          carousel.itemCarousel[i] = carousel.listCarousel[i].innerHTML;
          carousel.listCarousel[i].remove();
        }

        for (var j = 2; j >= 0; j--) {
          carousel.containerCarousel.appendChild(carousel.listCarousel[j]);
        }
        carousel.listCarousel[0].className = "left";
        carousel.listCarousel[1].className = "center";
        carousel.listCarousel[2].className = "right";

        carousel.containerCarousel.style.height = carousel.maxHeigth + "px";

        addPaginator();
      }
    }

    function addPaginator() {
      let btnLeft = document.createElement("div");
      let btnRight = document.createElement("div");

      btnLeft.className = "paginatorBtn";
      btnLeft.innerHTML = `&#9664;`;
      btnLeft.onclick = moveLeft;

      btnRight.onclick = moveRight;
      btnRight.innerHTML = `&#9654;`;
      btnRight.className = "paginatorBtn";

      carousel.pagination.className = "paginator";
      carousel.pagination.appendChild(btnLeft);
      carousel.pagination.appendChild(btnRight);

      carousel.containerCarousel.parentNode.appendChild(carousel.pagination);
    }

    function start() {
      buildCarousel();
      setInterval(moveLeft, 3000);
    }

    start();
  };

  myCarousel();
})();
