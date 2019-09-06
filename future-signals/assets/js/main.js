$(document).ready(function(){
	console.log("hello world");


	$('.research-item').click(function(){
		$(this).toggleClass('large');
	});

	var hideAll = function() {
		$('.research-item').addClass('hide');
	}

	$('.btn-robot').click(function(){
		hideAll();
		$('.robot').removeClass('hide');
	});

	$('.btn-human').click(function(){
		hideAll();
		$('.human').removeClass('hide');
	});

	$('.btn-all').click(function(){
		$('.research-item').removeClass('hide');
	});

	$('.btn-flesh').click(function(){
		hideAll();
		$('.flesh').removeClass('hide');
	});

	$('.btn-control').click(function(){
		hideAll();
		$('.control').removeClass('hide');
	});

	$('.btn-troubled').click(function(){
		hideAll();
		$('.troubled').removeClass('hide');
	});


});