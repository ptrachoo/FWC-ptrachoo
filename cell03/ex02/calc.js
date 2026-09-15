function isPositiveInteger(value) {
    return /^\d+$/.test(value.trim());
}
function showOutput(message) {
    alert(message);
    console.log(message);
}
function calculate() {
    const leftStr = document.getElementById('left-member').value;
    const rightStr = document.getElementById('right-member').value;
    const operator = document.getElementById('operator').value;
    if (!isPositiveInteger(leftStr) || !isPositiveInteger(rightStr)) {
        alert('Error :(');
        return;
    }
    const left = parseInt(leftStr, 10);
    const right = parseInt(rightStr, 10);
    if ((operator === '/' || operator === '%') && right === 0) {
        showOutput("It's over 9000!");
        return;
    }
    let result;
    switch (operator) {
        case '+':
            result = left + right;
            break;
        case '-':
            result = left - right;
            break;
        case '*':
            result = left * right;
            break;
        case '/':
            result = left / right;
            break;
        case '%':
            result = left % right;
            break;
    }
    showOutput(result);
}
document.getElementById('submit-btn').addEventListener('click', calculate);
setInterval(function () {
    alert('Please, use me...');
}, 30000);