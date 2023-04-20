function initPeople() {
  fetch("/people.json")
    .then((response) => response.json())
    .then((data) => {
      let staffs = [];
      staffs = data.staffs;
      let products = [];
      products = data.products;

      renderStaffs(staffs);
      renderProducts(products);
    });
}

function renderStaffs(staffs) {
  const staffsSection = document.querySelector("#staffs");

  staffsSection.innerHTML = `<h3 class="heading-4">Nos bouilles:</h3><div class="divStaffsThumbs"></div>`;
  const divStaffsThumbs = document.querySelector(".divStaffsThumbs");
  for (let i = 0; i < staffs.length; i++) {
    let staff = staffs[i];
    divStaffsThumbs.innerHTML += `<figure class="thumbnail">
    <img src="${staff.image}"
         alt="${staff.name}">
    <figcaption>                        
    <h4 class="thumbnail-title" > ${staff.name}</h4>
    <p class="thumbnail-description " >${staff.job}</p>
    <p class="devise">Devise: " ${staff.devise}"</p>
    </figcaption>
</figure>
`;
  }
}
function renderProducts(products) {
  const productsSection = document.querySelector("#products");

  productsSection.innerHTML = `<h3 class="heading-5">Nos producteurs et fournisseurs</h3><div class="divProductsThumbs"></div>`;
  const divProductsThumbs = document.querySelector(".divProductsThumbs");
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    divProductsThumbs.innerHTML += `<figure class="thumbnail">
    <img src="${product.image}"
         alt="${product.name}">
    <figcaption>                        
    <h4 class="thumbnail-title" > ${product.name}</h4>
    <p class="thumbnail-description" >${product.product}</p>
    <p class="city">${product.city}</p>
    </figcaption>
</figure>
`;
  }
}

initPeople();
