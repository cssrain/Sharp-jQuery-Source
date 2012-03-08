/*衣服颜色切换*/
$(function(){
	$(".color_change ul li img").click(function(){           
		  var imgSrc = $(this).attr("src");
		  var i = imgSrc.lastIndexOf(".");
		  var unit = imgSrc.substring(i);
		  imgSrc = imgSrc.substring(0,i);
		  var imgSrc_small = imgSrc + "_one_small"+ unit;
		  var imgSrc_big = imgSrc + "_one_big"+ unit;
		  $("#bigImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });
		  $("#thickImg").attr("href", imgSrc_big);
		  var alt = $(this).attr("alt");
		  $(".color_change strong").text(alt);
		  var url = imgSrc+".html";
		  $(".pro_detail_left ul.imgList")
				.empty()
				.load(url);
	});
});