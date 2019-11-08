$(document).ready(function(){
	console.log("hello world");

	var hideAll = function() {
		$('.folio').addClass('hide');
	}

	$('.btn-all').click(function(){
		$('.folio').removeClass('hide');
	});

	$('.btn-identity').click(function(){
		hideAll();
		$('.identity').removeClass('hide');
	});

	$('.btn-pub').click(function(){
		hideAll();
		$('.pub').removeClass('hide');
	});

	


});