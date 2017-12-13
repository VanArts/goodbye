$(document).ready(function() {
	$('#fullpageWeb12').fullpage({
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['home', 'Haruna','Carly', 'Tak', 'Tom', 'Nishanth'
	, 'Sandy', 'Nina', 'Peter', 'Coleman', 'Sachiko'],

	afterLoad: function(anchorLink, index){
		var loadedSection = $(this);

		//tak section
		if(index == 4){
			$('#tak').find('.face').addClass('jackInTheBox').css('opacity',1);
			setTimeout(function(){
				$('#tak').find('.bubble').addClass('jackInTheBox').css('opacity',1);
			}, 500);
		}
	}
	});

});
