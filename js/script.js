var $test = false;

$(document).ready(function(){
	$('nav ul li a').click(function(e){
		e.preventDefault(); // empêche le lien d'accéder à la section par défaut
		
		$('nav').removeClass('menu-is-open');

		$('html, body').animate({scrollTop : $(e.target.hash).offset().top - 75}, 500);
		// console.log(e.target.hash);
		// console.log(e);
		// console.log(this);
		// console.log($(this));
		// console.log($this);
	});


	$('.button_menu').click(function(){
		$('nav').addClass('menu-is-open');
		if($test == false){
			$('.button_close_menu').css({display: "block", color:"white"});
			$('.button_menu').css({display:"none"});
			$test = true;
		
		}
	});

	$('.button_close_menu').click(function(){
		$('nav').removeClass('menu-is-open');
		if($test == true){
			$('.button_menu').css({display: "block", color:"black"});
			$('.button_close_menu').css({display: "none"});
			$test = false;
		
		}
	});



	$(document).scroll(function(){
		if ($(window).width() > 1225) {
		$('.gestion_project').animate({height:"170px"});
		$('.media').delay( 200 ).animate({height:"170px"});
		$('.photoshop').delay( 400 ).animate({height:"140px"});
		$('.html_css').delay( 600 ).animate({height:"140px"});
		$('.english').delay( 800 ).animate({height:"120px"});
		$('.javascript').delay( 1000 ).animate({height:"100px"});
		$('.jquery').delay( 1200 ).animate({height:"80px"});
		}	
	});

});








