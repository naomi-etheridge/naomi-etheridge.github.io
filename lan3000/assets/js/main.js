// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    $('.btn-books').click(function() {
    	$('.panel').removeClass('slide-in');
  		$('.books').addClass('slide-in');
	});

	$('.btn-about').click(function() {
    	$('.panel').removeClass('slide-in');
  		$('.about').addClass('slide-in');
	});

	$('.btn-archive').click(function() {
    	$('.panel').removeClass('slide-in');
  		$('.archive').addClass('slide-in');
	});

	$('.btn-challenge').click(function() {
    	$('.panel').removeClass('slide-in');
  		$('.challenge').addClass('slide-in');
	});

	$('.btn-suggestion').click(function() {
    	$('.panel').removeClass('slide-in');
  		$('.suggestion').addClass('slide-in');
	});

});

