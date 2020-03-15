// $("#toggle").click(function() {
//   $("#header").toggleClass("open");
// });
// $("#nav li a").click(function() {
//   $("#header").removeClass("open");
// });


function toggleNav() {
  document.getElementById("header").classList.toggle("open");
}
function removeNav() {
  document.getElementById("header").classList.remove("open");
}


function toggleSubmenu() {
  document.getElementsByClassName("submenu")[0].classList.toggle("show");
}


// 首页轮播图
$(document).on('ready', function() {
	$(".lazy").slick({
	  dots: true,
	  infinite: true,
	});
});

