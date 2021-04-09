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
        input.value = "";
        incompletedTasks.appendChild(newLi);
        newLi.appendChild(text);
        newLi.appendChild(divBtn);
        divBtn.appendChild(editBtn);
        divBtn.appendChild(delBtn);
        divBtn.appendChild(chckBtn);
        var incomplete = true;
        /* myArray.push({id: myArray.length + 1, name: newLi, completedTask: false});
        console.log(myArray);*/
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
    });

    editBtn.addEventListener("click", function () {
        let prt = prompt("Update your task", text.innerHTML);
        text.innerText = prt;
    });
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

changePlaceholderText();
window.addEventListener('resize', changePlaceholderText);


/*   End Of  MediaQuery */

