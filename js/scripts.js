
 $(document).ready(function(){
    $('.slider').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 400,
    arrows: false,
    autoplaySpeed: 4000,
    infinite: true,
    dots: true,
    slidesToScroll: 1,
});


$('.mySlider').slick({
dots: true,
infinite: true,
dotsClass: 'slick-dots slick-dots-two',
speed: 400,
slidesToShow: 3,
slidesToScroll: 1,
infinite: true,
autoplay: true,
lazyLoad: 'ondemand',
autoplaySpeed: 4000,
prevArrow: `<button class="mySlider__arrow mySlider__arrow--prev">
                <i class="fas fa-chevron-left"></i>
            </button>`,
nextArrow: `<button class="mySlider__arrow mySlider__arrow--next">
                <i class="fas fa-chevron-right"></i>
            </button>`,
            responsive: [
    {
        breakpoint: 865,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    },
    {
        breakpoint: 680,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
           slidesToShow: 1
        }
    },
   
],

});

});

$(document).ready(function(){
   $("body").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $(id).offset().top;
       $('body,html').animate({scrollTop: top},2000);
   });
});

(function(){
    let toggler = document.getElementById('menu__toggle');

    toggler.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.toggle('menu-opened');
    })

    let links = document.querySelectorAll('.menu__list');

    links.forEach(link => {
        link.addEventListener('click', function() {
            document.body.classList.remove('menu-opened');
        })
    })

    let sections = document.querySelectorAll('.bg');
    window.addEventListener('scroll', function() {

        document.body.classList.remove('menu-opened');
       
        let firstViewportSection = null;
        sections.forEach(function(section) {
            let rect = section.getBoundingClientRect();

            if (!firstViewportSection) {
                if (rect.bottom  > 60) {
                    firstViewportSection = section;
                }
            }

        })
   

    }) 
   

})();