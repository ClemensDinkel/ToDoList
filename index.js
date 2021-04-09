const input = document.querySelector("#input-text");
const addButton = document.getElementById("add-input");
const myArray = [];
const addInput = () => {
    const incompletedTasks = document.getElementById("incomplete-list");
    const completedTasks = document.getElementById("complete-list");

    const newLi = document.createElement("li");
    const text = document.createElement("p");
    const divBtn = document.createElement("div");
    const editBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    const chckBtn = document.createElement("button");


    editBtn.innerHTML = "<i class='fas fa-pencil-alt'></i>";
    delBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";
    chckBtn.innerHTML = "<i class='fas fa-check-square'></i>";

    

    if (input.value !== "") {
        text.innerHTML = input.value;
        window.localStorage.setItem(`${localStorage.length}`,text.innerHTML)
        console.log(localStorage); // delete this after test
        input.value = "";
        incompletedTasks.appendChild(newLi);
        newLi.appendChild(text);
        newLi.appendChild(divBtn);
        divBtn.appendChild(editBtn);
        divBtn.appendChild(delBtn);
        divBtn.appendChild(chckBtn);
        var incomplete = true;
    } else {
        window.alert("Please enter a task");
    }

    chckBtn.addEventListener("click", function () {
        const listEntry = this.parentNode.parentNode;
        listEntry.remove();
        completedTasks.appendChild(listEntry);
        if (incomplete) {
            editBtn.style.display = "none"
            incomplete = false;
        } else {
            incompletedTasks.appendChild(listEntry);
            editBtn.style.display = "block"
            incomplete = true
        }
    });

    delBtn.addEventListener("click", function () {
        const listEntry = this.parentNode.parentNode;
        listEntry.remove();
        localStorage.removeItem(text)
    });

    editBtn.addEventListener("click", function () {
        text.innerText = prompt("Update your task", text.innerHTML);
    });
}

const openPage = () => {
    const incompletedTasks = document.getElementById("incomplete-list");
    const completedTasks = document.getElementById("complete-list");
    for (let i = 0; i <localStorage.length; i++) {
        const newLi = document.createElement("li");
        const text = document.createElement("p");
        const divBtn = document.createElement("div");
        const editBtn = document.createElement("button");
        const delBtn = document.createElement("button");
        const chckBtn = document.createElement("button");

        editBtn.innerHTML = "<i class='fas fa-pencil-alt'></i>";
        delBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";
        chckBtn.innerHTML = "<i class='fas fa-check-square'></i>";

        text.innerHTML = localStorage.getItem(i)
        incompletedTasks.appendChild(newLi);
        newLi.appendChild(text);
        newLi.appendChild(divBtn);
        divBtn.appendChild(editBtn);
        divBtn.appendChild(delBtn);
        divBtn.appendChild(chckBtn);
        var incomplete = true;

        chckBtn.addEventListener("click", function () {
            const listEntry = this.parentNode.parentNode;
            listEntry.remove();
            completedTasks.appendChild(listEntry);
            if (incomplete) {
                editBtn.style.display = "none"
                incomplete = false;
            } else {
                incompletedTasks.appendChild(listEntry);
                editBtn.style.display = "block"
                incomplete = true
            }
        });

        delBtn.addEventListener("click", function () {
            const listEntry = this.parentNode.parentNode;
            listEntry.remove();
            // we could loop through local storage and compare to the value??
        });

        editBtn.addEventListener("click", function () {
            text.innerText = prompt("Update your task", text.innerHTML);
        });
    }
}

addButton.addEventListener("click", addInput);
input.addEventListener("keyup", (e)=>{
    (e.keyCode === 13 ? addInput(e) : null);
})

/*    MediaQuery */


const changePlaceholderText = () => {
    let x = window.matchMedia("(max-width: 400px)")
    if (x.matches) {
        document.getElementsByTagName("input")[0].setAttribute("placeholder", "Task");
    } else {
        document.getElementsByTagName("input")[0].setAttribute("placeholder", "Enter your task");
    }
}

openPage();
changePlaceholderText();
window.addEventListener('resize', changePlaceholderText);
console.log(localStorage)

/*   End Of  MediaQuery */

