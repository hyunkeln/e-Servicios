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
		$('#audio_player_holder').append('<div id="audio_controls">\
										  	<div id="play_button" class="player_hide" onclick="document.getElementById(\'audio_player\').play();$(this).addClass(\'player_hide\');$(\'#pause_button\').removeClass(\'player_hide\');"></div>\
										  	<div id="pause_button" onclick="document.getElementById(\'audio_player\').pause();$(this).addClass(\'player_hide\');$(\'#play_button\').removeClass(\'player_hide\');"></div>\
										  </div>');
		
		if (Modernizr.audio.mp3) {
		    $("#audio_player").attr('src',"assets/sounds/eservicios_audio.mp3");
		}
		else if (Modernizr.audio.ogg) {
		    $("#audio_player").attr('src',"assets/sounds/eservicios_audio.ogg");
		}
		else if (Modernizr.audio.m4a) {
		    $("#audio_player").attr('src',"assets/sounds/eservicios_audio.m4a");
		}
		$("#audio_player").attr('autoplay',true);
		$("#audio_player").attr('loop',true);
	}
	else 
	{
		$("#audio_player_holder").remove();
	}
});


function trackPage(call){
	//console.log("Track page: " + call);
}