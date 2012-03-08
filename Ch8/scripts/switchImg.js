/*点击左侧产品小图片切换大图*/
$(function(){
	$(".pro_detail_left ul li img").livequery("click",function(){ 
		  var imgSrc = $(this).attr("src");
		  var i = imgSrc.lastIndexOf(".");
		  var unit = imgSrc.substring(i);
		  imgSrc = imgSrc.substring(0,i);
		  var imgSrc_small = imgSrc + "_small"+ unit;
		  var imgSrc_big = imgSrc + "_big"+ unit;
		  $("#bigImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });
		  $("#thickImg").attr("href", imgSrc_big);
	});
});