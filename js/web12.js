$(document).ready(function() {
	$('#fullpageWeb12').fullpage({
		anchors:['homePage', 'harunaPage','takPage','fourthPage'],
		navigation: true,
		//showActiveTooltip: true,
		navigationPosition: 'right',
		navigationTooltips: ['home', 'haruna','tak','fourthPage'],
	});
});
