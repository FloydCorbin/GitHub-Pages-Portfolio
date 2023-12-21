
   //capture the scroll event on the page and hide the image with the id of "logo" when the scroll position is greater than 5px
    $(window).scroll(function() {
        if ($(document).scrollTop() > 5) { 
            $('#logo').fadeOut();
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        var carousel = new bootstrap.Carousel(document.getElementById('myCarousel'));

        // Ensure focus management for keyboard navigation
        document.getElementById('myCarousel').addEventListener('keydown', function (e) {
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                carousel.pause();
            }
        });

        // Reset focus when transitioning between slides
        document.getElementById('myCarousel').addEventListener('slide.bs.carousel', function () {
            carousel.cycle();
        });
    });