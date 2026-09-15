$(document).ready(function () {
    function showOutput(msg) {
        alert(msg);
        console.log(msg);
    }
    $('#submit-btn').on('click', function () {
        const leftStr = $('#left-member').val().trim();
        const rightStr = $('#right-member').val().trim();
        const op = $('#operator').val();
        if (!/^\d+$/.test(leftStr) || !/^\d+$/.test(rightStr)) {
            alert('Error :(');
            return;
        }
        const left = parseInt(leftStr, 10);
        const right = parseInt(rightStr, 10);
        if ((op === '/' || op === '%') && right === 0) {
            showOutput("It's over 9000!");
            return;
        }
        let res;
        if (op === '+') res = left + right;
        else if (op === '-') res = left - right;
        else if (op === '*') res = left * right;
        else if (op === '/') res = left / right;
        else if (op === '%') res = left % right;
        showOutput(res);
    });
    setInterval(function () {
        alert('Please, use me...');
    }, 30000);
});