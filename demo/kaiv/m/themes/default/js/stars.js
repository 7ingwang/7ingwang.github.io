/* 星级点评 */
$(".starsbtn .star.s1").click(function(){
	$(this).parent().find(".s1").addClass("light")
	$(this).parent().parent().find(".word").text("1分 很难吃")
	$(this).parent().parent().find(".write").val("真是难以下咽！希望餐厅引起重视，抓紧改良。")
/* 	$(this).not(".light").parent().parent().find(".word").empty() */
/* 	$(this).not(".light").parent().parent().find(".write").val("") */
});
$(".starsbtn .star.s2").click(function(){
	$(this).parent().find(".s1,.s2").addClass("light")
	$(this).parent().parent().find(".word").text("2分 有点难吃")
	$(this).parent().parent().find(".write").val("不太好吃！建议对菜肴做一些调整。")
/* 	$(this).not(".light").parent().parent().find(".word").empty() */
/* 	$(this).not(".light").parent().parent().find(".write").val("") */
});
$(".starsbtn .star.s3").click(function(){
	$(this).parent().find(".s1,.s2,.s3").addClass("light")
	$(this).parent().parent().find(".word").text("3分 一般")
	$(this).parent().parent().find(".write").val("还行，可以吃！只是没有那么那么好吃而已。")
/* 	$(this).not(".light").parent().parent().find(".word").empty() */
/* 	$(this).not(".light").parent().parent().find(".write").val("") */
});
$(".starsbtn .star.s4").click(function(){
	$(this).parent().find(".s1,.s2,.s3,.s4").addClass("light")
	$(this).parent().parent().find(".word").text("4分 不错，好吃")
	$(this).parent().parent().find(".write").val("口感合适，味道鲜美！总的来说还不错。 ")
/* 	$(this).not(".light").parent().parent().find(".word").empty() */
/* 	$(this).not(".light").parent().parent().find(".write").val("") */
});
$(".starsbtn .star.s5").click(function(){
	$(this).parent().find(".s1,.s2,.s3,.s4,.s5").addClass("light")
	$(this).parent().parent().find(".word").text("5分 太好吃了")
	$(this).parent().parent().find(".write").val("真是人间美味！从来没吃过这么好吃的菜。 ")
/* 	$(this).not(".light").parent().parent().find(".word").empty() */
/* 	$(this).not(".light").parent().parent().find(".write").val("") */
});