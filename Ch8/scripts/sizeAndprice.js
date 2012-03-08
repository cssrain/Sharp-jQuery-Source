/*衣服尺寸选择*/
$(function(){
	$(".pro_size li span").click(function(){
		$(this).parents("ul").siblings("strong").text(  $(this).text() );
	})
})
/*数量和价格联动*/
$(function(){
    var $span = $("div.pro_price span");
	var price = $span.text();	
	$("#num_sort").change(function(){
	    var num = $(this).val();
		var amount = num * price;
		$span.text( amount );
	}).change();
})
