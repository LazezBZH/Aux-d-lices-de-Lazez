let homeResa = document.getElementById("home-resa");
const dialog = document.querySelector("dialog");
let outputBox = document.querySelector("output");

let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let email = document.querySelector("#email");
let date = document.querySelector("#date");
let hour = document.querySelector("select");
let quantity = document.querySelector("#quantity");
let textarea = document.querySelector("textarea");

let resaBtn = document.getElementById("resaBtn");
let outputDiv = document.querySelector(".output-div");
let outputContainer = document.querySelector(".output-container");

let addToCalendar = document.querySelector("add-to-calendar-button");

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

// ouverture du form
homeResa.addEventListener("click", coucou);
function coucou() {
  console.log("coucou");
}
homeResa.addEventListener("click", openForm);
function openForm() {
  dialog.showModal();
}

// définir le texte de l'output
firstname.addEventListener("change", displayOutput);
lastname.addEventListener("change", displayOutput);
email.addEventListener("change", displayOutput);
date.addEventListener("change", displayOutput);
hour.addEventListener("change", displayOutput);
quantity.addEventListener("change", displayOutput);
textarea.addEventListener("change", displayOutput);

function displayOutput(e) {
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

  resaBtn.value =
    "Bonjour " +
    firstname.value +
    ", votre réservation pour " +
    quantity.value +
    " " +
    persons +
    " le " +
    dayResa +
    " " +
    monthResa +
    " " +
    yearResa +
    " à " +
    hour.value +
    " a bien été prise en compte, vous recevrez prochainement un mail de confirmation à l'adresse: " +
    email.value +
    ". Nous avons hâte de régaler vos papilles! ";
}

// quiter le formulaire ou fermer l'output
dialog.addEventListener("close", function onClose() {
  outputDiv.classList.add("output-div_reveal");
  outputContainer.classList.add("output-container_reveal");
  outputBox.value = dialog.returnValue;
});

let closeForm = document.querySelector(".close-form");
let closeOutput = document.querySelector(".close-output");
closeForm.addEventListener("click", closeAll);
closeOutput.addEventListener("click", closeAll);
function closeAll() {
  location.reload();
}
