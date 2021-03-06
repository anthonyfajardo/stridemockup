$(function(){
// 	var $grid = $('.grid').isotope({
// 		itemSelector: '.grid-item', 
// 		stagger: 30
// 	});

// 	$('.filter-button-group').on('click', '.button', function(){
// 		var filterValue = $(this).attr('data-filter');
// 		$grid.isotope({filter: filterValue});
// 	});

// 	$('.button-group').each(function(i, buttonGroup){
// 		var $buttonGroup = $( buttonGroup );
// 		$buttonGroup.on('click', 'button', function(){
// 			$buttonGroup.find('.is-checked').removeClass('is-checked');
// 			$(this).addClass('is-checked');
// 		});
// 	});

	// init Isotope
	var $grid = $('.grid').isotope({
	  // options
	  itemSelector: '.grid-item',
	  stagger:30
	});


	$grid.imagesLoaded().progress( function() {
		$grid.isotope('layout');
	});
	// filter items on button click
	$('.filter-button-group').on( 'click', '.button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

	
});
