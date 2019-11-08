$( document ).ready(function() {
    

$( ".title-1" ).click(function() {
  $( ".toggle-1" ).slideToggle( "slow" );
});

$( ".title-2" ).click(function() {
  $( ".toggle-2" ).slideToggle( "slow" );
});

$( ".title-3" ).click(function() {
  $( ".toggle-3" ).slideToggle( "slow" );
});

$( ".title-4" ).click(function() {
  $( ".toggle-4" ).slideToggle( "slow" );
});

$( ".title-5" ).click(function() {
  $( ".toggle-5" ).slideToggle( "slow" );
});

$( ".title-6" ).click(function() {
  $( ".toggle-6" ).slideToggle( "slow" );
});

});

$( document ).ready(function() {
    console.log( "ready!" );

$(".btn-about").click(function() {
    	$(".panel").removeClass("slide-in");
  		$(".about").addClass("slide-in");
	});

$(".btn-home").click(function() {
    	$(".panel").removeClass("slide-in");
  		$(".home").addClass("slide-in");
	});

});