$(function(){

    $('.slider-blog_inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow"></button>',
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings:{
        //             arrows: false
        //         }
        //     },
        // ]
    })

    $(".menu a, .go-up").on("click", function(event){
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top}, 1500);
    })

    // $('.button_btn').on('click', function(){
    //     $('.menu_list').toggleClass('menu_list--active')
    // })

    $('.button_btn ').on('click', function(){

        // $('.menu_list').toggleClass('menu_list--active');
        $('.header_top-inner').toggleClass('header_top-inner--active');
    
    
    });


    var mixer = mixitup('.portfolio_content');
});

