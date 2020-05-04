$(document).ready(function () {

    $(".color").click(function(){
        $(".color:hover").css("filter", "grayscale(0%)");
    });

    var skewlogo = document.querySelector('.navbar-brand');
    skewlogo.addEventListener('click', _ => skewlogo.classList.toggle('is-active'));

});