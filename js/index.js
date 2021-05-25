$('#myCarousel').owlCarousel({
    loop:true,
    margin:18,
    nav:true,
    dots:false,

    autoplay:true,
    autoplayTimeout:1800,
    autoplayHoverPause:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
$('#myCarousel2').owlCarousel({
    loop:true,
    margin:18,
    nav:true,
    dots:false,

    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})