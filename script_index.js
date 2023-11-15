
window.onscroll = function () {

    const bar = document.getElementById("prog_bar");
    let h = document.documentElement;
    let st = h.scrollTop || document.body.scrollTop;
    let sh = h.scrollHeight || document.body.scrollHeight;
    let percent = st / (sh - h.clientHeight) * 100 + 1;
    let roundedPercept = Math.floor(percent);
    bar.style.width = roundedPercept + "%";
}


function pop() {
    document.getElementById("page_overlay").style.display = "block";
}

function off() {
    document.getElementById("form-message").style.display = "none";
}


let chat_btn = document.getElementById('pulse');
let chat = document.getElementById('chat');

chat_btn.addEventListener('click', () => {
    if (chat.style.display == 'flex') {

        chat.style.display = 'none'
    } else {
        chat.style.display = 'flex'
    }
})

let chat_send_btn = document.getElementById("chat_send_btn");
let new_msg = document.getElementById("chat_texting_input");
let chat_body = document.getElementById("chat_body");
let bot_message = ["Hello! How can I help you today?",
    "Sure! To estimate the cost of your project, please send me a brief description of your prospective project using the contact form below.",
    "Absolutely, please send me a message using the contact form below and I will respond to you shortly!",
    "If you would like to contact me, please message me using the contact form below. I will respond to you shortly!",
    "I can design both frontend and backend of your project. For specific details, please contact me using the contact form below!",
    "I am happy to help, have a nice day!",
    "I am sorry, I did not catch your question."];

let bot_request = [["hello", "hey", "hi"], ["price", "cost", "how much", "fees"], ["human", "agent", "person"],
["contact", "phone", "email"], ["frontend", "backend", "front", "back", "fullstack"],
["thank", "that's all", "bye", "goodbye", "farewell", "that would be all"]];

new_msg.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        chat_messaging();
    }
});


chat_send_btn.addEventListener('click', () => {
    chat_messaging();
}
);


function chat_messaging() {
    if (new_msg.value != '') {
        let new_text_msg = document.createElement('div');
        new_text_msg.classList.add("chat-bubble-me");
        let text_in_msg = document.createTextNode(new_msg.value);
        new_text_msg.appendChild(text_in_msg);
        chat_body.appendChild(new_text_msg);
        new_msg.value = '';

        let bot_response = bot_message[6];

        for (i = 0; i < bot_request.length; i++) {
            for (j = 0; j < bot_request[i].length; j++) {
                check = text_in_msg.nodeValue.toLowerCase();
                if (check.includes(bot_request[i][j])) {
                    bot_response = bot_message[i];
                };
            };
        };

        setTimeout(() => {
            new_text_msg = document.createElement('div');
            new_text_msg.classList.add("chat-bubble-other");
            text_in_msg = document.createTextNode(bot_response);
            new_text_msg.appendChild(text_in_msg);
            chat_body.appendChild(new_text_msg);
        }, 1000);

    }
};



var form = document.getElementById("form-contact");
var formMessage = document.getElementById("form-message");
var formMessageFailed = document.getElementById("message_failed");
var form_name = document.getElementById('name');
var form_email = document.getElementById('email');
var form_message = document.getElementById('message');

function sendMail() {
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    window.location.href = 'mailto:chernysn@gmail.com?subject=The subject - ' + name + ' (' + email + ')' + '&body=' + message;
};


/*
    var formData = new FormData(form);
 
    var xhr = new XMLHttpRequest();
 
    xhr.open("POST", form.action, true);
 
    xhr.send(formData);
 
    xhr.onload = function (e) {
 
        if (xhr.status === 200) {
 
            formMessage.style.display = "block";
            form_name.value = '';
            form_email.value = '';
            form_message.value = '';
 
 
        } else {
 
            var response = JSON.parse(xhr.response);
 
            formMessageFailed.innerHTML = "Error: " + response.error;
 
        }
 
    };
*/




