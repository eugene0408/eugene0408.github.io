function preloader (){
	$(document).ready(function(){

		setInterval(function(){
			let p = $('.preloader');
			p.css('opacity', 0);
			p.css('visibility', 'hidden')
		}, 1000);

	});
}

preloader();

new WOW().init();//Включає wow.js

$(document).ready(function(){

	

	$(".main-carousel").owlCarousel({
		loop: true,
		nav: true,
		center: true,
		items: 2,
		stagePadding: 20,
		dots: true,
		margin: 0,
		smartSpeed: 800,
		navText:['<img src="img/prev.svg">',
		'<img src="img/next.svg">'],
		autoplay: false, 
		autoplayTimeout: 3000,
		autoplaySpeed: 2000,
		autoplayHoverPause: true,
		responsiveClass: true,
		URLhashListener: true,
		responsive: {
			0: {
				items: 1,
				stagePadding: 20,
				margin: 0
			},
			800: {
				margin: 0,
				items: 1.4
			},
			1100: {
				margin: 50,
				items: 2
			},
			1400: {
				margin: 250,
				items: 2
			}
			
		}
	});

	//Міняє фон каруселі
	var mCar = $('.main-carousel')
		url = null

	mCar.on("changed.owl.carousel", function(){
		setTimeout( function() {
			let centerImg = $(".main-carousel").find(".center").find(".main-carousel-item"),
			    url =centerImg.css("background-image");
			$(".s-serv-carousel").css("background-image", url);
		}, 10);

	});






	//E-mail Ajax Send
	$("#form-m").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "app/mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});








	$(".carousel-articles").owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		dots: true,
		navText:['<img src="img/prev.svg">',
		'<img src="img/next.svg">'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			},
			1400: {
				items: 4
			},
			1800: {
				items: 5
			}
		}
	});



	




	// ПЛАВНА ПРОКРУТКА ПО ЯКОРЯХ
		var $page = $('html, body');
	$('a[href*="#"]').click(function() {
			$page.animate({
					scrollTop: $($.attr(this, 'href')).offset().top
			}, 700);
			return false;
	});


	


	// SVG to linear SVG
	$('img.img-svg').each(function(){
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		$.get(imgURL, function(data) {
		  var $svg = $(data).find('svg');
		  if(typeof imgClass !== 'undefined') {
			$svg = $svg.attr('class', imgClass+' replaced-svg');
		  }
		  $svg = $svg.removeAttr('xmlns:a');
		  if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
			$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
		  }
		  $img.replaceWith($svg);
		}, 'xml');
	  });


	  

});

