var click = document.querySelector('.click-menu'),
    menu_Mobi = document.querySelector('.show-menu'),
    slideIndex = 1,
    menu_scroll = document.querySelector('.header-bottom');
    // round = document.querySelector('.round');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        menu_scroll.classList.add('fix-top');
        // round.classList.add('show-Round');
    } else {
        menu_scroll.classList.remove('fix-top');
        // round.classList.remove('show-Round');
    }
})

$(window).scroll(function() {
    var hT = $('.current-number').offset().top,
        hH = $('.current-number').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
        if (wS > (hT+hH-wH)){
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            })
     }
    
 });
$(window).scroll(function() {
   var hT = $('.footer').offset().top,
       hH = $('.footer').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
       if (wS > (hT+hH-wH)){
        $( ".round" ).addClass( "show-Round" );
    }
    else{
        $( ".round" ).removeClass( "show-Round" );
    }
});
click.addEventListener('click',function(){
    menu_Mobi.classList.toggle('trax-0');
})

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" act", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " act";
}
$(".round").click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 1000)
});
