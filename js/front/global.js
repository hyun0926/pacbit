$(function() {
  // radio, checkbox style
  $(".iCheck").iCheck({
    checkboxClass: 'icheckbox_flat-blue',
    radioClass: 'iradio_flat-blue'
  });
  // tab 메뉴
  // $('.tabList a').click(function(e){
  //   e.preventDefault();
  //   $('.tabList a, .tabCon').removeClass('current');
  //   $(this).add($($(this).attr('href'))).addClass('current');
  // });
  // popup num1
  $('.btnPopNum1').click(function(){
    $('.popNum1').show();
  })
  $('.btn_popClose').click(function(){
    $('.popNum1').fadeOut();
  });
  // popup num2
  $('.btnPopNum2').click(function(){
    $('.popNum2').show();
  })
  $('.btn_popClose').click(function(){
    $('.popNum2').fadeOut();
  });
  // popup num3
  $('.btnPopNum3').click(function(){
    $('.popNum3').show();
  })
  $('.btn_popClose').click(function(){
    $('.popNum3').fadeOut();
  });
  // popup num4
  $('.btnPopNum4').click(function(){
    $('.popNum4').show();
  })
  $('.btn_popClose').click(function(){
    $('.popNum4').fadeOut();
  });
	  // popup num5
  $('.btnPopNum5').click(function(){
    $('.popNum5').show();
  })
  $('.btn_popClose').click(function(){
    $('.popNum5').fadeOut();
  });	
  // radio tab
  $(".tradeInfo_wrap").last().hide();
    var radioContent = $(".tradeInfo_wrap");
  $(".radio_wrap input[type='radio']").click(function(){
    radioContent.hide();
    radioContent.eq($(".radio_wrap input[type='radio']").index(this)).show();
  });
  // 전자지갑주소
  $('.creatWallet a.btn_ewallet').click(function(){
    $('.creatWallet .view').hide();
    $('.creatWallet .hidden').show();
  })
  // 탭다운 게시판
  $('dl.tabDownBody dt').each(function() {
	  $(this).on("click", function() {
		  $('.tabDownBody dd').slideUp();
		  if($(this).next().css("display") != "block") {
			  $(this).next().slideDown();
		  }
	  });
  });
	// tab 메뉴
  $('.tabList a').click(function(e){
    e.preventDefault();
    $('.tabList a, .tabCon').removeClass('current');
    $(this).add($($(this).attr('href'))).addClass('current');
  });
  // 모바일 메뉴
  $('.btn_menu_mobile').click(function(){
    $('.top_menu_wrap').toggle();
  })
  var mobile_header_h = $('.header').height()+40-9; // height - padding값 - svg높이값
  $('.top_menu_wrap').css({'top':mobile_header_h});
  $(window).resize(function(){
    var mobile_header_h = $('.header').height()+40-9; // height - padding값 - svg높이값
    $('.top_menu_wrap').css({'top':mobile_header_h});
  })
	//open popup
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
		if(event.which=='27'){
			$('.cd-popup').removeClass('is-visible');
		}
	});
	//@COMMENT : 인증자료제출 탭메뉴
	$('.tabCn_1').show();
	$('.sub_tabmenu li a').each(function(index){
		$(this).attr('data-tab',index+1)
	})
	$('.sub_tabmenu li a').click(function(){
		var tabNum = parseInt($(this).attr('data-tab'))
		$('.tabCn').hide();
		$('.tabCn_'+tabNum).fadeIn();
		$('.sub_tabmenu li a').removeClass('current')
		$(this).addClass('current')
	})
	
	$('.tabCn02_1').show();
	$('.sub_tabmenu02 li a').each(function(index){
		$(this).attr('data-tab',index+1)
	})
	$('.sub_tabmenu02 li a').click(function(){
		var tabNum = parseInt($(this).attr('data-tab'))
		$('.tabCn02').hide();
		$('.tabCn02_'+tabNum).fadeIn();
		$('.sub_tabmenu02 li a').removeClass('current')
		$(this).addClass('current')
	})
	
	$('.tabCn03_1').show();
	$('.sub_tabmenu03 li a').each(function(index){
		$(this).attr('data-tab',index+1)
	})
	$('.sub_tabmenu03 li a').click(function(){
		var tabNum = parseInt($(this).attr('data-tab'))
		$('.tabCn03').hide();
		$('.tabCn03_'+tabNum).fadeIn();
		$('.sub_tabmenu03 li a').removeClass('current')
		$(this).addClass('current')
	})		

});

