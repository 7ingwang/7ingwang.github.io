// 手机版导航
// 手机版toggle
$("#toggle").click(function() {
	$("#nav-m").toggleClass("open");
});

$("#nav-m .menu li a").click(function() {
	$("#nav-m").removeClass("open");
});

$(window).scroll(function() {
	$("#nav-m").removeClass("open");
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

