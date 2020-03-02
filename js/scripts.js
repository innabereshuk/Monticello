

let view = document.querySelectorAll(".grid__panorama");

     view.forEach(el => {
          el.addEventListener("click", function () {
          el.children[2].classList.remove("invisible");
      });
    });

   
$(document).ready(function(){
    $('.slider').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    autoplaySpeed: 4000,
    autoplay: true,
    infinite: true,
    dots: true,
    arrows: false,
});


$('.mySlider').slick({
slidesToShow: 3,
slidesToScroll: 1,
autoplaySpeed: 4000,
dots: true,
infinite: true,
infinite: true,
autoplay: true,
dotsClass: 'slick-dots slick-dots-two',
speed: 300,
prevArrow: `<button class="mySlider__arrow mySlider__arrow--prev">
                <i class="fas fa-chevron-left"></i>
            </button>`,
nextArrow: `<button class="mySlider__arrow mySlider__arrow--next">
                <i class="fas fa-chevron-right"></i>
            </button>`,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 780,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                  }
                }
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

      

})();

   

