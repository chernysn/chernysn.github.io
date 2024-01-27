window.onscroll = function () {
  const bar = document.getElementById("prog_bar");
  let h = document.documentElement;
  let st = h.scrollTop || document.body.scrollTop;
  let sh = h.scrollHeight || document.body.scrollHeight;
  let percent = (st / (sh - h.clientHeight)) * 100 + 1;
  let roundedPercept = Math.floor(percent);
  bar.style.width = roundedPercept + "%";
};

let chat_btn = document.getElementById("pulse");
let chat = document.getElementById("chat");

chat_btn.addEventListener("click", () => {
  if (chat.style.display == "flex") {
    chat.style.display = "none";
  } else {
    chat.style.display = "flex";
  }
});

let chat_send_btn = document.getElementById("chat_send_btn");
let new_msg = document.getElementById("chat_texting_input");
let chat_body = document.getElementById("chat_body");
let bot_message = [
  "Hello! How can I help you today?",
  "Sure! To estimate the cost of your project, please send me a brief description of your prospective project using the contact form below.",
  "Absolutely, please send me a message using the contact form below and I will respond to you shortly!",
  "If you would like to contact me, please message me using the contact form below. I will respond to you shortly!",
  "I can design both frontend and backend of your project. For specific details, please contact me using the contact form below!",
  "I will be happy to work for you! Please shoot me an email, and I will contact you shortly.",
  "I am happy to help, have a nice day!",
  "I am sorry, I did not catch your question.",
];

let bot_request = [
  ["hello", "hey", "hi"],
  ["price", "cost", "how much", "fees"],
  ["human", "agent", "person"],
  ["contact", "phone", "email"],
  ["frontend", "backend", "front", "back", "fullstack"],
  ["hire", "work", "job"],
  ["thank", "that's all", "bye", "goodbye", "farewell", "that would be all"],
];

new_msg.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    chat_messaging();
  }
});

chat_send_btn.addEventListener("click", () => {
  chat_messaging();
});

function chat_messaging() {
  if (new_msg.value != "") {
    let new_text_msg = document.createElement("div");
    new_text_msg.classList.add("chat-bubble-me");
    let text_in_msg = document.createTextNode(new_msg.value);
    new_text_msg.appendChild(text_in_msg);
    chat_body.appendChild(new_text_msg);
    new_msg.value = "";

    let bot_response = bot_message[7];

    for (i = 0; i < bot_request.length; i++) {
      for (j = 0; j < bot_request[i].length; j++) {
        check = text_in_msg.nodeValue.toLowerCase();
        if (check.includes(bot_request[i][j])) {
          bot_response = bot_message[i];
        }
      }
    }

    setTimeout(() => {
      new_text_msg = document.createElement("div");
      new_text_msg.classList.add("chat-bubble-other");
      text_in_msg = document.createTextNode(bot_response);
      new_text_msg.appendChild(text_in_msg);
      chat_body.appendChild(new_text_msg);
    }, 1000);
  }
}

var form = document.getElementById("form-contact");
var formMessage = document.getElementById("form-message");
var formMessageFailed = document.getElementById("message_failed");
var form_name = document.getElementById("name");
var form_email = document.getElementById("email");
var form_message = document.getElementById("message");

function pop() {
  document.getElementById("page_overlay").style.display = "block";
}

function off() {
  document.getElementById("form-message").style.display = "none";
}

/*
function changeText(i) {
    console.log(i);
    i.style.animation = "animate_text 3s ease-in";
};

function changeColor(note) {
    let backgr = note.querySelector(".backgr_color");
    backgr.style.animation = "animate_notes 3s ease-in";
};
*/

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      return;
    }
  });
});

const hidden_elements = document.querySelectorAll(".hidden");
hidden_elements.forEach((el) => observer.observe(el));
