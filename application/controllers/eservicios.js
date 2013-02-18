var es = {
	
	init : function(){
		$.when( remote.ajax(cnf.services.menu),
				$.get('application/views/home/menu.html',function(){}, 'html'),
				$.get('application/views/home/menubig.html',function(){}, 'html')
		).done(function(menu_node,menu_template,menubig_template){
				
				$.tmpl( menu_template[0] , menu_node[0]).appendTo('#navmenu');
				$.tmpl( menubig_template[0] , menu_node[0]).appendTo('#floors-wrapper');
				es.buildAscensor(menu_node[0]);
				
		}).fail(function(a,b,c){
			console.log(a);
			console.log(b);
			console.log(c);
		});
	},
	buildAscensor:function(nodes){
		$.when($.get('application/views/home/floor.html',function(){}, 'html'))
		.done(function(floortpl){
		//console.log(floortpl);
			var ascNames = "Home";
			$.tmpl( floortpl , nodes).appendTo('#floors-wrapper');
			for(var i=0;i<nodes["items"].length;i++){
				ascNames+=(" | "+nodes["items"][i]["name"]);
				//es.renderFloor(nodes["items"][i]["name"]);
			}
			$('#floors-wrapper').ascensor({
				AscensorName:'ascensor',
				ChildType:'section',
				AscensorFloorName:ascNames,
				Time:2000,
				WindowsOn:1,
				//Direction:'chocolate',
			    //AscensorMap:'1|1 & 2|1 & 3|1',
			    Easing:'easeInOutExpo',
			    KeyNavigation:false,
			    Queued:false,
			    height : 420
			});
				//ascensor
			//console.log(ascNames);
			//}
		}).fail(function(a,b,c){
			console.log(a);
			console.log(b);
			console.log(c);
		});
	},
	renderFloor:function(floorName){
		$.when(remote.ajax(cnf.services.blog+floorName),$.get('application/views/home/blog.html',function(){}, 'html'))
		.done(function(blog_node,blogtpl){
			$.tmpl( blogtpl[0] , blog_node[0]).appendTo('.floor.'+clearString(floorName));
		})
		.fail(function(a,b,c){
			console.log(a);
			console.log(b);
			console.log(c);
		});
	},
	menuChange:function(item){
		if(!$(item).hasClass("ascensorLink1")){
			var floorName = $(item).text();
			if($('.floor.'+clearString(floorName)).find("."+cnf.holders.blogCnt).html()=="") es.renderFloor(floorName);
		}
		
	}
	
	
}
function clearString(str){
	return str.replace("-","").replace(".","");
};