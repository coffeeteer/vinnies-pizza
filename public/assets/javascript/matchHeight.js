$(function() {
    $('.item').matchHeight(false);
    
    //Make links '.active' in Handlebars
    var url = window.location.href;
      $('nav li').find('.active').removeClass('active');
      $('nav li a').filter(function(){
          return this.href == url;
      }).parent().addClass('active');

      function windowSize() {
		  windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
		  windowWidth = window.innerWidth ? window.innerWidth : $(window).width();

		}

		//Init Function of init it wherever you like...
		windowSize();

		// For example, get window size on window resize
		$(window).resize(function() {
		  windowSize();
		  console.log('width is :', windowWidth, 'Height is :', windowHeight);
		  if (windowWidth < 768) {
		    console.log('width is under 768px !');
		    //Making description disappear on small screens
      		$('.small').remove();
		  }
		});
});