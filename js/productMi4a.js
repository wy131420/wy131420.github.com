var FeatureMiUtil={PrefixedEvent:function(a,b,c){var d,e,f,g;f=["webkit","moz","MS","o",""],g=[];for(d in f)e=f[d],e||(b=b.toLowerCase()),g.push(a[0].addEventListener(e+b,c,!1));return g},dectCSSFeature:function(a){var b,c,d,e,f,g;if(d=!1,b="Webkit Moz ms O".split(" "),c=document.createElement("div"),e=null,a=a.toLowerCase(),void 0!==c.style[a]&&(d=!0),d===!1){e=a.charAt(0).toUpperCase()+a.substr(1);for(f in b)if(g=b[f],void 0!==c.style[g+e]){d=!0;break}}return d},updateTransform:function(a,b){a.css("-webkit-transform",b),a.css("-moz-transform",b),a.css("-ms-transform",b),a.css("-o-transform",b),a.css("transform",b)}},FeatureMain={config:function(){var a=this;a.ISSCROLLWATCH=!0,a.SCREENINDEX=0,a.SCREENHEI=0,a.SCREENAMOUNT=10,a.SLIDESCREENINDEX=1,a.SLIDEINDEX=0,a.SCREENNAME=["fea-one","fea-two","fea-three","fea-four","fea-five","fea-six","fea-seven","fea-eight","fea-nine","fea-ten"],a.TABNAME=global.TABS,a.ISFIRSTTAB=!0,a.ISHASHHEADHEI=!1},init:function(){var a=this;a.config(),a.judgeCss()},judgeCss:function(){var a=FeatureMiUtil.dectCSSFeature("transition");FeaturePage.init(a)}},FeaturePage={init:function(a){var b=this,c=FeatureMain;a?(c.SUPPORT=!0,b.dynamicExe()):(c.SUPPORT=!1,b.staticExe()),b.exeScroll()},exeScroll:function(){var a=0;$(window).scroll(function(){a++,5>a&&$(window).scrollTop(0)})},staticExe:function(){var a=this;$("body").addClass("scroll"),$(".J_feature_leftbotomani").removeClass("hide"),$(".J_mi4_content").find(".mi4-content-feature-a").addClass("turnBlack"),$("body").addClass("intro-start"),$(".J_feature_craftsbtn").addClass("showcraftsBtn"),$(".J_feature_midani").removeClass("hide"),$(".J_feature_camera").removeClass("anihide"),$(".J_feature_botmani").removeClass("anihide"),$(".J_feature_sudu").removeClass("hideWidth"),$(".J_feature_leftimg").removeClass("anihide"),$(".J_feature_righimg").removeClass("anihide"),$(".J_feature_crafts").find("li").removeClass("stephideFont"),a.staticResize(),window.onresize=$.proxy(a.staticResize,a),$(".J_feature_control").show(),a.clickToTab()},staticResize:function(){var a=this,b=$(window).width();$(".J_feature_crafts").find("li").each(function(a){$(this).css("width",b+"px");var c=a*b;$(this).css("left",c+"px")}),$(".J_feature_crafts").css("width",b+"px"),$(".J_feature_crafts").css("margin-left","-"+b/2+"px");var c=$(".J_feature_crafts").find("li").length,d=c*b;$(".J_feature_ruler").css("width",d+"px"),$(".J_feature_ruler").css("margin-left","-"+b/2+"px");var e=$(".J_feature_craftsbtn").find("li").length,f=0,g=!0,h=function(a){f=a;var b=$(window).width(),c=b/2+a*b;$(".J_feature_crafts").animate({marginLeft:"-"+c+"px"},900),$(".J_feature_ruler").animate({marginLeft:"-"+c+"px"},900),$(".J_feature_craftsbtn").find("li").removeClass("current"),$(".J_feature_craftsbtn").find("li").eq(a).addClass("current"),6==a?$(".J_feature_rightfor").removeClass("forward"):0==a?$(".J_feature_leftfor").removeClass("forward"):($(".J_feature_rightfor").addClass("forward"),$(".J_feature_leftfor").addClass("forward"));var d=function(){g=!0};setTimeout(d,1e3)};$(".J_feature_craftsbtn").find("li").each(function(a){$(this).click(function(){h(a)})}),$(".J_feature_leftfor").click(function(){return g?(g=!1,f--,0>f?(f=0,void(g=!0)):void h(f)):!1}),$(".J_feature_rightfor").click(function(){return g?(g=!1,f++,f>e-1?(f=e-1,void(g=!0)):void h(f)):!1});var i=$(window).width(),j=1010;$(".J_feature_float").css("width",i/2+"px"),$(".J_feature_float").css("height",j+"px");var k=1264,l=1483,m=k+i/2-l,n=260,o=1476,p=n+i/2-o;$(".J_feature_float_imga").css("right",m+"px"),$(".J_feature_float_imgb").css("right",p+"px");var q=$(".J_feature_control").width();$(".J_feature_control").css("right",(i-q)/2+"px"),a.slideBlackWhite(),a.staticchangeBlock()},dynamicExe:function(){var a=this;$("body").addClass("default"),a.resizeCallback(),window.onresize=$.proxy(a.resizeCallback,a),$(".site-topbar").addClass("hideUp"),$.proxy(a.watchEvent(),a),a.initFristAni(),a.slideBlackWhite(),a.leftrightScroll(),a.changeBlock(),$(".J_feature_nav").removeClass("hide"),a.navClick(),$(".J_fixed_bar").removeClass("hide"),a.downForward(),a.checkHash(),a.clickToTab(),a.watchKeyBoard(),a.watchTouchPad()},watchKeyBoard:function(){var a=this,b=FeatureMain;document.onkeydown=function(c){var d=c||window.event||arguments.callee.caller.arguments[0];if(d&&38==d.keyCode&&b.ISFIRSTTAB){if(!b.ISSCROLLWATCH)return!1;a.scrollAniStart(),a.scrollUpForward()}if(d&&40==d.keyCode&&b.ISFIRSTTAB){if(!b.ISSCROLLWATCH)return!1;a.scrollAniStart(),a.scrollDownForward()}}},watchTouchPad:function(){function a(){var a;return a=window.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function b(){h&&(MSPointer=a(),$(document).off("touchstart "+MSPointer.down).on("touchstart "+MSPointer.down,d),$(document).off("touchmove "+MSPointer.move).on("touchmove "+MSPointer.move,e))}function c(a){var b=new Array;return window.navigator.msPointerEnabled?(b.y=a.pageY,b.x=a.pageX):(b.y=a.touches[0].pageY,b.x=a.touches[0].pageX),b}function d(a){var b=a.originalEvent,d=c(b);i=d.y}function e(a){var b=a.originalEvent,d=c(b);if(j=d.y,g.ISFIRSTTAB){if(!g.ISSCROLLWATCH)return!1;f.scrollAniStart(),j-i>0?f.scrollUpForward():f.scrollDownForward(),b.preventDefault()}}var f=this,g=FeatureMain,h=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/),i=0,j=0;b()},initslideTouch:function(){var a=300,b=130,c=$(window).width(),d=(c-2*a-2*b)/2,e=a+d+a;$(".J_feature_leftfor").css("width",d+a),$(".J_feature_rightfor").css("width",d),$(".J_feature_leftfor").css("margin-left","-"+e+"px")},navClick:function(){var a=this,b=FeatureMain;$(".J_feature_nav").find("li").each(function(c){$(this).click(function(){b.SCREENINDEX=c,a.update3d("downorup"),$(this).siblings("li").removeClass("current"),$(this).addClass("current")})})},initFristAni:function(){$(".J_mi4_content").find(".mi4-content-feature-a").addClass("turnBlack");var a=function(){$(".J_feature_leftbotomani").removeClass("hide"),$(".J_feature_leftbotomani").addClass("leftbottom-to-center-in"),$("body").addClass("intro-start")},b=window.devicePixelRatio>1,c=".J_preloadImg";b&&(c=".J_preLoadReImg");var d=document.querySelector(c),e=(d.querySelectorAll("img"),new imagesLoaded(d,function(){}));e.on("progress",function(){a()})},resizeCallback:function(){var a=FeatureMain,b=this;winHeight=$(window).height(),a.SCREENHEI=winHeight,$(".J_feature_main").css("height",winHeight);var c=b.getScrollLength(),d="translate3d(0px,"+c+"00%,0px)";FeatureMiUtil.updateTransform($(".J_feature_main"),d),b.changeEleLeft(),b.changeFloatHeiWid(),b.initslideTouch()},changeFloatHeiWid:function(){var a=$(window).width(),b=$(window).height();$(".J_feature_float").css("width",a-80+"px"),$(".J_feature_float").css("height",b+"px");var c=914,d=1102,e=c+a/2-d,f=184,g=1096,h=f+a/2-g;$(".J_feature_float_imga").css("right",e+"px"),$(".J_feature_float_imgb").css("right",h+"px");var i=$(".J_feature_control").width();$(".J_feature_control").css("right",a-80-i/2+"px")},changeEleLeft:function(){var a=this,b=$(window).width();$(".J_feature_crafts").find("li").each(function(a){$(this).css("width",b+"px");var c=a*b;$(this).css("left",c+"px")}),a.initEleMarLeft()},initEleMarLeft:function(){var a=FeatureMain,b=this,c=$(window).width();$(".J_feature_crafts").css("width",c+"px");var d=c/2+a.SLIDEINDEX*c;$(".J_feature_crafts").css("margin-left","-"+d+"px");var e=$(".J_feature_crafts").find("li").length*c,f=a.SLIDEINDEX*c-c/2;if($(".J_feature_ruler").css("width",e+"px"),$(".J_feature_ruler").css("margin-left","-"+f+"px"),a.SCREENINDEX!=a.SLIDESCREENINDEX){var g=$(".J_feature_crafts").find("li").length,h=(g-1)*c+c/2;$(".J_feature_crafts").css("margin-left","-"+h+"px"),b.initRulerWidth(h),$(".J_feature_craftsbtn").removeClass("showcraftsBtn"),$(".J_feature_craftsbtn").removeClass("margintrans"),$(".J_feature_crafts").find(".slide-img").addClass("hideslideImg"),$(".J_feature_craftsbtn").find("li").removeClass("current"),$(".J_feature_craftsbtn").find("li").eq(0).addClass("current"),a.SLIDEINDEX=0,$(".J_feature_crafts").find("li").addClass("stephideFont").eq(0).removeClass("stephideFont"),$(".J_feature_fwarddown").addClass("anihide")}},initRulerWidth:function(a){var b=$(window).width(),c=$(".J_feature_crafts").find("li").length,d=c*b;$(".J_feature_ruler").removeClass("margintrans"),$(".J_feature_ruler").css("width",d+"px"),$(".J_feature_ruler").css("margin-left","-"+a+"px")},initSlide:function(){var a=this,b=FeatureMain;b.SCREENINDEX=-1,a.update3d("up");var c="translate3d(0px,0px,0px)";FeatureMiUtil.updateTransform($(".J_feature_main"),c)},watchEvent:function(){var a=this;$("body").mousewheel($.proxy(a.mousewheelCallback,a))},mousewheelCallback:function(a,b){var c=FeatureMain,d=this;return a.preventDefault(),c.ISSCROLLWATCH?(d.scrollAniStart(),void(b>0?d.scrollUpForward():d.scrollDownForward())):!1},scrollAniStart:function(){var a=FeatureMain;a.ISSCROLLWATCH=!1},scrollAniEnd:function(){var a=this,b=FeatureMain,c=function(){b.ISSCROLLWATCH=!0};b.ISFIRSTTAB&&setTimeout(c,1800),b.SCREENINDEX<b.SLIDESCREENINDEX&&setTimeout($.proxy(a.initEleMarLeft,a),800),a.ifSlideIndex(b.SCREENINDEX),a.isThreeScreen(b.SCREENINDEX),a.isFourScreen(b.SCREENINDEX),a.isFiveScreen(b.SCREENINDEX),a.isSevenScreen(b.SCREENINDEX),a.isEightScreen(b.SCREENINDEX),a.isShouhuan(b.SCREENINDEX)},getScrollLength:function(){var a=FeatureMain,b=a.SCREENINDEX;return-1*b},scrollDownForward:function(){var a=FeatureMain,b=this;a.SCREENINDEX++,b.update3d("down")},scrollUpForward:function(){var a=FeatureMain,b=this;a.SCREENINDEX--,b.update3d("up")},update3d:function(a){var b=this,c=FeatureMain;c.SCREENFORWARD=a;var d=b.checkScreenIndex(a);if(!d)return!1;b.changeHash(),$(".J_feature_nav").find("li").removeClass("current"),$(".J_feature_nav").find("li").eq(c.SCREENINDEX).addClass("current");var e=b.getScrollLength(),f="translate3d(0px,"+e+"00%,0px)";FeatureMiUtil.updateTransform($(".J_feature_main"),f),b.scrollAniEnd()},changeHash:function(){var a=FeatureMain,b=a.SCREENINDEX;location.hash=a.SCREENNAME[b]},checkScreenIndex:function(a){var b=this,c=FeatureMain,d=c.SCREENINDEX,e=!0;if(0>d&&(e=!1,-1>d?(c.SCREENINDEX=-1,c.ISSCROLLWATCH=!0):b.showHead()),0==d&&"down"===a){e=!1,$(".site-topbar").addClass("hideUp"),$(".J_feature_nav").fadeIn(400);var f=function(){$(".J_fixed_bar").show();var a=function(){$(".J_fixed_bar").addClass("showbar")};setTimeout(a,100)};setTimeout(f,1e3),b.scrollAniEnd()}return d>c.SCREENAMOUNT-1&&(e=!1,d>c.SCREENAMOUNT?(c.SCREENINDEX=c.SCREENAMOUNT,c.ISSCROLLWATCH=!0):b.showBottom()),d<=c.SCREENAMOUNT-1&&$(".J_feature_body").css("margin-top","0px"),e},isEightScreen:function(a){if(9==a){var b=function(){var a=function(){var a=$(window).width();$(".J_feature_float").css("width",a-80+"px");var b=function(){$(".J_feature_float").removeClass("widthani");var a=parseInt($(".J_feature_float").width()),b=$(".J_feature_control").width();$(".J_feature_control").css("right",a-b/2),$(".J_feature_control").fadeIn(400)};setTimeout(b,900)};setTimeout(a,1100),$(".J_feature_float").addClass("widthani"),$(".J_feature_float").css("width","0")};$(".J_fixed_bar").addClass("gray"),setTimeout(b,900)}else{$(".J_fixed_bar").removeClass("gray");{$(window).width()}$(".J_feature_control").fadeOut(400);var c=$(".J_feature_control").width(),d=function(){$(".J_feature_control").css("right",80-c/2+"px")};setTimeout(d,900)}},isThreeScreen:function(a){if(2===a){var b=function(){$(".J_feature_midani").removeClass("hide"),$(".J_feature_midani").addClass("mid-to-topright-in")};setTimeout(b,1200)}},isFourScreen:function(a){if(3===a){var b=function(){$(".J_feature_camera").removeClass("anihide"),$(".J_feature_camera").addClass("topright-to-mid-in")};setTimeout(b,1200)}},isFiveScreen:function(a){if(6===a){var b=function(){$(".J_feature_botmani").removeClass("anihide")};setTimeout(b,600)}},isSevenScreen:function(a){if(7===a){var b=function(){$(".J_feature_sudu").removeClass("hideWidth")};setTimeout(b,1e3)}},isShouhuan:function(a){if(8==a){var b=function(){$(".J_feature_leftimg").addClass("left-to-right"),$(".J_feature_righimg").addClass("right-to-left");var a=function(){$(".J_feature_leftimg").removeClass("anihide"),$(".J_feature_righimg").removeClass("anihide")};setTimeout(a,900)};setTimeout(b,1e3)}},ifSlideIndex:function(a){var b=FeatureMain,c=$(window).width();if(b.SLIDESCREENINDEX===a&&("down"===b.SCREENFORWARD||"downorup"===b.SCREENFORWARD)){var d=function(){$(".J_feature_crafts").addClass("margintrans"),$(".J_feature_crafts").css("margin-left","-"+c/2+"px"),$(".J_feature_ruler").addClass("margintrans"),$(".J_feature_ruler").css("margin-left",c/2+"px");var a=$(".J_feature_craftsbtn").hasClass("showcraftsBtn");if(!a){var b=function(){$(".J_feature_craftsbtn").addClass("showcraftsBtn"),$(".J_feature_crafts").find(".slide-img").eq(0).removeClass("hideslideImg")};setTimeout(b,1400)}};setTimeout(d,1500)}},showHead:function(){var a=this;$(".site-topbar").addClass("hidetrans"),$(".site-topbar").removeClass("hideUp"),$(".J_feature_nav").fadeOut(400),$(".J_fixed_bar").removeClass("showbar"),$(".J_fixed_bar").fadeOut(200),$(".J_feature_nav").find("li").removeClass("current"),$(".J_feature_nav").find("li").eq(0).addClass("current"),a.scrollAniEnd()},showBottom:function(){var a=this,b=$(".site-footer").height();$(".J_feature_body").css("margin-top","-"+b+"px"),a.scrollAniEnd()},leftrightScroll:function(){var a=$(".J_feature_craftsbtn").find("li").length,b=0,c=!0,d=FeatureMain,e=function(a){d.SLIDEINDEX=a;var b=$(window).width(),e=($(".J_feature_crafts").find("li").eq(a).width(),b/2+a*b),f=b/2-a*b;$(".J_feature_crafts").find(".slide-img").addClass("hideslideImg"),$(".J_feature_craftsbtn").find("li").removeClass("current"),$(".J_feature_craftsbtn").find("li").eq(a).addClass("current"),$(".J_feature_crafts").css("margin-left","-"+e+"px"),$(".J_feature_ruler").css("margin-left",f+"px"),6==a?$(".J_feature_rightfor").removeClass("forward"):0==a?$(".J_feature_leftfor").removeClass("forward"):($(".J_feature_rightfor").addClass("forward"),$(".J_feature_leftfor").addClass("forward")),$(".J_feature_crafts").find("li").addClass("stephideFont");var g=function(){c=!0,$(".J_feature_crafts").find("li").eq(a).removeClass("stephideFont"),6==a?$(".J_feature_fwarddown").removeClass("anihide"):$(".J_feature_fwarddown").addClass("anihide")};setTimeout(g,900)};$(".J_feature_craftsbtn").find("li").each(function(a){$(this).click(function(){b=a,e(a)})}),$(".J_feature_leftfor").click(function(){return c?(c=!1,b--,0>b?(b=0,void(c=!0)):void e(b)):!1}),$(".J_feature_rightfor").click(function(){return c?(c=!1,b++,b>a-1?(b=a-1,void(c=!0)):void e(b)):!1})},checkHash:function(){var a=location.hash,b=FeatureMain,c=this;if(-1!=a.indexOf("#")){var d=a.substring(1),e=$.inArray(d,b.SCREENNAME);-1!=e&&(b.SCREENINDEX=e,c.update3d("down"))}},scrollTab:function(){$(".J_mi4_content_border").hide()},clickToTab:function(){var a=this,b=FeatureMain;$(".J_featureTab").click(function(){b.ISHASHHEADHEI=!1;var c=$(this).attr("href").substring(1),d=c.split("-")[0],e=c.split("-")[1],f=$.inArray(d,b.TABNAME),g=$(this).attr("data-one");return b.ISTABONE=g?!0:!1,-1==f?!1:(a.scrollTab(f,e),event.preventDefault(),!1)}),$(".J_craft_border").click(function(){return $(".J_mi4_content_border").show(),$("body,html").animate({scrollTop:0},500),$(".J_mi4_content").hide(),!1})},changeBar:function(){},changeBlock:function(){},staticchangeBlock:function(){},slideBlackWhite:function(){$(".J_feature_control").mousedown(function(a){var b=parseInt($(this).css("right")),c=$(this),d=c.width(),e=$(window).width(),f=e-a.pageX;$(document).on("mousemove",function(a){var g=e-a.pageX-f,h=g+b;h>e-d/2||-d/2>h||(c.css("right",h+"px"),$(".J_feature_float").css("width",h+d/2+"px"))}),$(document).on("mouseup",function(){$(this).unbind("mousemove")})})},downForward:function(){var a=FeatureMain,b=this;$(".J_feature_turndown").removeClass("hide"),$(".J_feature_turndown").click(function(){a.SCREENINDEX=1,b.update3d("down")}),$(".J_feature_fwarddown").removeClass("hide"),$(".J_feature_fwarddown").click(function(){a.SCREENINDEX=2,b.update3d("down")})}};$(function(){FeatureMain.init()});