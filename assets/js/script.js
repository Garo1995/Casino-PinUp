
$.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
$(".mask-phone").mask("+7 (h99) 999-99-99");


$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-mobile').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('body').removeClass('body_fix');
            $('.menu-mobile').removeClass('transition-menu');
        }
    });
    $('.header-menu a').on('click', function () {
        $('body').removeClass('body_fix');
        $('.menu-mobile').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});





const lang = document.querySelector('.header-lang');
const current = document.querySelector('.lang-current');
const items = document.querySelectorAll('.header-lang-item');

current.addEventListener('click', (e) => {
    e.stopPropagation();
    lang.classList.toggle('click-open-lang');
});
items.forEach((item) => {
    item.addEventListener('click', () => {
        const currentHTML = current.innerHTML;

        current.innerHTML = item.innerHTML;
        item.innerHTML = currentHTML;

        lang.classList.remove('click-open-lang');
    });
});

document.addEventListener('click', (e) => {
    if (!lang.contains(e.target)) {
        lang.classList.remove('click-open-lang');
    }
});

$(function () {

    // Главный аккордеон
    $('.link').on('click', function () {

        const $this = $(this);
        const $submenu = $this.next('.submenu');

        $submenu.slideToggle();

        $('.link')
            .not($this)
            .removeClass('open')
            .next('.submenu')
            .slideUp();

        $this.toggleClass('open');
    });

    // Вложенный аккордеон
    $('.inner-link').on('click', function (e) {

        e.stopPropagation();

        const $this = $(this);
        const $submenu = $this.next('.inner-submenu');

        $submenu.slideToggle();

        $this
            .closest('.accordion-inner')
            .find('.inner-link')
            .not($this)
            .removeClass('open')
            .next('.inner-submenu')
            .slideUp();

        $this.toggleClass('open');
    });

});




const scoreEl = document.querySelector('.score');
const starsEl = document.querySelector('.stars');
if (scoreEl && starsEl) {
    const score = parseFloat(scoreEl.textContent);
    const d = "M32.8843 16.1407L27.839 5.9188C27.3031 4.83442 26.2187 4.15942 25.0093 4.15942C23.8 4.15942 22.714 4.83442 22.1781 5.9188L17.1109 16.1579L5.82964 17.7969C4.6312 17.9704 3.65464 18.7938 3.2812 19.9454C2.9062 21.0954 3.21245 22.336 4.07964 23.1813L12.2515 31.1657L10.325 42.4016C10.1203 43.5938 10.6015 44.7782 11.5796 45.4891C12.1328 45.8907 12.7796 46.0954 13.4312 46.0954C13.9328 46.0954 14.4375 45.9735 14.9031 45.7297L25.0234 40.425L35.114 45.7297C36.1859 46.2922 37.4593 46.2016 38.4375 45.4891C39.4156 44.7782 39.8984 43.5954 39.6937 42.4016L37.775 31.1391L45.939 23.1813C46.8062 22.336 47.1109 21.0969 46.7374 19.9454C46.364 18.7938 45.3875 17.9704 44.189 17.7969L32.9078 16.1579L32.8843 16.1407Z";
    let html = '';
    for (let i = 1; i <= 5; i++) {
        const frac = Math.min(1, Math.max(0, score - (i - 0.92)));
        const id = 'c' + i;
        html += `<svg width="48" height="48" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <defs><clipPath id="${id}"><rect x="0" y="0" width="${frac * 50}" height="50"/></clipPath></defs>
      <path d="${d}" fill="rgba(153, 129, 0, 1)"/>
      <path d="${d}" fill="#FFD700" clip-path="url(#${id})"/>
    </svg>`;
    }
    starsEl.innerHTML = html;
}




function toggleMenu(el) {
    el.classList.toggle('active');
    const menu = el.nextElementSibling;
    menu.classList.toggle('open');
}

















let licenseSlider = new Swiper(".license-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        '1199': {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        '1020': {
            slidesPerView: 3.2,
            spaceBetween: 20,
            loop: true,
        },
        '767': {
            slidesPerView: 2.2,
            spaceBetween: 20,
            loop: true,
        },

        '320': {
            slidesPerView: 1.2,
            spaceBetween: 10,
            loop: true,

        },
    },
});