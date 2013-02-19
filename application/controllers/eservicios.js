var es = {
	
	init : function(){
		$.when( remote.ajax(cnf.services.menu),
				$.get(cnf.views.menuVw,function(){}, 'html'),
				$.get(cnf.views.menuBigVw,function(){}, 'html')
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
		$.when($.get(cnf.views.floorVw,function(){}, 'html'))
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
		var floorNameClr = clearString(floorName);
		es.renderServiceTemplateToHolder(cnf.services.blog+floorName,cnf.views.blogVw,'.floor.'+floorNameClr+" ."+cnf.holders.blogCnt,function(){$('.floor.'+floorNameClr+" ."+cnf.holders.blogCnt).jScrollPane()});
		es.renderServiceTemplateToHolder(cnf.services.premiums+floorName,cnf.views.prmVw,'.floor.'+floorNameClr+" ."+cnf.holders.prmCnt,function(){
			if($('.floor.'+floorNameClr+" ."+cnf.holders.prmCnt+" .premiumsWrp").find("div").length==0) {
				$('.floor.'+floorNameClr+" ."+cnf.holders.prmCnt).remove();
				$('.floor.'+floorNameClr+" ."+cnf.holders.stdCnt).addClass("only");
			}
		}); 
		es.renderServiceTemplateToHolder(cnf.services.standards+floorName,cnf.views.stdVw,'.floor.'+floorNameClr+" ."+cnf.holders.stdCnt);
		
	},
	renderServiceTemplateToHolder:function(srv,tpl,holder,func){
		$.when(remote.ajax(srv),$.get(tpl,function(){}, 'html'))
		.done(function(content,tpl){
			$.tmpl(tpl[0] , content[0]).appendTo(holder);
			if(typeof func!=="undefined") func();
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
			if($('.floor.'+clearString(floorName)).find("."+cnf.holders.blogCnt).html()==""){ 
				$('.floor.'+clearString(floorName)).find("."+cnf.holders.blogCnt).html("&nbsp;");
				es.renderFloor(floorName);
			}
			
		}
		
	}
	
	
}
function clearString(str,chars){
	if(typeof chars==="undefined") chars = "-./";
	for(var i=0;i<chars.length;i++)
		str= str.replace(chars[i],"");
	return str;
};