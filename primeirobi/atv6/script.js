
const input = document.getElementById('taskInput');
const btnAdicionar = document.getElementById('addTaskBtn');
const lista = document.getElementById('taskList');


function adicionarTarefa() {
    const texto = input.value.trim();

    if (texto !== "") {
        const novoItem = document.createElement('li');
        novoItem.innerHTML = `
            <input type="checkbox" class="check-task">
            <span class="task-text">${texto}</span>
            <button class="delete-btn">Remover</button>
        `;
        lista.appendChild(novoItem);

        input.value = "";
        input.focus();
    } else {
        alert("Digite alguma tarefa antes de adicionar!");
    }
}


btnAdicionar.addEventListener('click', adicionarTarefa);


input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});

lista.addEventListener('click', function(evento) {
    const elementoClicado = evento.target;

    if (elementoClicado.classList.contains('delete-btn')) {
        elementoClicado.parentElement.remove();
    }

    if (elementoClicado.classList.contains('check-task')) {
        const spanTexto = elementoClicado.nextElementSibling;
        spanTexto.classList.toggle('concluida');
    }
});