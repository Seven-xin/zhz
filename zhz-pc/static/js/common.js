$(function() {
	//  查询下拉 
	var on = true;

	$('.xiala').on('click', function() {
		if(on) {
			$('.xiala ul').css("display", "block");
		} else {
			$('.xiala ul').css("display", "none");
		}
		on = !on;
	});

	//  首页视频切换
	$('.hot-sch-list a ').on('click', function() {
		var hot_sch_list_num = $(this).index();
		$('.hot-sch-video li').eq(hot_sch_list_num).addClass('hot-sch-video-active').siblings().removeClass('hot-sch-video-active');
		$(this).addClass('hot-sch-list-on').siblings().removeClass('hot-sch-list-on');
		$('.hot-sch-video li').eq(hot_sch_list_num).children('video').get(0).play();
		$('.hot-sch-video li').eq(hot_sch_list_num).siblings().children('video').get(0).pause();
	})

	//  底部table选项卡
	$('.link-title li').on('click', function() {
		$(this).addClass('link-title-on').siblings().removeClass('link-title-on');
		var link_title_num = $(this).index();
		$('.link-cont').eq(link_title_num).addClass('link-cont-active').siblings().removeClass('link-cont-active');
	});

	//  一对一  table选项卡
	$('.one-ysfd-box-list li').on('click', function() {
		var one_list_num = $(this).index();
		$(this).addClass('one-ysfd-on').siblings().removeClass('one-ysfd-on');
		$('.one-ysfd-box-item').eq(one_list_num).addClass('one-ysfd-active').siblings().removeClass('one-ysfd-active')
	});

	//  返回顶部
	$('.fix-back').on('click', function() {
		$('html,body').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	//  小周视频切换
	var xzugc_menu_on = true;
	$('.xzugc-menu').on('click', function() {
		if(xzugc_menu_on) {
			$('.xz-video-list').css("display", "block");
		} else {
			$('.xz-video-list').css("display", "none");
		}
		xzugc_menu_on = !xzugc_menu_on;
	});

	//  视频切换
	$('.xz-video-box-t li').eq(0).children('video').get(0).play();
	$('.xz-video-list li').on('click', function() {
		var xz_video_list_num = $(this).index();
		$('.xz-video-box-t li').eq(xz_video_list_num).addClass('xz-video-box-active').siblings().removeClass('xz-video-box-active');
		$(this).addClass('xz-video-box-on').siblings().removeClass('xz-video-box-on');
		$('.xz-video-box-t li').children('video').get(0).pause();
		$('.xz-video-box-t li.xz-video-box-active').children('video').get(0).play();
		var xz_video_li_txet = $(this).text();
		$('.location-video-title span').html(xz_video_li_txet);
		$('.xz-video-else h1').html(xz_video_li_txet);
	})
})