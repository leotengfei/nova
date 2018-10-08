
(function($){
	$(document).ready(function(){

		/*视频窗口开始定义*/
		// var yy = document.getElementsByTagName("video")[0];
	 //   	var sxl = document.getElementsByTagName("video")[1];
  //  		var sxw = document.getElementsByTagName("video")[2];
  //  		var yw = document.getElementsByTagName("video")[3];
  //  		var wl = document.getElementsByTagName("video")[4];
  //  		var hx = document.getElementsByTagName("video")[5];
  //  		var wx = document.getElementsByTagName("video")[6];
  //  		var wz = document.getElementsByTagName("video")[7];
    	/*视频窗口关闭开始*/
    	$("#guanbi").click(function(){
        	$("#shipin").fadeOut(600);
        	$("#yy,#wxl,#sxw,#yw,#wl,#hx,#sw,#wz").fadeOut(100);
        	$(this).siblings().children().first().get(0).pause();
        	console.dir($(this).siblings().children().length);
        	var videonum=$(this).siblings().children().length;
        	for(var i=0;i<videonum;i++){
        		$(this).siblings().children().get(i).pause();
        	}
        	// yy.pause();
        	// sxl.pause();
        	// sxw.pause();
        	// yw.pause();
        	// wl.pause();
        	// hx.pause();
        	// wx.pause();
        	// wz.pause();
    	});
    	/*视频窗口关闭结束*/

    	/*英语视频窗口显示开始*/
    	$("#yydakai").click(function(){
        	$("#shipin").fadeIn(600);
        	$("#yy").fadeIn(100);
        	document.getElementById("yy").innerHTML = "<video src=\"http://wxxk.starbaby.top/2018mkyy.mp4\" controls=\"controls\">你的浏览器太老了，连视频都放不了</video>";
        	$('#yy>video').get(0).play(); 
    	});
    	/*英语视频窗口显示结束*/

    	$("#sxldakai").click(function(){
        	$("#shipin").fadeIn(600);
        	$("#sxl").fadeIn(100);
        	document.getElementById("sxl").innerHTML = "<video src=\"http://wxxk.starbaby.top/2018mksxl.mp4\" controls=\"controls\">你的浏览器太老了，连视频都放不了</video>";
        	$('#sxl>video').get(0).play(); 
    	});
    	$("#sxwdakai").click(function(){
        	$("#shipin").fadeIn(600);
        	$("#sxw").fadeIn(100);
        	document.getElementById("sxw").innerHTML = "<video src=\"http://wxxk.starbaby.top/2018mksxw.mp4\" controls=\"controls\">你的浏览器太老了，连视频都放不了</video>";
        	$('#sxw>video').get(0).play(); 
    	});
    	$("#ywdakai").click(function(){
        	$("#shipin").fadeIn(600);
        	$("#yw").fadeIn(100);
        	document.getElementById("yw").innerHTML = "<video src=\"http://wxxk.starbaby.top/2018mkyw.mp4\" controls=\"controls\">你的浏览器太老了，连视频都放不了</video>";
        	$('#yw>video').get(0).play(); 
    	});
    	$("#wldakai").click(function(){
        	$("#shipin").fadeIn(600);
        	$("#wl").fadeIn(100);
        	document.getElementById("wl").innerHTML = "<video src=\"http://wxxk.starbaby.top/2018mkwl.mp4\" controls=\"controls\">你的浏览器太老了，连视频都放不了</video>";
        	$('#wl>video').get(0).play(); 
    	});
    	$("#hxdakai").click(function(){
        	$("#shipin").fadeIn(600);
        	$("#hx").fadeIn(100);
        	document.getElementById("hx").innerHTML = "<video src=\"http://wxxk.starbaby.top/2018mkhx.mp4\" controls=\"controls\">你的浏览器太老了，连视频都放不了</video>";
        	$('#hx>video').get(0).play(); 
    	});
    	$("#swdakai").click(function(){
        	$("#shipin").fadeIn(600);
        	$("#sw").fadeIn(100);
        	document.getElementById("sw").innerHTML = "<video src=\"http://wxxk.starbaby.top/2018mksw.mp4\" controls=\"controls\">你的浏览器太老了，连视频都放不了</video>";
        	$('#sw>video').get(0).play(); 
    	});
    	$("#wzdakai").click(function(){
        	$("#shipin").fadeIn(600);
        	$("#wz").fadeIn(100);
        	document.getElementById("wz").innerHTML = "<video src=\"http://wxxk.starbaby.top/2018mkwz.mp4\" controls=\"controls\">你的浏览器太老了，连视频都放不了</video>";
        	$('#wz>video').get(0).play(); 
    	});
    	/*全部视频窗口显示结束*/

	
		$(".banner-image").backstretch('images/banner.jpg');		
		// Fixed header
		//-----------------------------------------------
		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		$(window).load(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});
		
	   $('#quote-carousel').carousel({
		 pause: true,
		 interval: 4000,
	   });
		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			$('body').scrollspy({ 
				target: '.scrollspy',
				offset: 152
			});
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top-151
						}, 1000);
						return false;
					}
				}
			});
		}

		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, 400);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0) {
			$(window).load(function() {
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}

	}); // End document ready
})(this.jQuery);