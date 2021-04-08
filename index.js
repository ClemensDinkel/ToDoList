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
            /*chckBtn.style.display = "none";*/
            incomplete = false;
        } else {
            incompletedTasks.appendChild(listEntry);
            editBtn.style.display = "none" // change this
            incomplete = true
        }
    });

    delBtn.addEventListener("click", function () {
        const listEntry = this.parentNode.parentNode;
        listEntry.remove();
    });

    editBtn.addEventListener("click", function () {

    });
}

addButton.addEventListener("click", addInput);
input.addEventListener("keyup", (e)=>{
    (e.keyCode === 13 ? addInput(e) : null);
})




