
window.addEventListener('load', (evnt) => {
    document.getElementById("screen").style.cssText = "opacity: 1; transition: 2s; ";
    document.getElementById("scr_span_one").style.cssText = "opacity: 1; left: 15%; top: 15%; transition: 3s; font-size: 3em; ";
    document.getElementById("scr_span_two").style.cssText = "opacity: 1; left: 55%; top: 20%; transition: 5s; font-size: 1.5em; ";
    document.getElementById("scr_span_three").style.cssText = "opacity: 1; left: 25%; top: 35%; transition: 4s; font-size: 2em; ";
    document.getElementById("enter_btn").style.cssText = "opacity: 1; transition: 2s; transition-delay: 5s"
})

document.getElementById("enter_btn").addEventListener('click', () => {
    document.getElementById("screen").style.display = "none";

})




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
    document.getElementById("page_overlay").style.display = "none";
}



const notes_animation = document.querySelectorAll(".note");

let dot_size = [
    { transform: 'scale(1)', opacity: '0', transition: 'ease-in-out', },
    { transform: 'scale(40)', opacity: '.6', },
    { transform: 'scale(80)', opacity: '.9', },
    { transform: 'scale(40)', opacity: '.6', },
    { transform: 'scale(1)', opacity: '0', top: '0', left: '0', transition: 'ease-in-out', },
];

let dot_size_rev = [
    { transform: 'scale(1)', opacity: '0', transition: 'ease-in-out', },
    { transform: 'scale(40)', opacity: '.6', },
    { transform: 'scale(80)', opacity: '.9', },
    { transform: 'scale(40)', opacity: '.6', },
    { transform: 'scale(1)', opacity: '0', bottom: '0', right: '0', transition: 'ease-in-out', },
];

let dot_size_alt = [
    { transform: 'scale(1)', opacity: '0', transition: 'ease-in-out', },
    { transform: 'scale(40)', opacity: '.6', },
    { transform: 'scale(80)', opacity: '.9', },
    { transform: 'scale(40)', opacity: '.6', },
    { transform: 'scale(1)', opacity: '0', top: '0', right: '0', transition: 'ease-in-out', },
];

let note_text_color = [
    { color: 'rgb(45, 45, 45)' },
    { color: 'rgb(235, 235, 235)', transition: 'ease-in-out', duration: '1s' },
    { color: 'rgb(45, 45, 45)' },
];

let img_color_hover = [
    { opacity: '0' },
    { opacity: '1' },
    { opacity: '0' },
];

let img_color_no_hover = [
    { opacity: '1' },
    { opacity: '0' },
    { opacity: '1' },
];

let dot_timing = {
    duration: 3000,
    iteration: 1,
};

let note_text_timing = {
    duration: 3300,
    iteration: 1,
};


for (i = 0; i < notes_animation.length; i++) {
    notes_animation[i].addEventListener('mouseenter', function (event) {

        let k = Math.random() * 20;

        if (k > 15) {
            event.target.querySelector('.backgr_color').animate(dot_size, dot_timing);
        }
        else if (k > 8) {
            event.target.querySelector('.backgr_color').animate(dot_size_rev, dot_timing);
        } else {
            event.target.querySelector('.backgr_color').animate(dot_size_alt, dot_timing);
        };

        event.target.querySelector(".note_text").animate(note_text_color, note_text_timing);
        event.target.querySelector(".note_comment").animate(note_text_color, dot_timing);
        event.target.querySelector(".note_bottom").animate(note_text_color, dot_timing);
        event.target.querySelector(".note_img").animate(img_color_no_hover, dot_timing);
        event.target.querySelector(".note_img_hover").animate(img_color_hover, dot_timing);


    });
}


/*
let form = document.querySelector('form');
form.addEventListener('submit', submit_form);

function submit_form(e) { e.preventDefault(); };
*/

/*


for (i = 0; i < notes_animation.length; i++) {
    notes_animation[i].addEventListener(my_fun(), function (event) {
        console.log("Class removed");
        event.target.querySelector('.backgr_color').classList.remove("run_notes_animation");
    });
}


    x.target.querySelector(".note_text").classList.remove("run_text_animation");
    x.target.querySelector(".note_comment").classList.remove("run_text_animation");
    x.target.querySelector(".note_bottom").classList.remove("run_text_animation");
 
*/

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
let bot_message = "Hello! How can I assist you today?"



chat_send_btn.addEventListener('click', () => {
    if (new_msg.value != '') {
        let new_text_msg = document.createElement('div');
        new_text_msg.classList.add("chat-bubble-me");
        let text_in_msg = document.createTextNode(new_msg.value);
        new_text_msg.appendChild(text_in_msg);
        chat_body.appendChild(new_text_msg);
        new_msg.value = '';
        
        setTimeout(() => {new_text_msg = document.createElement('div');
        new_text_msg.classList.add("chat-bubble-other");
        text_in_msg = document.createTextNode(bot_message);
        new_text_msg.appendChild(text_in_msg);
        chat_body.appendChild(new_text_msg);}, 3000);

    }
})





