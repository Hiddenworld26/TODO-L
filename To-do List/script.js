
const inputbox = document.getElementById('ibox');
const todo = document.getElementById('to-do');

const savetodo = () => {
    const listitem = document.querySelectorAll(".list");
    console.log(listitem);
    const data = [];
    listitem.forEach(
        (list) => {
            data.push(list.textContent);
        }
    );
    console.log(data);

    if (data.length === 0) {
        localStorage.removeItem('listitem');
    } else {
        localStorage.setItem("listitem", JSON.stringify(data));
    }
};

const Addtodo = (input) => {
    var list = document.createElement('li');

    list.innerHTML = `
    <div class="list">${input}</div>
    <i class=" fa-solid fa-circle-xmark"></i>
    `;

    list.addEventListener("click", function () {
        this.classList.toggle("done");
        
    });

    list.querySelector('i').addEventListener("click", function () {
        list.remove();
        savetodo();
    });

    todo.appendChild(list);
    savetodo();
};

inputbox.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        Addtodo(this.value);
        this.value = "";
    }
});

(function () {
    const lstodo = JSON.parse(localStorage.getItem("listitem"));
    // if (lstodo === null) {
    //     Addtodo();
    // } else {
        
        lstodo.forEach(
            (lstodo) => {
                Addtodo(lstodo);
            }
        );
    
})();
