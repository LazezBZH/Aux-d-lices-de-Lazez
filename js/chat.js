let chat = document.querySelector(".chat-pop");
let openChatBtn = document.querySelector("#open-chat");
let closeChatBtn = document.querySelector("#close-chat");
let sendChatBtn = document.querySelector("#send-chat");
let consumerMsg = document.querySelector("#consumer-msg");
let displayMsg = document.querySelector("#display-msg");

openChatBtn.addEventListener("click", openChatForm);
closeChatBtn.addEventListener("click", closeChatForm);
sendChatBtn.addEventListener("mouseup", getMsg);

// OUVERTURE CHAT
function openChatForm() {
  chat.style.display = "block";
  openChatBtn.style.display = "none";
  sayHello();
}
// génération du message d'accueil une seule fois à l'ouverture du chat
function once(fn, context) {
  var result;

  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }

    return result;
  };
}
let sayHello = once(function () {
  setTimeout(function () {
    displayMsg.innerHTML += `<li class="user-said"> 
                        <div class="us" ><img src="/assets/icones/chef.png" alt=""></div>
                        <p class="our-message">Bonjour, toute l'équipe de chez Lazez sera heureuse de vous renseigner au plus vite.</p>
                    </li>`;
  }, 300);
});

// FERMETURE CHAT
function closeChatForm() {
  chat.style.display = "none";
  openChatBtn.style.display = "block";
}

// RÉCUPÉRATION DES MESSAGES CLIENTS
function getMsg() {
  if (consumerMsg.value != "") {
    let messageToWrite = consumerMsg.value;
    consumerMsg.value = "";
    displayMsg.innerHTML += `<li class="user-said" id="${messageToWrite}"> <p class="you">Vous</p><p class="user-message">${messageToWrite}</p></li>`;

    displayMsg.scrollTop = displayMsg.scrollHeight;
    displayFakeResponse();
  }
}

// GÉNÉRATION FAKE RÉPONSE
let fakeResponse = [
  "Actuellement en plein rush du service, nous reviendrons vers vous dès que nous aurons fini la vaisselle.",
  "Toute l'équipe de Lazez est en train de faire la sieste, on se réveille et on vous répond.",
  "Hello, je finis de récolter les oeufs de Pic, Puce et Galice et je suis à vous.",
  "Le chef fait actuellement son jogging, encore 1km et il arrive.",
  "Indisponibles pour l'instant, nous sommes en train de chercher des recettes sur Marmiton",
  "Un peu de patience s'il vous plait, je touille la sauce!",
  "Saviez-vous que le temps de cuisson des oeufs durs est de 10 minutes?",
  "Chez Lazez, le client est roi, nous demandons donc à vôtre Majesté d'attendre quelques minutes qu'on puisse vous répondre.",
  "L'équipe de Lazez prend quelques jours de vacances et revient reposée pour vous répondre.",
  ":)",
];
function displayFakeResponse() {
  setTimeout(function () {
    function getRandomInt() {
      return (i = Math.floor(Math.random() * 9));
    }
    getRandomInt();

    displayMsg.innerHTML += `<li class="user-said"> 
                        <div class="us" ><img src="/assets/icones/chef.png" alt=""></div>
                        <p class="our-message">${fakeResponse[i]}</p>
                    </li>`;
    displayMsg.scrollTop = displayMsg.scrollHeight;
  }, 600);
}
