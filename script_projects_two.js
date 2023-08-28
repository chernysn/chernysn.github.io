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

let input = document.getElementById("todo_input").value;
let add_task_btn = document.getElementById("todo_btn_add");

add_task_btn.addEventListener('click', () => {

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