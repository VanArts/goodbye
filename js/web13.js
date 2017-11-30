$(document).ready(function() {
	$('#fullpageWeb13').fullpage({
		anchors:['homePage', 'blue','red','green'],
		navigation: true,
		//showActiveTooltip: true,
		navigationPosition: 'right',
		navigationTooltips: ['home', 'First page','Second page','Third page'],
	});
});
