// réservation en ligne

let errorFirstname = document.getElementById("error-firstname");
let errorLastname = document.getElementById("error-lastname");
let errorEmail = document.getElementById("error-email");
let errorDate = document.getElementById("error-date");
let errorQuantity = document.getElementById("error-quantity");
let errorHour = document.getElementById("error-hour");
let errorConditions = document.getElementById("error-conditions");

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
let conditions = document.querySelector("#rgpd");

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
  if (screen.width > 730) {
    firstname.focus();
  }
}

// définir le texte de l'output
firstname.addEventListener("keyup", validateFirstname);
lastname.addEventListener("keyup", validateLastname);
email.addEventListener("keyup", validateEmail);
date.addEventListener("change", validateDate);
hour.addEventListener("change", validateHour);
quantity.addEventListener("change", validateQuantity);
conditions.addEventListener("change", validateConditions);
resaBtn.addEventListener("click", displayOutput);

function validateFirstname() {
  if (!firstname.value) {
    errorFirstname.textContent = "* Veuillez renseigner votre prénom.";
    return false;
  } else {
    errorFirstname.textContent = "";
    return true;
  }
}
function validateLastname() {
  if (!lastname.value) {
    errorLastname.textContent = "* Veuillez renseigner votre nom.";
    return false;
  } else {
    errorLastname.textContent = "";
    return true;
  }
}
function validateEmail() {
  let mailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email.value) {
    errorEmail.textContent = "* Veuillez renseigner votre mail.";
    return false;
  } else if (!email.value.match(mailRegex)) {
    errorEmail.textContent = "* Le format de votre mail ne semble pas correct.";
    return false;
  } else {
    errorEmail.textContent = "";
    return true;
  }
}
function validateDate() {
  if (!date.value) {
    errorDate.textContent = "* Veuillez choisir une date.";
    return false;
  } else {
    errorDate.textContent = "";
    return true;
  }
}
function validateHour() {
  if (!hour.value) {
    errorHour.textContent = "* Veuillez choisir une heure.";
    return false;
  } else {
    errorHour.textContent = "";
    return true;
  }
}
function validateQuantity() {
  if (!quantity.value || quantity.value < 1) {
    errorQuantity.textContent = "* Pour combien de personnes?";
    return false;
  } else if (quantity.value > 50) {
    errorQuantity.textContent =
      "* Pour réserver pour plus de 50 personnes merci de nous contacter par téléphone.";
  } else {
    errorQuantity.textContent = "";
    return true;
  }
}
function validateConditions() {
  if (conditions.checked) {
    errorConditions.textContent = " ";
    return true;
  } else {
    errorConditions.textContent =
      "* Vous devez lire et accepter les conditions d'utilisation.";
    return false;
  }
}

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
  let firstnameValide = validateFirstname();
  let lastnameValide = validateLastname();
  let emailValide = validateEmail();
  let dateValide = validateDate();
  let hourValide = validateHour();
  let quantityValide = validateQuantity();
  let conditionsValide = validateConditions();
  let formValide =
    firstnameValide &&
    lastnameValide &&
    emailValide &&
    dateValide &&
    hourValide &&
    quantityValide &&
    conditionsValide;
  if (formValide) {
    showOutput();
  }
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
  errorFirstname.textContent = "";
  errorLastname.textContent = "";
  errorEmail.textContent = "";
  errorDate.textContent = "";
  errorHour.textContent = "";
  errorQuantity.textContent = "";
  errorConditions.textContent = "";
}
