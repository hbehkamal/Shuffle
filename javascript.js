(function(){
	$(function(){
		var
			next   = $('#next'),
			slides = $('menu li img'),
			slide = function(){
				var 
					s1     = $('.s1'),
					s2     = $('.s2'),
					s3     = $('.s3'),
					s4     = $('.s4'),
					s5     = $('.s5');
				s1.removeClass('s1').addClass('s5');
				s2.removeClass('s2').addClass('s1');
				s3.removeClass('s3').addClass('s2');
				s4.removeClass('s4').addClass('s3');
				s5.removeClass('s5').addClass('s4');
			};
		next.click(function(){
			// slides.each(function(){
			// 	if($(this).hasClass('s1')) $(this).removeClass('s1').addClass('s5');
			// 	else {
			// 	}
			// });
			slide();
		});

		// var inv = false;
  //   if (inv == false) {
  //     inv = setInterval(slide,2000);
  //     inv = true;
  //   };


  var autoPlayIv = false,
      autoPlayStart,
      autoPlayStop;

  (autoPlayStart = function(){
    if(autoPlayIv) return ;
    autoPlayIv = setInterval(slide, 1000);
  })();

  autoPlayStop = function(){
    clearInterval(autoPlayIv);
    autoPlayIv = false;
  };

  next.mouseover(autoPlayStop);
  next.mouseout(autoPlayStart);

	});
})();