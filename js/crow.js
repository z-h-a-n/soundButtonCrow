console.log('hello');

$(document).ready(function() {

	soundManager.onload = function () {
	var backgroundAudio = soundManager.createSound ({
		url:'audiofiles/Background18plusCrow.m4a'
	});
	backgroundAudio.play();


	var crow1 = soundManager.createSound({
		url:'audiofiles/crowAlex.m4a'
	});

	$('#crow1').on('click', function() {
		// debugger;

		if ($(this).attr("src") === "img/crow.png") {
			$(this).attr("src", "img/crow1.png");
		} else {
			$(this).attr("src", "img/crow.png");
		}
		


		crow1.play({
			volume:10
		});
		// $(this).attr("src", "img/crow.png");

	})
	

	
}


})