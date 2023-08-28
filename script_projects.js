
window.addEventListener('resize', () => {
    var w = window.innerWidth;
    var h = window.innerHeight;
    console.log(w, "and", h)

})


/* HOME BUTTON AND NAVIGATION ============================================================ */

/*
let next_btn = document.getElementById("btn_next_right");
let back_btn = document.getElementById("btn_back_left");
let section_1 = document.getElementById("section_1");
let section_2 = document.getElementById("section_2");
let section_3 = document.getElementById("section_3");
let section_4 = document.getElementById("section_4");
section_1.style.left = "0%";
section_2.style.left = "-100%";
section_3.style.left = "-100%";
section_4.style.left = "-100%";


next_btn.addEventListener('click', () => {

    if (section_1.style.left == "0%") { section_1.style.left = "-100%"; section_2.style.left = "0%"; section_3.style.left = "-100%"; section_4.style.left = "-100%"; }
    else if (section_2.style.left == "0%") { section_1.style.left = "-100%"; section_2.style.left = "-100%"; section_3.style.left = "0%"; section_4.style.left = "-100%"; }
    else if (section_3.style.left == "0%") { section_1.style.left = "-100%"; section_2.style.left = "-100%"; section_3.style.left = "-100%"; section_4.style.left = "0%"; }
    else if (section_4.style.left == "0%") { section_1.style.left = "0%"; section_2.style.left = "-100%"; section_3.style.left = "-100%"; section_4.style.left = "-100%"; }
    else { console.log("Hello") }

})

back_btn.addEventListener('click', () => {

    if (section_1.style.left == "0%") { section_1.style.left = "-100%"; section_2.style.left = "-100%"; section_3.style.left = "-100%"; section_4.style.left = "0%"; }
    else if (section_2.style.left == "0%") { section_1.style.left = "0%"; section_2.style.left = "-100%"; section_3.style.left = "-100%"; section_4.style.left = "-100%"; }
    else if (section_3.style.left == "0%") { section_1.style.left = "-100%"; section_2.style.left = "0%"; section_3.style.left = "-100%"; section_4.style.left = "-100%"; }
    else if (section_4.style.left == "0%") { section_1.style.left = "-100%"; section_2.style.left = "-100%"; section_3.style.left = "0%"; section_4.style.left = "-100%"; }
    else { console.log("Hello") }

})


let home_btn = document.getElementById("home_btn");
home_btn.addEventListener('mouseover', () => {

})

*/

/* CALCULATOR ============================================================
*/

let x = 2
console.log(x)

let optionMenu = document.querySelector(".compounded_select");
let sBtn_text = document.querySelector(".sBtn_text");
let selectBtn = document.querySelector(".compounded_btn");
let options = document.querySelectorAll(".option");
let options_box = document.querySelector(".options");

selectBtn.addEventListener("click", () => {

    options_box.classList.add('active');

});

options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option_text").innerText;
        sBtn_text.innerText = selectedOption;
        options_box.classList.remove("active");

    })
})


function total() {
    let p = document.getElementById("current_investment").value;
    let d = document.getElementById("monthly_deposits").value;
    let R = document.getElementById("rate_of_return").value;
    let n = document.querySelector(".sBtn_text").innerText;

    if (n == "annually") {
        n = 1;
    }

    else if (n == "quaterly") {
        n = 4;
    }

    else if (n == "monthly") {
        n = 12;
    }

    else {
        n = 0;
    }

    let t = document.getElementById("period_months").value;

    p = parseFloat(p);
    R = parseFloat(R);
    n = parseFloat(n);
    t = parseFloat(t);

    let r = R / 100;

    let A = p * (1 + r / n) ** n * t;
    A = Math.floor(A);
    let XY = Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(A);

    document.getElementById("total_final").innerHTML = XY;

}



/* SECOND SECTION ================================================================*/

let date = new Date();
date = date.toString().split(" ");
let today = `${date[2]} ${date[1]} ${date[3]}`;



let input_array = JSON.parse(localStorage.getItem("items")) || [];
display_items(input_array);

console.log(localStorage);

/* LOCAL STORAGE CLEAR, CLOSE */

document.getElementById("clear").addEventListener("click", () => {
    localStorage.clear();
    console.log(localStorage)
    input_array = []
    $('.section_2').load('projects.html #section_2');
    display_items(input_array);

})


/* LOCAL STORAGE AND TODO INPUT */

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

document.getElementById("todo_btn_add").addEventListener('click', () => {
    let input = document.getElementById("todo_input").value;

    if (input == "") {
        let alert = document.getElementById("alert");
        alert.style.display = 'block';
    }
    else {
        let id = Math.floor(Math.random() * 100000)

        let task = {
            id: id,
            name: input,
        }

        create_local_item(task);
        document.getElementById("todo_input").value = "";
    }
})

/* DATE */




function create_local_item(task) {
    input_array.push(task);
    localStorage.setItem("items", JSON.stringify(input_array));
    console.log(localStorage);
    display_items(input_array);
}

function display_items(task) {
    let items = "";
    for (y = 0; y < input_array.length; y++) {
        items += `                        
            <div class="my_todo_items"><span class="today" id="today">${today}</span><span class="items">${task[y].name}</span><button class="remove_item" onclick="delete_btn()"> x </button></div>`
    }
    document.getElementById("my_list").innerHTML = items;
}





function delete_btn() {
    let all_buttons = document.querySelectorAll(".remove_item");
    all_buttons.forEach((item, i) => {
        item.addEventListener('click', () => {
            truly_delete(i)
        })
    })
}

function truly_delete(i) {
    input_array.splice(i, 1);
    localStorage.setItem("items", JSON.stringify(input_array));
    console.log(localStorage);
    input_array = JSON.parse(localStorage.getItem("items"));
    $('.section_2').load('projects.html #section_2');
    console.log(input_array);
    display_items(input_array);



}

















