const input = document.querySelector("#input-text");
const addButton = document.getElementById("add-input");

const addInput = () => {
    const incompletedTasks = document.getElementById("incomplete-list");
    const completedTasks = document.getElementById("complete-list");

    const newLi = document.createElement('li');
    const text = document.createElement("p");
    const divBtn = document.createElement('div');
    const editBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    const chckBtn = document.createElement('button');

    editBtn.innerHTML = '<i class="fas fa-user-edit"></i>';
    chckBtn.innerHTML = '<i class="fas fa-check-square"></i>';
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

    if (input.value !== '') {
        text.textContent = input.value;
        input.value = '';
        incompletedTasks.appendChild(newLi);
        newLi.appendChild(text);
        newLi.appendChild(divBtn);
        divBtn.appendChild(editBtn);
        divBtn.appendChild(chckBtn);
        divBtn.appendChild(delBtn);
    } else {
        window.alert('Please enter a task');
    }
}

addButton.addEventListener('click', addInput);
input.addEventListener('keyup', (e)=>{
    (e.keyCode === 13 ? addInput(e) : null);
})
