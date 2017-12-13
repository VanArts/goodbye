$(document).ready(function() {
	$('#fullpageWeb13').fullpage({
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['home', 'Renzo','Pavithira','Sahil', 'Kunika', 'Gosia', 'Ashley'],

		afterLoad: function(anchorLink, index){
			var loadedSection = $(this);

			//kunika section
			if(index == 5){
				console.log("hi");
				$('body').keyup(function(event) {
					const code = event.which;
					if(code === 74) {
						console.log('j');
						document.getElementById('console-img').style.display = "block";
					}
				});

			}
		}

	});

});
function gosiafuncImgChange() {
		document.getElementById("gosia-container").style.backgroundImage = "url('img/gosia/ireland.jpg')";
		var message = document.getElementById("gosia-message")
		message.style.color = "#009A49";
		message.style.fontSize = "2.5rem"
		message.innerHTML = "Wherever you go and whatever you do, <br>may the luck of the Irish be there with you!";
}
//changes back when shamrock is no longer in hover state
function gosiafuncImgReturn() {
		document.getElementById("gosia-container").style.backgroundImage = "url('img/gosia/van.jpg')";
		var message = document.getElementById("gosia-message")
		message.style.color = "crimson";
		message.style.fontSize = "1.5rem"
		message.innerHTML = "I'm happy that I got to learn coding from you - it'll be a lot easier to build on the knowledge and skills with your base.<br>I hope you will resume teaching some day - you were the best :)<br><span> Gosia</span>";
}
