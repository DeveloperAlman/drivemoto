jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
        this.addEventListener("touchstart", handle, {
            passive: !ns.includes("noPreventDefault")
        });
    }
};
jQuery.event.special.touchmove = {
    setup: function (_, ns, handle) {
        this.addEventListener("touchmove", handle, {
            passive: !ns.includes("noPreventDefault")
        });
    }
};
jQuery.event.special.wheel = {
    setup: function (_, ns, handle) {
        this.addEventListener("wheel", handle, {
            passive: true
        });
    }
};
jQuery.event.special.mousewheel = {
    setup: function (_, ns, handle) {
        this.addEventListener("mousewheel", handle, {
            passive: true
        });
    }
};

//Mobile navigation
const html = document.querySelector("html");

// ALL FILTER (BACKDROP)
const bannerSection = document.querySelector(".banner-section");
const headerBottom = document.querySelector(".header__bottom");
const search = document.querySelector(".search");
const categories = document.querySelector(".categories");
const products = document.querySelector(".products");
const productsSec = document.querySelector(".products-secondary");
const banner = document.querySelector(".banner");
const footer = document.querySelector(".footer");
//----->

const btnNav = document.querySelector(".btn-mobile-nav");
const mobileNav = document.querySelector(".header__nav-list-mobile");

btnNav.addEventListener("click", function () {
    mobileNav.classList.toggle("mobile-open");
    html.classList.toggle("html-overflow");
    bannerSection.classList.toggle("all-filter-blur");
    headerBottom.classList.toggle("all-filter-blur");
    search.classList.toggle("all-filter-blur");
    categories.classList.toggle("all-filter-blur");
    products.classList.toggle("all-filter-blur");
    productsSec.classList.toggle("all-filter-blur");
    banner.classList.toggle("all-filter-blur");
    footer.classList.toggle("all-filter-blur");
});

// Hamburger animation
const menu = document.querySelector("svg");
menu.addEventListener("click", morph);

function morph() {
    menu.classList.toggle("open");
}

// Smooth scrolling
const allLinks = document.querySelectorAll("a[href^='#']");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Scroll back to top
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        // Scroll to other links
        if (href == "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({
                bottom: 0,
                behavior: "smooth"
            });
        }

        // Close mobile naviagtion
        if (link.classList.contains("header__nav-link"))
            mobileNav.classList.toggle("mobile-open"),
            menu.classList.toggle("open"),
            html.classList.toggle("html-overflow");
    });
});

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// Set current year in copyright
const year = document.querySelector(".current-year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// Set current year in copyright
const date = document.querySelector(".current-date");
const currentDate = new Date().getFullYear();
date.textContent = currentDate;

// Scrollbar
let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;

// Animation on scroll
window.onscroll = () => {
    let progressHeight = (window.pageYOffset / totalHeight) * 400;
    progress.style.height = progressHeight + "%";

    const nav = document.querySelector(".header__nav-mobile");

    if (this.scrollY <= 10)
        nav.style.backgroundColor = 'rgba(0,0,0,0)',
        nav.style.boxShadow = '0 1rem 3rem rgba(0,0,0,0)',
        nav.style.padding = '1rem 2.5rem 0 2.5rem';
    else
        nav.style.backgroundColor = 'rgba(255,255,255,0.9)',
        nav.style.boxShadow = '0 1rem 3rem rgba(0,0,0,0.07)',
        nav.style.padding = '0 2.5rem 0 2.5rem';
}

$('.dropdown').on('click', function () {
    $(this).toggleClass('filter-item__drop--active');
    $(this).next().slideToggle('200');
})

$('.catalog__buttons-btn--grid').on('click', function () {
    $(this).addClass('catalog__buttons-btn--active');
    $('.catalog__content-list').addClass('grid-animation');
    $('.product').removeClass('catalog-grid--mobile-product');
    $('.catalog__content-list').removeClass('catalog__content-list-mobile--active');
    $('.catalog__buttons-btn--line').removeClass('catalog__buttons-btn--active');
});

$('.catalog__buttons-btn--line').on('click', function () {
    $(this).addClass('catalog__buttons-btn--active');
    $('.product').addClass('catalog-grid--mobile-product');
    $('.catalog__content-list').addClass('catalog__content-list-mobile--active');
    $('.catalog__buttons-btn--grid').removeClass('catalog__buttons-btn--active');
});

$('.search__tabs-item').on('click', function (e) {
    e.preventDefault();

    $('.search__tabs-item').removeClass('search__tabs-item--active');
    $('.search__content-item').removeClass('search__content-item--active');
    $(this).addClass('search__tabs-item--active');
    $($(this).attr('href')).addClass('search__content-item--active');
});

$('.pagination__link').on('click', function (e) {
    e.preventDefault();

    $('.pagination__link').removeClass('pagination--active');
    $(this).addClass('pagination--active');
    $($(this).attr('href')).addClass('pagination--active');

});

$('.aside-filter__tab').on('click', function (e) {
    e.preventDefault();

    $('.aside-filter__tab').removeClass('tab-filter--active');
    $('.aside-filter-tab-content').removeClass('tabs-content--active');
    $(this).addClass('tab-filter--active');
    $($(this).attr('href')).addClass('tabs-content--active');
});

$('.product-item-btn--favourite').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('product-item-btn--favourite--active')
});

$(function () {
    $('.banner-section__slider').slick({
        dots: true,
        swipe: false,
        autoplay: true,
        autoplaySpeed: 2500,
        lazyLoad: 'ondemand',
        speed: 700,
        prevArrow: '  <button class="banner-section__slider-btn banner-section__slider-btn--left"><img src="img/arror-left.svg" alt="" class="banner-section__slider-btn__img"></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btn--right"><img src="img/arror-right.svg" alt="" class="banner-section__slider-btn__img"></button>',
        responsive: [{
                breakpoint: 1025,
                settings: {
                    swipe: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true,
                    infinite: true,
                    dots: true,
                    lazyLoad: 'ondemand',
                    arrows: false
                }
            },
            {
                breakpoint: 651,
                settings: {
                    swipe: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    lazyLoad: 'ondemand',
                    dots: true
                }
            },
            {
                breakpoint: 481,
                settings: {
                    swipe: true,
                    lazyLoad: 'ondemand',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.product-slider').slick({
        infinite: true,
        speed: 700,
        lazyLoad: 'ondemand',
        swipe: false,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '  <button class="product-arrow-left banner-section__slider-btn banner-section__slider-btn--left"><img src="img/product-arrow-left.svg" alt="" class="banner-section__slider-btn__img"></button>',
        nextArrow: '<button class="product-arrow-right banner-section__slider-btn banner-section__slider-btn--right"><img src="img/product-arrow-right.svg" alt="" class="banner-section__slider-btn__img"></button>',
        responsive: [{
                breakpoint: 1025,
                settings: {
                    swipe: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    swipe: true,
                    lazyLoad: 'ondemand',
                    arrows: false,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    swipe: true,
                    slidesToShow: 2,
                    autoplay: true,
                    slidesToScroll: 1,
                    infinite: true,
                    lazyLoad: 'ondemand',
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 651,
                settings: {
                    swipe: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    lazyLoad: 'ondemand',
                    dots: true
                }
            },
            {
                breakpoint: 481,
                settings: {
                    swipe: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,
                    arrows: false,
                    lazyLoad: 'ondemand',
                    fade: true,
                    adaptiveHeight: true,
                    dots: false
                }
            }
        ]
    });
});