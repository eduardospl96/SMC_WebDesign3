$(document).ready(function () {

    // Gear Carousel
    $('#gearCarousel').carousel({
        interval: 5000
    });

    $('#carouselControl').click(function () {

        if ($('#carouselControl').hasClass('paused')) {
            $('#gearCarousel').carousel('cycle');
            $('#carouselControl').text('Pause');
        } else {
            $('#gearCarousel').carousel('pause');
            $('#carouselControl').text('Play');
        }

        $('#carouselControl').toggleClass('paused');
    });
    
});