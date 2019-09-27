function setCopyRightDate() {
    $('#copyrightDate').text(new Date().getFullYear());
}

function scrollToId(id) {
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top - 50
    }, 2000);
}

var wow = new WOW({
    mobile: false
});
