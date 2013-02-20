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
		es.renderServiceTemplateToHolder(cnf.services.blog+floorName,cnf.views.blogVw,'.floor.'+floorNameClr+" ."+cnf.holders.blogCnt,false,function(){$('.floor.'+floorNameClr+" ."+cnf.holders.blogCnt).jScrollPane()});
		es.renderServiceTemplateToHolder(cnf.services.premiums+floorName,cnf.views.prmVw,'.floor.'+floorNameClr+" ."+cnf.holders.prmCnt,false,function(){
			if($('.floor.'+floorNameClr+" ."+cnf.holders.prmCnt+" .premiumsWrp").find("div").length==0) { //Definido en premiums.html
				$('.floor.'+floorNameClr+" ."+cnf.holders.prmCnt).remove();
				$('.floor.'+floorNameClr+" ."+cnf.holders.stdCnt).addClass("only");
			}
		}); 
		es.renderServiceTemplateToHolder(cnf.services.standards+floorName,cnf.views.stdVw,'.floor.'+floorNameClr+" ."+cnf.holders.stdCnt);
		
	},
	renderServiceTemplateToHolder:function(srv,tpl,holder,empty,func,fadeOut){
		if(typeof empty==="undefined") empty = false;
		if(typeof fadeOut==="undefined") fadeOut = false;
		if(fadeOut) $(holder).hide();
		$.when(remote.ajax(srv),$.get(tpl,function(){}, 'html'))
		.done(function(content,tpl){
			if(empty) $(holder).empty();
			$.tmpl(tpl[0] , content[0]).appendTo(holder);
			$(holder).fadeIn();
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
		
	},
	loadStandard:function(nid){
		var floorName = $(".nid"+nid).parents("section").attr("name");
		if(nav.isHomeVisible(floorName))
			nav.floorToStandard(floorName);
		es.renderServiceTemplateToHolder(cnf.services.node+nid,cnf.views.standardNd,'.floor.'+clearString(floorName)+" .floorStandards",true,function(){
			//$(cnf.holders.nodeCnt).modal();
			console.log("Cargando "+nid);
		},true);
	}
	
	
}

nav = {
	floorToStandard:function(floorName){
		$('.floor.'+clearString(floorName)).find(".floorContent").fadeOut().addClass("hide");
		$('.floor.'+clearString(floorName)).find(".floorStandards").fadeIn().removeClass("hide");
	},
	toFloorHome:function(obj){
		var floorName = $(obj).parents("section").attr("name");
		$('.floor.'+clearString(floorName)).find(".floorContent").fadeOut().addClass("hide");
		$('.floor.'+clearString(floorName)).find(".floorHome").fadeIn().removeClass("hide");
	},
	isHomeVisible:function(floorName){
		return !$('.floor.'+clearString(floorName)).find(".floorHome").hasClass("hide");
	},
	nextStandard:function(nid,right){
		console.log(nid);
		if(typeof right==="undefined") right=true;
		var objs = $(".nid"+nid).parent().find(".stdObj").each(function(index){
			if($(this).hasClass("nid"+nid)){
				if(right) {
					if($(".nid"+nid).attr("class")==$(".nid"+nid).parent().find(".stdObj").last().attr("class")) $(".nid"+nid).parent().find(".stdObj").first().click();
					else $(this).next().click();//console.log($(this).next().attr("class"));
				}
				else {
					if($(".nid"+nid).attr("class")==$(".nid"+nid).parent().find(".stdObj").first().attr("class")) $(".nid"+nid).parent().find(".stdObj").last().click();
					$(this).prev().click();//console.log($(this).prev().attr("class"));
				}
			}
		});
		console.log(objs);
	}
}


function clearString(str,chars){
	if(typeof chars==="undefined") chars = "-./";
	for(var i=0;i<chars.length;i++)
		str= str.replace(chars[i],"");
	return str;
};