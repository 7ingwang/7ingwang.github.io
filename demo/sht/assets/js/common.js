$(document).ready(function(){
	
	// 左侧边栏宽窄切换开关
	$('.sidebar .btn-menu').click(function(){
    	$('.sidebar').toggleClass('slim');
    	$('.main').toggleClass('wide');
	});
	
	// 菜单点击激活后的样式
	$('.sidebar .nav li').not('li:first').click(function(){
    	$(this).addClass('active').siblings().removeClass('active');
	});
	
	// 让最后三个下拉菜单向上打开
    $('.sidebar .nav .dropdown').slice(-3).addClass('dropup');
    
	// dropdown多级下拉菜单
    $('.dropdown-submenu > a').submenupicker();
    
	// 让下拉菜单鼠标hover时打开
	$('.dropdown-toggle').bootstrapDropdownHover();

	// checked-all
	$('.table th .icheckbox :checkbox').click(function(){
		if(this.checked){ 
       		$(this).parents('.table').find(':checkbox').prop('checked',true);
       	}else{
	       	$(this).parents('.table').find(':checkbox').prop('checked',false);
       	}
	});
	
});
