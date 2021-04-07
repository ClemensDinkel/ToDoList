const input = document.querySelector("#input-text");
const addButton = document.getElementById("add-input");

const addInput = () => {
    const incompletedTasks = document.getElementById("incomplete-list");
    const completedTasks = document.getElementById("complete-list");

    const newLi = document.createElement('li');
    const editbtn = document.createElement('button');
    const delbtn = document.createElement('button');
    const chckbtn = document.createElement('button');

    editbtn.innerHTML = '<i class="fas fa-user-edit"></i>';
    chckbtn.innerHTML = '<i class="fas fa-check-square"></i>';
    delbtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

    if (input.value !== '') {
        newLi.textContent = input.value;
        input.value = '';
        incompletedTasks.appendChild(newLi);
        incompletedTasks.appendChild(editbtn);
        incompletedTasks.appendChild(chckbtn);
        incompletedTasks.appendChild(delbtn);
    } else {
        window.alert('Please enter a task');
    }
}

addButton.addEventListener('click', addInput);

