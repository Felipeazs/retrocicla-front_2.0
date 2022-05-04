$(document).ready(function () {
    var isDisplayed = false;

    console.log(isDisplayed);

    $('#btn_barras').on('click', function () {
        console.log(`Barras isDisplayed: ${isDisplayed}`);
        if (!isDisplayed) {
            $('#contenido').show(300);
            $('#contenido').css({
                'display': 'flex',
                'position': 'absolute',
                'background-color': '#2f355b',
                'top': '140px',
                'filter': 'opacity(90%)',
                'z-index': '2'
            });
            isDisplayed = true;
        }

    });

    document.addEventListener('mousedown', function () {
        console.log(`document isDisplayed: ${isDisplayed}`);
        if (isDisplayed) {
            $('#contenido').hide(300);
            isDisplayed = false;
        }

    })

    var breakpoint = 1000;
    console.log($(window).width());
    $(window).on('resize', function () {
        if ($(window).width() > breakpoint) {
            $('#contenido').removeAttr('style');
            $('#contenido').hide();
            isDisplayed = false;
        }
    })



});