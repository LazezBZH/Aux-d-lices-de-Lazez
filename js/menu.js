function initMenu() {
  fetch("/menu.json")
    .then((response) => response.json())
    .then((data) => {
      let entrees = [];
      entrees = data.entrees;
      let plats = [];
      plats = data.plats;
      let desserts = [];
      desserts = data.desserts;

      renderEntrees(entrees);
      renderPlats(plats);
      renderDesserts(desserts);
    });
}

function renderEntrees(entrees) {
  const entreesSection = document.querySelector("#entrees");

  entreesSection.innerHTML = `<h4>Entrées</h4> <p class="price">7€</p><div class="divEntreesThumbs"></div>`;
  const divEntreesThumbs = document.querySelector(".divEntreesThumbs");
  for (let i = 0; i < entrees.length; i++) {
    let entree = entrees[i];
    divEntreesThumbs.innerHTML += `<figure class="thumbnail">
    <img src="${entree.image}"
         alt="${entree.name}">
    <figcaption>                        
    <h5 class="thumbnail-title" > ${entree.name}</h5>
    <p class="thumbnail-description ${entree.name}" >${entree.description}</p>
    <p class="vege">${entree.vege}</p>
    </figcaption>
</figure>
`;
  }
}
function renderPlats(plats) {
  const platsSection = document.querySelector("#plats");

  platsSection.innerHTML = `<h4>Plats</h4> <p class="price">12€</p> <div class="divPlatsThumbs"></div>`;
  const divPlatsThumbs = document.querySelector(".divPlatsThumbs");
  for (let i = 0; i < plats.length; i++) {
    let plat = plats[i];
    divPlatsThumbs.innerHTML += `<figure class="thumbnail">
    <img src="${plat.image}"
         alt="${plat.name}">
    <figcaption>                        
    <h5 class="thumbnail-title" > ${plat.name}</h5>
    <p class="thumbnail-description ${plat.name}" >${plat.description}</p>
    <p class="vege">${plat.vege}</p>
    </figcaption>
</figure>
`;
  }
}
function renderDesserts(desserts) {
  const dessertsSection = document.querySelector("#desserts");

  dessertsSection.innerHTML = `<h4>Desserts</h4><p class="price">7€</p> <div class="divDessertsThumbs"></div>`;
  const divDessertsThumbs = document.querySelector(".divDessertsThumbs");
  for (let i = 0; i < desserts.length; i++) {
    let dessert = desserts[i];
    divDessertsThumbs.innerHTML += `<figure class="thumbnail">
   <img src="${dessert.image}"
         alt="${dessert.name}">
    <figcaption>                        
    <h5 class="thumbnail-title" > ${dessert.name}</h5>
    <p class="thumbnail-description ${dessert.name}" >${dessert.description}</p>
    <p class="vege">${dessert.vege}</p>
    </figcaption>
</figure>
`;
  }
}
initMenu();
