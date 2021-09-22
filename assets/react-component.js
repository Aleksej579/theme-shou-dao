// for request start
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
// for request end

// greeting card
let add_gift_option = document.querySelector('#wrapper_add_gift_option #add_gift_option');
let wrapper_inputs = document.querySelector('#wrapper_add_gift_option .wrapper_inputs');

let greeting_text = document.querySelector('#wrapper_add_gift_option #greeting_text');
let text_on_email = document.querySelector('#wrapper_add_gift_option #text_on_email');
let btn_replace_text_email = document.querySelector('#wrapper_add_gift_option #btn_replace_text_email');
let greeting_hidden = document.querySelector('.product-form__buttons #greeting_hidden');
let greeting_hidden_text_on_email = document.querySelector('.product-form__buttons #greeting_hidden_text_on_email');

let send_to_email = document.querySelector('#wrapper_add_gift_option #send_to_email');

if (wrapper_inputs) {
    wrapper_inputs.style.display = 'none'
    add_gift_option.addEventListener('input', () => {
        if (add_gift_option.checked) {
            wrapper_inputs.style.display = 'block'
        } else {
            wrapper_inputs.style.display = 'none'
        }
    });
}

if (text_on_email) {
    text_on_email.style.display = 'none'
    send_to_email.addEventListener('input', () => {
        if (send_to_email.checked) {
            text_on_email.style.display = 'block'
        } else {
            text_on_email.style.display = 'none'
        }
    });
}

if (greeting_text) {
    greeting_text.addEventListener('input', () => {
        if (greeting_text.value.length == 200) {
            alert('Too much symbols. Please, make your text shorter!');
        }
        const regex = '^[a-zA-Z., ]+$';
        if (!greeting_text.value.match(regex)) {
            alert('Unknown or restricted symbol')
        }
    });
    greeting_text.addEventListener('input', () => {
        if (greeting_text.value.length > 0) {
            btn_replace_text_email.type = 'button';
        } else {
            btn_replace_text_email.type = 'hidden';
        }
    });
    function saveGreeting() {
        greeting_hidden.value = greeting_text.value;
        greeting_hidden_text_on_email.value = text_on_email.value;
    }
}
