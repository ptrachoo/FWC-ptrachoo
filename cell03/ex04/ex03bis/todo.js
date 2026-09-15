$(document).ready(function () {
    const $ftList = $('#ft_list');
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
        const $elements = $ftList.children('.todo-item');
        // Iterate backwards to keep the insertion order correct on prepend
        for (let i = $elements.length - 1; i >= 0; i--) {
            items.push($($elements[i]).text());
        }
        setCookie('todo_list_jquery', JSON.stringify(items), 7);
    }
    function addTodo(text) {
        const $todo = $('<div></div>').addClass('todo-item').text(text);
        $todo.on('click', function () {
            if (confirm('Do you want to remove this to-do item?')) {
                $(this).remove();
                saveTodos();
            }
        });
        $ftList.prepend($todo);
    }
    $('#new-btn').on('click', function () {
        const text = prompt('Enter a new TO DO:');
        if (text && text.trim() !== '') {
            addTodo(text.trim());
            saveTodos();
        }
    });
    const saved = getCookie('todo_list_jquery');
    if (saved) {
        try {
            const items = JSON.parse(saved);
            items.forEach(function (text) {
                addTodo(text);
            });
        } catch (e) {
            setCookie('todo_list_jquery', '', -1);
        }
    }
});