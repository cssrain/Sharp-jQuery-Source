/*新闻滚动*/
$(function(){
        var $this = $(".scrollNews");
		var scrollTimer;
		$this.hover(function(){
			  clearInterval(scrollTimer);
		 },function(){
		   scrollTimer = setInterval(function(){
						 scrollNews( $this );
					}, 3000 );
		}).trigger("mouseleave");
});
function scrollNews(obj){
   var $self = obj.find("ul:first"); 
   var lineHeight = $self.find("li:first").height(); //获取行高
   $self.animate({ "marginTop" : -lineHeight +"px" }, 600 , function(){
         $self.css({marginTop:0}).find("li:first").appendTo($self); //appendTo能直接移动元素
   })
}