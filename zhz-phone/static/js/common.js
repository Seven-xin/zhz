$(function() {
	//	 index 视频播放 
	var btn_play_on = true;
	//  播放
	$('.btn-play').on('click', function() {
		video_play($(this));
		btn_play_on = !btn_play_on;
		//  显示暂停按钮
//		$(this).parent().parent().on('click', function() {
//			video_show_hide($(this));
//		})
//	})
//	$('.btn-play2').on('click', function() {
//		video_play($(this));
//		btn_play_on = !btn_play_on;
//		//  显示暂停按钮
//		$(this).parent().parent().on('click', function() {
//			video_show_hide($(this));
//		})
	})

	//  暂停
//	$('.btn-pause').on('click', function() {
//		video_pause($(this));
//		btn_play_on = !btn_play_on;
//	})
	//  封装函数-播放
	function video_play(obj) {
		obj.toggle();
//		obj.siblings('img').toggle();
		obj.parent().parent().children('video').get(0).play();
		obj.parent().parent().children('video').attr("controls", "controls");
	}
//	//  封装函数-暂停
//	function video_pause(obj) {
//		console.log('222')
//		obj.toggle();
//		obj.siblings('img').toggle();
//		obj.parent().parent().children('video').get(0).pause();
//	}
//	//  封装函数-显示暂停按钮
//	function video_show_hide(obj) {
//		if(!btn_play_on) {
//			obj.children('.btn-play-box').children('.btn-pause').toggle();
//		}
//	}
})

//  院校库
$('.zhz-cont-boxc .row span').on('click',function(){
	$(this).addClass('zhz-cont-boxc-on').siblings().removeClass('zhz-cont-boxc-on');
})

//  直播
$('#myTab li').on('click',function(){
	var live_num = $(this).index();
	$('.live-banner li').eq(live_num).addClass('live-banner-on').siblings().removeClass('live-banner-on');
})

//  专业库
$('.btn-sr-sublist-show').on('click',function(){
		$(this).css('display','none');
		$(this).parent().children('.btn-sr-sublist-hidden').css('display','block');
		$(this).parent().children('.sr-sublist').css('display','block');
	$('.btn-sr-sublist-hidden').on('click',function(){
		$(this).css('display','none');
		$(this).parent().children('.btn-sr-sublist-show').css('display','block');
		$(this).parent().children('.sr-sublist').css('display','none');
	})
})
