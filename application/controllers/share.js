var share = {
	
	floors : {
		'e-Servicios' :{
			'name':'name',
			'link':top.location.protocol+'//'+top.location.hostname+top.location.pathname+'#/Home',
			'picture': top.location.protocol+'//'+top.location.hostname+top.location.pathname+'/e-Servcios.png',
			'caption': 'caption',
			'description' : 'description',
			'short_link' : 'http://short_link.com' 
		},
		'e-Banca' :{
			'name':'name',
			'link':top.location.protocol+'//'+top.location.hostname+top.location.pathname+'#/e-Banca',
			'picture': top.location.protocol+'//'+top.location.hostname+top.location.pathname+'/e-Banca.png',
			'caption': 'caption',
			'description' : 'description',
			'short_link' : 'http://short_link.com' 
		},
		'e-Gobierno' :{
			'name':'name',
			'link':top.location.protocol+'//'+top.location.hostname+top.location.pathname+'#/e-Gobierno',
			'picture': top.location.protocol+'//'+top.location.hostname+top.location.pathname+'/e-Gobierno.png',
			'caption': 'caption',
			'description' : 'description',
			'short_link' : 'http://short_link.com'
		},
		'e-Shopping' : {
			'name':'name',
			'link':top.location.protocol+'//'+top.location.hostname+top.location.pathname+'#/e-Shopping',
			'picture': top.location.protocol+'//'+top.location.hostname+top.location.pathname+'/e-Shopping.png',
			'caption': 'caption',
			'description' : 'description',
			'short_link' : 'http://short_link.com'
		}
		
	},
	
	fb : {
		floor :function(floor){
			if(typeof share.floors[floor]!=="undefined")
			{
				var data_floor = share.floors[floor];
				share.ui(data_floor.name , data_floor.link , data_floor.picture , data_floor.caption , data_floor.description);
				return true;
			}
			else
			{
				$.error('No existe el servicio');
			}
		},
		item : function (fb_name , fb_link , fb_picture , fb_caption , fb_description){
			share.ui(fb_name , fb_link , fb_picture , fb_caption , fb_description);
			return true;
		}
	},
	
	tw : {
		floor :function(floor){
			if(typeof share.floors[floor]!=="undefined")
			{
				var data_floor = share.floors[floor];
				share.tw_popup(data_floor.description , data_floor.short_link);
				return true;
			}
			else
			{
				$.error('No existe el servicio');
			}
		},
		item : function (tw_description,tw_link)
		{
			share.tw_popup(tw_description,tw_link);
			return true;
		}	
	},
	
	tw_popup : function(tw_description , tw_link)
	{
		var posicion_x;
		var posicion_y;
		var share_link = 'https://twitter.com/intent/tweet?url='+tw_link+'&text='+tw_description+' '+tw_link;
		posicion_x=(screen.width/2)-(550/2);
		posicion_y=(screen.height/2)-(520/2);
		window.open(share_link,'popup_twitter', "width=550,height=520,menubar=0,toolbar=0,directories=0,scrollbars=no,resizable=no,left="+posicion_x+",top="+posicion_y+""); 	
	},
	
	ui : function(fb_name , fb_link , fb_picture , fb_caption , fb_description){
	
		if(fb_name!=undefined && fb_link!=undefined && fb_picture!=undefined && fb_caption!=undefined && fb_description!=undefined)
		{
			FB.ui(
			  {
			    method: 'feed',
			    name: fb_name,
			    link: fb_link,
			    picture: fb_picture,
			    caption: fb_caption,
			    description: fb_description
			  },
			  function(response) 
			  {
			    if (response && response.post_id) 
			    {
			    
			    } 
			    else
			    {
			      $.error('No se pudo publicar');
			    }
			  }
			);	
		}
		else
		{
			$.error('Faltan parámetros');
		}
	}
}