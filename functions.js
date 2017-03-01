

//Add animation class to website thumbnails
$(function(){
  setInterval(function(){imageAnimation();}, 3000)
});



function imageAnimation(){
  var randNum = Math.floor(Math.random() * $('.web-thumb').length)
  $('.web-thumb').removeClass('animate');
  $('.web-thumb').eq(randNum).addClass('animate');

}


//Jquery scroll
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

//Add open class to Navigation
$(document).ready(function(){
    $('.mobile-nav-toggle').click(function(){
        $(this).toggleClass('open');
        $('.mobile-nav').toggleClass('open');
    });
});



var fired = 0;
$(window).scroll(function() {
  var wScroll = $(window).scrollTop();
  if ($('#google-container').offset().top - $(window).height()/1.5 < wScroll) {
    if (fired == 0){
      startGoogleBar();
      fired = 1;
    }

  }
});


function startGoogleBar() {
    var elem = document.getElementById("google-bar");
    var width = 10;
    var id = setInterval(frame, 20);
    function frame() {
        if (width >= 99.9) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("bar-label").innerHTML = width * 1 + '%';
        }
    }
}

//Form validatoin for certain browsers
$(document).ready(function(){
$('form').submit(function(e) {

    var ref = $(this).find("[required]");

    $(ref).each(function(){
        if ( $(this).val() == '' )
        {
            alert("All fields are required.");

            $(this).focus();

            e.preventDefault();
            return false;
        }
    });  return true;
});
});
