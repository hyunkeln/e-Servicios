/*


jQuery(document).ready(function() 
{
	$('#parallax .parallax-layer')
	.parallax({
		mouseport: $('#parallax')
	});
});

$('#ascensorBuilding').ascensor({
	AscensorName:'ascensor',
	ChildType:'section',
	AscensorFloorName:'e-Gobierno | e-Banca | e-Shopping',
	Time:2000,
	WindowsOn:1,
	//Direction:'chocolate',
    //AscensorMap:'1|1 & 2|1 & 3|1',
    Easing:'easeInOutExpo',
    KeyNavigation:true,
    Queued:false,
    height : 420
});


 $("#ascensorFloor1").backstretch("http://dl.dropbox.com/u/515046/www/garfield-interior.jpg");

*/
 
$(function() {
		
	es.init();
	
	if (Modernizr.audio) 
	{
		$('#audio_player_holder').append('<audio id="audio_player"></audio>');
		$('#audio_player_holder').append('<div id="audio_controls"></div>');
		
		if (Modernizr.audio.mp3) {
		    $("#audio_player").val("sounds/eservicios_audio.mp3");
		}
		else if (Modernizr.audio.ogg) {
		    $("#audio_player").val("sounds/eservicios_audio.ogg");
		}
		else if (Modernizr.audio.m4a) {
		    $("#audio_player").val("sounds/eservicios_audio.m4a");
		}
		$("#audio_player").attr('autoplay',true);
		
	}
	else 
	{
		console.log('NO se puede usar audio');
		$("#HTML5Audio").hide();
	}
});


