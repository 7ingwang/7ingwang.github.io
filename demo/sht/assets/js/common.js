$(document).ready(function(){
	
	// 左侧边栏宽窄切换开关
	$(".sidebar .btn-menu").click(function(){
    	$(".sidebar").toggleClass("slim");
    	$(".main").toggleClass("wide");
	});
	
	// 菜单点击激活后的样式
	$(".sidebar .nav li").not("li:first").click(function(){
    	$(this).addClass("active").siblings().removeClass("active");
	});
	
	// 让最后三个下拉菜单向上打开
    $(".sidebar .nav .dropdown").slice(-3).addClass("dropup");
    
	// dropdown多级下拉菜单
    $('.dropdown-submenu > a').submenupicker();
    
	// 让下拉菜单鼠标hover时打开
	$('.dropdown-toggle').bootstrapDropdownHover();

	// checkbox
	$(".checkbox").click(function(){
    	$(this).toggleClass("checked");
	});
	$(".table th .checkbox").click(function(){
    	$(this).parents(".table").toggleClass("checked-all");
	});

});
