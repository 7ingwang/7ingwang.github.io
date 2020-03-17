// 手机版导航
$("#toggle").click(function() {
  $("#nav-m").toggleClass("open");
});
$("#nav-m .menu li a").click(function() {
  $(".nav.m").removeClass("open");
});


// 首页轮播图
$(document).on('ready', function() {
	$(".lazy").slick({
		dots: true,
		infinite: true,
	//	speed: 500,
	//	fade: true,
	//	cssEase: 'linear'
	});
});

