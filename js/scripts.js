$(document).ready(function () {
	$('#reservebutton').click(function () {
		$('#reservet').modal();
	});
	$('#loginbutton').click(function () {
		$('#loginModal').modal();
	});
	$('#mycarousel').carousel({ interval: 2000 });
	$('#carousel-pause').click(function () {
		if ($('#carouselButton').children('span').hasClass('fa-pause')) {
			$('#mycarousel').carousel('pause');
			$('#carouselButton').children('span').removeClass('fa-pause');
			$('#carouselButton').children('span').addClass('fa-play');
		}
	});
	$('#carousel-play').click(function () {
		if ($('#carouselButton').children('span').hasClass('fa-play')) {
			$('#mycarousel').carousel('cycle');
			$('#carouselButton').children('span').removeClass('fa-play');
			$('#carouselButton').children('span').addClass('fa-pause');
		}
	});
	$('#carouselButton').click(function () {
		if ($('#carouselButton').children('span').hasClass('fa-pause')) {
			$('#mycarousel').carousel('pause');
			$('#carouselButton').children('span').removeClass('fa-pause');
			$('#carouselButton').children('span').addClass('fa-play');
		} else if ($('#carouselButton').children('span').hasClass('fa-play')) {
			$('#mycarousel').carousel('cycle');
			$('#carouselButton').children('span').removeClass('fa-play');
			$('#carouselButton').children('span').addClass('fa-pause');
		}
	});
});
