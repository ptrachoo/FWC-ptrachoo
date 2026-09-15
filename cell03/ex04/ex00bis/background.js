$(document).ready(function () {
    function getRandomColor() {
        const hex = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    $('#btn').on('click', function () {
        $('body').css('background-color', getRandomColor());
    });
});