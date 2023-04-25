let homeResa = document.getElementById("home-resa");
let resaBtn = document.getElementById("resaBtn");
let closeForm = document.querySelector(".close-form");
let closeOutput = document.querySelector(".close-output");

let dialog = document.querySelector("#dialog");
let form = document.querySelector(".dialog-form");

let outputDiv = document.querySelector(".output-div");
let outputContainer = document.querySelector(".output-container");
let output = document.querySelector(".output-txt");

let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let email = document.querySelector("#email");
let date = document.querySelector("#date");
let hour = document.querySelector("select");
let quantity = document.querySelector("#quantity");
let textarea = document.querySelector("textarea");

// définir les min et max de l'input date
let dateToday = new Date();
let day = dateToday.getDate();
let month = dateToday.getMonth() + 1;
let year = dateToday.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
let yearMax = year + 1;
let today = year + "-" + month + "-" + day;
let todayMax = yearMax + "-" + month + "-" + day;
date.min = today;
date.max = todayMax;

homeResa.addEventListener("click", openForm);
closeForm.addEventListener("click", closeAll);
closeOutput.addEventListener("click", closeAll);

// ouverture du form
function openForm() {
  dialog.style.display = "block";
}

// définir le texte de l'output
firstname.addEventListener("change", displayOutput);
lastname.addEventListener("change", displayOutput);
email.addEventListener("change", displayOutput);
date.addEventListener("change", displayOutput);
hour.addEventListener("change", displayOutput);
quantity.addEventListener("change", displayOutput);
textarea.addEventListener("change", displayOutput);
resaBtn.addEventListener("click", showOutput);

function displayOutput() {
  // réécriture de la date
  let dateResa = new Date(date.value);
  let dayResa = dateResa.getDate();
  let monthResa = dateResa.getMonth() + 1;
  let yearResa = dateResa.getFullYear();
  switch (monthResa) {
    case 1:
      monthResa = "janvier";
      break;
    case 2:
      monthResa = "février";
      break;
    case 3:
      monthResa = "mars";
      break;
    case 4:
      monthResa = "avril";
      break;
    case 5:
      monthResa = "mai";
      break;
    case 6:
      monthResa = "juin";
      break;
    case 7:
      monthResa = "juillet";
      break;
    case 8:
      monthResa = "août";
      break;
    case 9:
      monthResa = "septembre";
      break;
    case 10:
      monthResa = "octobre";
      break;
    case 11:
      monthResa = "novembre";
      break;
    default:
      monthResa = "décembre";
  }
  if (dayResa < 10) dayResa = "0" + dayResa;

  // singulier ou pluriel selon le nombre de convives
  let persons = "";
  switch (quantity.value) {
    case "1":
      persons = "personne";
      break;
    default:
      persons = "personnes";
  }

  output.innerHTML = `
    <p class="output-p">Bonjour  
    ${firstname.value} 
    , votre réservation pour 
    ${quantity.value} 
    
    ${persons} 
     le 
    ${dayResa} 
  
    ${monthResa} 
    
    ${yearResa} 
     à 
    ${hour.value} 
     a bien été prise en compte</p> <p class="output-p">Vous recevrez prochainement un mail de confirmation à l'adresse: 
    ${email.value} 
    .</p><p class="output-p"> Nous avons hâte de régaler vos papilles!</p> `;
}

function showOutput() {
  outputDiv.classList.add("output-div_reveal");
  outputContainer.classList.add("output-container_reveal");
  output.classList.add("output-txt_reveal");
  dialog.style.display = "none";
}

// quiter le formulaire ou fermer l'output
function closeAll() {
  outputDiv.classList.remove("output-div_reveal");
  outputContainer.classList.remove("output-container_reveal");
  output.classList.remove("output-txt_reveal");
  dialog.style.display = "none";
  form.reset();
}
