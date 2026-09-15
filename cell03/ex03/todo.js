const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new-btn');
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + expires.toUTCString() + ';path=/;SameSite=Lax';
}
function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
    }
    return null;
}
function saveTodos() {
    const items = [];
    const todoElements = ftList.querySelectorAll('.todo-item');
    for (let i = todoElements.length - 1; i >= 0; i--) {
        items.push(todoElements[i].textContent);
    }
    setCookie('todo_list', JSON.stringify(items), 7);
}
function addTodo(text) {
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo-item';
    todoDiv.textContent = text;
    todoDiv.addEventListener('click', function () {
        if (confirm('Do you want to remove this to-do item?')) {
            todoDiv.remove();
            saveTodos();
        }
    });
    ftList.prepend(todoDiv);
}
newBtn.addEventListener('click', function () {
    const text = prompt('Enter a new TO DO:');
    if (text && text.trim() !== '') {
        addTodo(text.trim());
        saveTodos();
    }
});
window.addEventListener('DOMContentLoaded', function () {
    const saved = getCookie('todo_list');
    if (saved) {
        try {
            const items = JSON.parse(saved);
            items.forEach(function (text) {
                addTodo(text);
            });
        } catch (e) {
            setCookie('todo_list', '', -1);
        }
    }
});