$(function(){
  var topBtn = $('#back_to_top');
  topBtn.hide();
  //スクロールが500に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        topBtn.fadeIn();
    } else {
        topBtn.fadeOut();
    }
  });

  topBtn.click(function(){
    $('body,html').animate({
      scrollTop: 0
    }, 500);
  })
});