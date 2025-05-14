// hero slider
document.addEventListener("DOMContentLoaded", () => {
    new Swiper('.heroSlider', {
        loop: true, // Enables infinite loop
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000, // Auto slide every 5 seconds
            disableOnInteraction: false,
        },
        effect: 'fade', // Optional: fade effect for smooth transitions
    });
});

// category slider
document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".shopByCategorySlider", {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
});


// lightning deals slider
document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".lightningDeals", {
        slidesPerView: 2,
        spaceBetween: 17,
        // loop:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 5,
            },
        },
    });
});



// detail page products slider

document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".detailpageProductsSlider", {
        slidesPerView: 1,
        spaceBetween: 17,
        // loop:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 6,
            },
        },
    });
});

// promotional slider
document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".promotionalSlider", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 5000, // Auto slide every 5 seconds
            disableOnInteraction: false,
        },

    });
});


// const swiper = new Swiper('.product-swiper', {
//     loop: true,
//     effect: 'fade',
//     fadeEffect: {
//         crossFade: true
//     },
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         bulletActiveClass: '!bg-white !opacity-100',
//         bulletClass: 'swiper-pagination-bullet !bg-white !opacity-50 !w-2 !h-2'
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     }
// });



// secondary header hide when scrolling down
document.addEventListener("DOMContentLoaded", function () {
    // Header scroll behavior
    let lastScrollTop = 0;
    const header = document.getElementById("secondaryHeader");
    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > 500) {
            if (scrollTop > lastScrollTop) {
                header.classList.add("-translate-y-full");
            } else {
                header.classList.remove("-translate-y-full");
            }
        } else {
            header.classList.remove("-translate-y-full");
        }

        lastScrollTop = scrollTop;
    });

    // Language/Currency label
    const languageSelect = document.getElementById('language');
    const currencySelect = document.getElementById('currency');
    const labelElement = document.getElementById('lang-currency-label');

    function updateLabel() {
        const langValue = languageSelect.value.toUpperCase();
        const currValue = currencySelect.value.toUpperCase();
        labelElement.textContent = `${langValue}/${currValue}`;
    }

    languageSelect.addEventListener('change', updateLabel);
    currencySelect.addEventListener('change', updateLabel);
    updateLabel();

    // location drawer mobile
    const drawer = document.getElementById('locationDrawer');
    const openDrawerButton = document.getElementById('openDrawerButton');
    const closeDrawerButton = document.getElementById('closeDrawerButton');

    if (!drawer || !openDrawerButton || !closeDrawerButton) {
        console.error("One or more drawer elements not found.");
        return;
    }

    openDrawerButton.addEventListener('click', () => {
        drawer.classList.remove('translate-y-full');
    });

    closeDrawerButton.addEventListener('click', () => {
        drawer.classList.add('translate-y-full');
    });
});


document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".product-swiper", {
        slidesPerView: 2,
        spaceBetween: 17,
        loop: true, // Enable loop mode
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 5000, // Auto slide every 5 seconds
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
        },
        on: {
            init: function () {
                this.slides.forEach((slide) => {
                    slide.querySelector('img').style.borderRadius = '15px';
                });
            },
        },
    });
});


// new arrivals slider
document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".newArrivals", {
        slidesPerView: 5,
        spaceBetween: 17,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 5000, // Auto slide every 5 seconds
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 5,
            },
        },
    });
});


// customer reviews slider
document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".customerReviews", {
        slidesPerView: 3,
        spaceBetween: 17,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 5000, // Auto slide every 5 seconds
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            200: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1280: {
                slidesPerView: 3,
            },
        },
    });
});



var swiper = new Swiper(".subCategory", {
    slidesPerView: 'auto',
    spaceBetween: 25, // Spacing between slides
    freeMode: true, // Enables free flow
    // loop: true, 
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000, // Auto slide every 5 seconds
        disableOnInteraction: false,
    },
    // loop: true, // Enable loop mode
});



// mobile search
const searchButton = document.getElementById('searchButton');
const searchContainer = document.querySelector('.searchContainer');

// Flag to check if the mouse is inside the container
let isMouseInside = false;

// Show the search container when the "Search" button is clicked
searchButton.addEventListener('click', (event) => {
    if (window.innerWidth > 460) { // Show only if screen width is greater than 460px
        searchContainer.style.opacity = "1";
        searchContainer.style.transform = "translateY(70px)";
        searchContainer.style.pointerEvents = "auto"; // Enable pointer events
        searchContainer.style.transition = "all 0.2s ease-in-out";
    }
    event.stopPropagation(); // Prevent triggering the document click handler
});

// Keep track of mouse enter/leave to avoid hiding unnecessarily
searchContainer.addEventListener('mouseenter', () => {
    isMouseInside = true;
});

searchContainer.addEventListener('mouseleave', () => {
    isMouseInside = false;
});

// Hide the search container when clicking outside and not hovering
document.addEventListener('click', () => {
    if (!isMouseInside && window.innerWidth > 460) { // Check for screen width
        searchContainer.style.transform = "translateY(80px)";
        searchContainer.style.opacity = "0";
        searchContainer.style.pointerEvents = "none"; // Disable pointer events
        searchContainer.style.transition = "all 0.2s ease-in-out";
    }
});

// Hide the search container when the screen size is above 820px or under 460px
window.addEventListener('resize', () => {
    if (window.innerWidth > 820 || window.innerWidth < 460) { // Hide for screens under 460px and above 820px
        searchContainer.style.transform = "translateY(80px)";
        searchContainer.style.opacity = "0";
        searchContainer.style.pointerEvents = "none"; // Disable pointer events
        searchContainer.style.transition = "all 0.2s ease-in-out";
    }
});





// manufacturers products 
const cards = document.querySelectorAll('.ms-item-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const actions = card.querySelector('.ms-card-actions');
        actions.style.opacity = "1";
        actions.style.transition = "all 0.2s ease-in-out";
    });

    card.addEventListener('mouseleave', () => {
        const actions = card.querySelector('.ms-card-actions');
        actions.style.opacity = "0";
        actions.style.transition = "all 0.2s ease-in-out";
    });
});


// checkout page 

document.getElementById('payment-method').addEventListener('change', function () {
    const creditCardForm = document.getElementById('credit-card-form');
    const codFields = document.getElementById('cod-fields');
    const isCreditDebit = this.value === 'credit-debit';
    const isCod = this.value === 'cod';

    // Show or hide forms based on selected payment method
    creditCardForm.style.display = isCreditDebit ? 'block' : 'none';
    codFields.style.display = isCod ? 'block' : 'none';
});

document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('different-address-checkbox');
    const differentAddressFields = document.getElementById('different-address');

    // Initially hide the different address fields
    differentAddressFields.classList.add('hidden');

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            differentAddressFields.classList.remove('hidden');
        } else {
            differentAddressFields.classList.add('hidden');
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    console.log("common.js loaded and running!");

    let lastScrollTop = 0;
    const header = document.getElementById("secondaryHeader");

    if (!header) {
        console.warn("secondaryHeader not found. Make sure the ID is correct.");
        return;
    }

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > 500) {
            if (scrollTop > lastScrollTop) {
                header.classList.add("-translate-y-full");
            } else {
                header.classList.remove("-translate-y-full");
            }
        } else {
            header.classList.remove("-translate-y-full");
        }

        lastScrollTop = scrollTop;
    });
});