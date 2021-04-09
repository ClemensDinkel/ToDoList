
for (let i=1; i<=10;i++) {
    const newLi = document.createElement("li");
    const text = document.createElement("p");
    const divBtn = document.createElement("div");
    const editBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    const chckBtn = document.createElement("button");
    editBtn.innerHTML = "<i class='fas fa-pencil-alt'></i>";
    delBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";
    chckBtn.innerHTML = "<i class='fas fa-check-square'></i>";

    const body = document.getElementsByTagName("body")[0]
    text.innerHTML = "hello world"
    body.appendChild(newLi)
    newLi.appendChild(text)
    newLi.appendChild(editBtn)
    newLi.appendChild(delBtn)
    newLi.appendChild(chckBtn)
    window.localStorage.setItem(`${localStorage.length}`,text.innerHTML)
}

console.log(localStorage)
