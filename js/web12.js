$(document).ready(function() {
	$('#fullpageWeb12').fullpage({
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['home', 'Haruna','Tak','Estefania', 'Carly', 'Tom', 'Nishanth'
	, 'Sandy', 'Nina', 'Peter', 'Coleman', 'Sachiko', 'Michael'],

	afterLoad: function(anchorLink, index){
		var loadedSection = $(this);

		//tak section
		if(index == 3){
			$('#tak').find('.face').addClass('jackInTheBox').css('opacity',1);
			setTimeout(function(){
				$('#tak').find('.bubble').addClass('jackInTheBox').css('opacity',1);
			}, 500);
		}


	}
	});

});
