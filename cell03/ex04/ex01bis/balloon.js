$(document).ready(function () {
    const $balloon = $('#balloon');
    const colors = ['red', 'green', 'blue'];
    let colorIdx = 0;
    let size = 200;
    function render() {
        $balloon.css({
            width: size + 'px',
            height: size + 'px',
            backgroundColor: colors[colorIdx]
        });
    }
    $balloon.on('click', function () {
        size += 10;
        if (size > 420) {
            size = 200;
            colorIdx = 0;
        } else {
            colorIdx = (colorIdx + 1) % colors.length;
        }
        render();
    });
    $balloon.on('mouseleave', function () {
        if (size > 200) {
            size -= 5;
            if (size < 200) size = 200;
            colorIdx = (colorIdx - 1 + colors.length) % colors.length;
            render();
        }
    });
});