$(function($){
	var mainHeader = $('.cd-auto-hide-header'),
		secondaryNavigation = $('.cd-secondary-nav'),
		//this applies only if secondary nav is below intro section
		belowNavHeroContent = $('.sub-nav-hero'),
		headerHeight = mainHeader.height();

	//set scrolling variables
	var scrolling = false,
		previousTop = 0,
		currentTop = 0,
		scrollDelta = 10,
		scrollOffset = 150;

	mainHeader.on('click', '.nav-trigger', function(event){
		// open primary navigation on mobile
		event.preventDefault();
		mainHeader.toggleClass('nav-open');
	});

	$(window).on('scroll', function(){
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame)
				? setTimeout(autoHideHeader, 250)
				: requestAnimationFrame(autoHideHeader);
		}
	});

	$(window).on('resize', function(){
		headerHeight = mainHeader.height();
	});

	function autoHideHeader() {
		var currentTop = $(window).scrollTop();

		( belowNavHeroContent.length > 0 )
			? checkStickyNavigation(currentTop) // secondary navigation below intro
			: checkSimpleNavigation(currentTop);

	   	previousTop = currentTop;
		scrolling = false;
	}

	function checkSimpleNavigation(currentTop) {
		//there's no secondary nav or secondary nav is below primary nav
	    if (previousTop - currentTop > scrollDelta) {
	    	//if scrolling up...
	    	mainHeader.removeClass('is-hidden');
	    } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
	    	//if scrolling down...
	    	mainHeader.addClass('is-hidden');
	    }
	}

	function checkStickyNavigation(currentTop) {
		//secondary nav below intro section - sticky secondary nav
		var secondaryNavOffsetTop = belowNavHeroContent.offset().top - secondaryNavigation.height() - mainHeader.height();

		if (previousTop >= currentTop ) {
	    	//if scrolling up...
	    	if( currentTop < secondaryNavOffsetTop ) {
	    		//secondary nav is not fixed
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.removeClass('fixed slide-up');
	    		belowNavHeroContent.removeClass('secondary-nav-fixed');
	    	} else if( previousTop - currentTop > scrollDelta ) {
	    		//secondary nav is fixed
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.removeClass('slide-up').addClass('fixed');
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	}

	    } else {
	    	//if scrolling down...
	 	  	if( currentTop > secondaryNavOffsetTop + scrollOffset ) {
	 	  		//hide primary nav
	    		mainHeader.addClass('is-hidden');
	    		secondaryNavigation.addClass('fixed slide-up');
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	} else if( currentTop > secondaryNavOffsetTop ) {
	    		//once the secondary nav is fixed, do not hide primary nav if you haven't scrolled more than scrollOffset
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.addClass('fixed').removeClass('slide-up');
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	}

	    }
	}
});
$(function($){
	var backTop = document.getElementsByClassName('js-cd-top')[0],
		// browser window scroll (in pixels) after which the "back to top" link is shown
		offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offsetOpacity = 1200,
		scrollDuration = 700
		scrolling = false;
	if( backTop ) {
		//update back to top visibility on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
			}
		});
		//smooth scroll to top
		backTop.addEventListener('click', function(event) {
			event.preventDefault();
			(!window.requestAnimationFrame) ? window.scrollTo(0, 0) : scrollTop(scrollDuration);
		});
	}

	function checkBackToTop() {
		var windowTop = window.scrollY || document.documentElement.scrollTop;
		( windowTop > offset ) ? addClass(backTop, 'cd-top--show') : removeClass(backTop, 'cd-top--show', 'cd-top--fade-out');
		( windowTop > offsetOpacity ) && addClass(backTop, 'cd-top--fade-out');
		scrolling = false;
	}

	function scrollTop(duration) {
	    var start = window.scrollY || document.documentElement.scrollTop,
	        currentTime = null;

	    var animateScroll = function(timestamp){
	    	if (!currentTime) currentTime = timestamp;
	        var progress = timestamp - currentTime;
	        var val = Math.max(Math.easeInOutQuad(progress, start, -start, duration), 0);
	        window.scrollTo(0, val);
	        if(progress < duration) {
	            window.requestAnimationFrame(animateScroll);
	        }
	    };

	    window.requestAnimationFrame(animateScroll);
	}

	Math.easeInOutQuad = function (t, b, c, d) {
 		t /= d/2;
		if (t < 1) return c/2*t*t + b;
		t--;
		return -c/2 * (t*(t-2) - 1) + b;
	};

	//class manipulations - needed if classList is not supported
	function hasClass(el, className) {
	  	if (el.classList) return el.classList.contains(className);
	  	else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	}
	function addClass(el, className) {
		var classList = className.split(' ');
	 	if (el.classList) el.classList.add(classList[0]);
	 	else if (!hasClass(el, classList[0])) el.className += " " + classList[0];
	 	if (classList.length > 1) addClass(el, classList.slice(1).join(' '));
	}
	function removeClass(el, className) {
		var classList = className.split(' ');
	  	if (el.classList) el.classList.remove(classList[0]);
	  	else if(hasClass(el, classList[0])) {
	  		var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
	  		el.className=el.className.replace(reg, ' ');
	  	}
	  	if (classList.length > 1) removeClass(el, classList.slice(1).join(' '));
	}
});