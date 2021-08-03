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

// Logic-badge
let li = document.querySelectorAll("ul#main-collection-product-grid li")
// console.log(li)
li.forEach((item) => {
    let list_span = item.querySelectorAll('.test-badge')[0].children
    console.log(list_span)
    for (let it of list_span) {

        it.style.display = "none";

        if (it.className == 'badge-test badge-closeout') {
            console.log('badge-closeout')
            it.style.display = "block";

        } else if (it.className == 'badge-test badge-new') {
            console.log('badge-new')
            it.style.display = "block";

        } else if (it.className == 'badge-test badge-free_shipping') {
            console.log('badge-free_shipping')
            it.style.display = "block";

        } else if (it.className == 'badge-test badge-sale') {
            console.log('badge-sale')
            it.style.display = "block";

        }
    }
});


