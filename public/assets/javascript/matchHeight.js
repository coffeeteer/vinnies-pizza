$(function() {
    $('.item').matchHeight(false);
    
    //Make links '.active' in Handlebars
    var url = window.location.href;
      $('nav li').find('.active').removeClass('active');
      $('nav li a').filter(function(){
          return this.href == url;
      }).parent().addClass('active');
});