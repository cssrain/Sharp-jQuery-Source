//导航效果（兼容IE6）
$(function(){
   $("#nav li").hover(function(){
		$(this).find(".jnNav").show();
	},function(){
		$(this).find(".jnNav").hide();
	});
})