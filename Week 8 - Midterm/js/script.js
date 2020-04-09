$(document).ready(function () {
    //we write everything here

    $('#myCarousel').carousel({
        interval: 5000
    });

    $('#carouselControl').click(function () {

        if ($('#carouselControl').hasClass('paused')) {
            $('#myCarousel').carousel('cycle');
            $('#carouselControl').text('Pause');
        } else {
            $('#myCarousel').carousel('pause');
            $('#carouselControl').text('Play');
        }

        $('#carouselControl').toggleClass('paused');
    });

    $(document).ready(function () {
        $("#redModal").modal('show');
    });

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict';
        window.addEventListener('load', function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();

});