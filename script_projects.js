
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

let optionMenu = document.querySelector(".compounded_select");
let sBtn_text = document.querySelector(".sBtn_text");
let selectBtn = document.querySelector(".compounded_btn");
let options = document.querySelectorAll(".option");
let options_box = document.querySelector(".options");

selectBtn.addEventListener("click", () => {

    options_box.classList.add('active');

});

options.forEach(options => {
    options.addEventListener("click", () => {
        let selectedOption = options.querySelector(".option_text").innerText;
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



















