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


let add_task_btn = document.getElementById("todo_btn_add");

add_task_btn.addEventListener('click', () => {
    let input = document.getElementById("todo_input").value;
    let planned_date = document.getElementById("todo_date").value;
    if (input == "") {
        let alert = document.getElementById("alert");
        alert.style.display = 'block';
    }
    else {
        let id = Math.floor(Math.random() * 100000)

        let task = {
            id: id,
            name: input,
            planned_date: planned_date,
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
    location.reload()
}

function display_items(task) {
    let items = "";
    for (y = 0; y < input_array.length; y++) {
        items += `                        
            <div class="my_todo_items"><span class="items"> <span class="date"> ${task[y].planned_date} </span> ${task[y].name}</span><button class="remove_item" > x </button></div>`
    }
    document.getElementById("my_list").innerHTML = items;

}




let all_buttons = document.querySelectorAll(".remove_item");

all_buttons.forEach((btn, i) => {

    btn.addEventListener('click', () => {
        console.log("Hello!", btn, i);
        input_array.splice(i, 1);
        localStorage.setItem("items", JSON.stringify(input_array));
        console.log(localStorage);
        input_array = JSON.parse(localStorage.getItem("items"));
        location.reload()
        display_items(input_array);
    })

})




/*
function delete_btn() {

    all_buttons.forEach((item, i) => {
        item.addEventListener('click', () => {
            truly_delete(i)
        })
    })
}

function truly_delete(i) {
       $('.section_2').load('projects.html #section_2');
        console.log(input_array);
}
*/ 