$('slider-component ul.multicolumn-list').each(function () {
    $(this).replaceWith($('<div class="ul_">' + this.innerHTML + '</div>'));
});

$('slider-component .ul_ li').each(function () {
    $(this).replaceWith($('<div class="li_">' + this.innerHTML + '</div>'));
});

$('slider-component .ul_').find('.li_').wrapAll("<div class='owl-carousel owl-theme'></div>");


$(document).ready(function () {
    $(".owl-carousel").owlCarousel(
        {
            items: 4,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 10000,
            // autoplayHoverPause: true,
            responsive: {
                320: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
                768: {
                    items: 3
                },
                1280: {
                    items: 4
                }
            }
        }
    );
});
