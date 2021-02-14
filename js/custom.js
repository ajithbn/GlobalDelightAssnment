function stick_social() {
    var window_top = $(window).scrollTop();
    var siteHeader = $('.siteHeader').innerHeight();
    var videoBanner = $('.videoBanner').innerHeight();
    var totalHeight = parseInt(siteHeader) + parseInt(videoBanner);
    if (window_top > totalHeight) {
        $('.socialIconWrap').addClass('stick');
    } else {
        $('.socialIconWrap').removeClass('stick');
    }
}
$(function () {
    $(window).scroll(stick_social);
    stick_social();
});