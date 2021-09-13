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



// Open QB
let btn_open_qb = document.querySelector('#btn_open_qb');
let qb_popup = document.querySelector('#qb');
let form_add = document.querySelector('#add-item-form .wrapper_prod');

btn_open_qb.onclick = function () {
    form_add.innerHTML = ''
    qb_popup.style.display = 'block'
};

//quickBuy
let search_qb = document.querySelector('.wrapper_search .search_qb');
let btn_show_item = document.querySelector('.wrapper_search #btn_search_qb');
let form_add_qb = document.querySelector('#wrapper_temporary_item');
function myFunction(select_item) {
    search_qb.value = select_item;
}
btn_show_item.onclick = function () {
    for (let item of form_add_qb.children) {
        if (item.className == search_qb.value && item.className !== "") {
            item.setAttribute("type", "text");
            item.style.display = 'block';
            form_add.append(item);
        }
    }
};

console.log(true)