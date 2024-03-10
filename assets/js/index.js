;(function ($) {
    'use strict';

    const handleSliderHero = function () {
        if($('#section-hero .swiper').length){
            new Swiper('#section-hero .swiper', {
                speed: 1000,
                slidesPerView: 1,
                effect: 'fade',
                navigation: {
                    nextEl: '#section-hero .button-next',
                    prevEl: '#section-hero .button-prev',
                }
            });
        }
    }

    const handleSliderCustomers = function () {
        if($('#section-customers .swiper').length){
            new Swiper('#section-customers .swiper', {
                slidesPerView: 1.1,
                centeredSlides: true,
                speed: 1000,
                loop: true,
                navigation: {
                    nextEl: '#section-customers .button-next',
                    prevEl: '#section-customers .button-prev',
                },
                breakpoints: {
                    425: {
                        spaceBetween: 15,
                        slidesPerView: 1.2
                    },
                    576: {
                        spaceBetween: 15,
                        slidesPerView: 1
                    },
                    768: {
                        spaceBetween: 20,
                        slidesPerView: 2
                    },
                    992: {
                        spaceBetween: 20,
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
                    1440: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },

                }
            });
        }
    }

    const handleSliderGallery = function () {
        if($('#section-gallery .swiper').length){
            new Swiper('#section-gallery .swiper', {
                slidesPerView: 2.1,
                spaceBetween: 16,
                centeredSlides: true,
                loop: true,
                speed: 1000,
                breakpoints: {
                    425: {
                        slidesPerView: 1.2
                    },
                    576: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 4.3
                    },
                    1440: {
                        slidesPerView: 4.3
                    },

                }
            });
        }
    }

    $(function () {
        handleSliderHero();
        handleSliderCustomers();
        handleSliderGallery();
    });

})(jQuery);