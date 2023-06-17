const todoTask = document.getElementById("Additems");

document.getElementById("Addbtm").addEventListener('click', () => {
    if (todoTask.value.length === 0) {
        alert("Please enter your task...!");
    } else {
        const text = todoTask.value;
        const Ele = document.createElement("div");
        Ele.textContent = text;
        const delbtn = document.createElement("button");
        delbtn.className = "delete";
        delbtn.innerHTML = '<span class="fa fa-trash-alt"></span>';
        delbtn.addEventListener('click', () => {
            console.log(this);
            console.log(this.parentNode);
            this.parentNode.remove();
        });
        Additems.value='';
        Ele.appendChild(delbtn);
        document.getElementById("task").appendChild(Ele);
    }
});
