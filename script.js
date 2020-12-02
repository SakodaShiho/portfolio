
// menu スクロールしたら白くなる

window.addEventListener("scroll", function () {
    var header = document.querySelector('.header-menu');
    header.classList.toggle('scroll-nav', window.scrollY > 0);
  });
  

  // Skillbar見える範囲に来たら動く

  $(function(){
    $(window).scroll(function(){
      $(".skillbar-bar:not(.fire)").each(function(){
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
          var element = $(this);
          var prorate = $(this).next();
          var value = prorate.data("value");
          var width = 1;
  
        if(scroll > position - windowHeight){
          var identity = setInterval(scene, 10);
          function scene() {
            if (width >= value) {
              clearInterval(identity);
            } else {
              $(element).addClass( 'fire' );
              width++;
              element.width(width + '%');
              prorate.html(width * 1  + '%');
            }
          }
        }
      })
    })
  })


//Page Scroll TOP

  jQuery(function() {
    var appear = false;
    var pagetop = $('#page_top');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) { 
        if (appear == false) {
          appear = true;
          pagetop.stop().animate({
            'bottom': '15px' 
          }, 300); 
        }
      } else {
        if (appear) {
          appear = false;
          pagetop.stop().animate({
            'bottom': '-50px'
          }, 300); //0.3秒かけて隠れる
        }
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
      return false;
    });
  });