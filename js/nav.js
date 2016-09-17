$(function(){
	$(".nav-category").hover(function(){
		$(this).children(".btn-category-list").css("background-image","url('images/b2.png')");
		$(this).children(".nav-category-section").show();
	},function(){
		$(this).children(".btn-category-list").css("background-image","url('images/b1.png')");
		$(this).children(".nav-category-section").hide();
		$(".nav-category-item").removeClass("current");
	})
	
	$(".nav-category-item").hover(function(){
		$(this).addClass("current").siblings().removeClass("current");
		var hei=$(this).find(".nav-category-children").height();
		var hei_nav=$(".nav-category-list").height();
		var hei_item=$(this).offset().top-197;
		var hei_item1=$(this).height();
		//alert(hei_item1);
		if((hei_nav-hei_item)<hei){
			$(this).find(".nav-category-children").css({"top":"auto","bottom":-hei_nav+hei_item1+hei_item});
		}else{
			return false;
		}
	},function(){
		$(this).children(".nav-category-section").hide();
	})
})// JavaScript Document