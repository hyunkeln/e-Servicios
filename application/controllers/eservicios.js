var firstLoad = true;
var es = {
	init : function(){
		$.when( remote.ajax(cnf.services.menu),
				$.get(cnf.views.menuVw,function(){}, 'html'),
				$.get(cnf.views.menuBigVw,function(){}, 'html')
		).done(function(menu_node,menu_template,menubig_template){
				trackPage("home");
				nav.setVisible(false);
				$.tmpl( menu_template[0] , menu_node[0]).appendTo('#navmenu');
				$.tmpl( menubig_template[0] , menu_node[0]).appendTo('#floors-wrapper');
				
				es.buildAscensor(menu_node[0]);
				es.buildHomeParallax();
				
				
				
		}).fail(function(a,b,c){
			console.log(a);
			console.log(b);
			console.log(c);
		});
	}, 
	buildHomeParallax:function(){
		$('section.menu .parallaxWrapper .parallax-layer').parallax({
				mouseport: $("section.menu")
			},{}, {xparallax: '500px',yparallax:'100px'}, {xparallax: '100px',yparallax:'500px'}, {xparallax: '600px',yparallax:'500px'}, {xparallax: '850px',yparallax:'300px'});

	},
	buildParallax:function(tpl,nodes){
		return 0;
		for(var i=0;i<nodes.length;i++){
			//console.log("section."+clearString(nodes[i].name));
			$.tmpl(tpl,nodes[i]).prependTo("section."+clearString(nodes[i].name));
			$("section."+clearString(nodes[i].name)+' .parallaxWrapper .parallax-layer').parallax({
				mouseport: $("section."+clearString(nodes[i].name))
			},{}, {xparallax: '100px'});
			//console.log($("section."+clearString(nodes[i].name)).html());
		}
		
		//
	},
	buildAscensor:function(nodes){
		$.when( $.get(cnf.views.floorVw,function(){}, 'html'),
			 	$.get(cnf.views.parallaxVw,function(){}, 'html'))
		.done(function(floortpl,parallaxtpl){
		//console.log(parallaxtpl);
			var ascNames = "Home";
			var hash = "";
			if(firstLoad)
				hash = clearString($(location).attr("hash"));	
			$.tmpl( floortpl[0], nodes).appendTo('#floors-wrapper');
			es.buildParallax(parallaxtpl[0] , nodes.items);
			for(var i=0;i<nodes["items"].length;i++)
				ascNames+=(" | "+nodes["items"][i]["name"]);
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
			    height : 561
			});
			$("#ascensorFloor1").backstretch(cnf.images.homeBackground);
			for(var i=0;i<nodes["items"].length;i++)
				$("#ascensorFloor"+(i+2)).backstretch(nodes["items"][i]["background"]);

			if(hash!="" && firstLoad) {
				$('#navmenu').find("."+hash).click();
				firstLoad = false;
			}
		}).fail(function(a,b,c){
			console.log(a);
			console.log(b);
			console.log(c);
		});
	},
	renderFloor:function(floorName){
		var floorNameClr = clearString(floorName);
		es.renderServiceTemplateToHolder(cnf.services.blog+floorName,cnf.views.blogVw,'.floor.'+floorNameClr+" ."+cnf.holders.blogCnt,false,function(){
			
			$('.floor.'+floorNameClr+" ."+cnf.holders.blogCnt+" .blogBody").jScrollPane();
			if(!$('.floor.'+floorNameClr+" ."+cnf.holders.blogCnt+" ul").hasClass("blog-items0")) 
				$('.floor.'+floorNameClr+" ."+cnf.holders.blogCnt+" ul").jcarousel(); 
		});
		
		es.renderServiceTemplateToHolder(cnf.services.premiums+floorName,cnf.views.prmVw,'.floor.'+floorNameClr+" ."+cnf.holders.prmCnt,false,function(){
			if($('.floor.'+floorNameClr+" ."+cnf.holders.prmCnt+" .premiumsWrp").find("div").length==0) { //Definido en premiums.html
				$('.floor.'+floorNameClr+" ."+cnf.holders.prmCnt).remove();
				$('.floor.'+floorNameClr+" ."+cnf.holders.stdCnt).addClass("only");
			}else $('.floor.'+floorNameClr+" ."+cnf.holders.stdCnt).addClass("notonly");
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
			if(typeof func!=="undefined") if(func!=null) func();
		})
		.fail(function(a,b,c){
			console.log(a);
			console.log(b);
			console.log(c);
		});
	},
	menuChange:function(item){
		if(!$(item).hasClass("ascensorLink1")){
			var floorName = $(item).attr("name");

			if($('.floor.'+clearString(floorName)).find("."+cnf.holders.blogCnt).html()==""){ 
				$('.floor.'+clearString(floorName)).find("."+cnf.holders.blogCnt).html("&nbsp;");
				es.renderFloor(floorName);
			}	
			trackPage(floorName);
		}
		
		nav.setVisible(!$(item).hasClass("ascensorLink1"));		
		
	},
	loadStandard:function(nid,dir){
		trackPage("standards/"+nid+top.location.hash);
		if(typeof dir==="undefined") dir=0;
		var floorName = $(".nid"+nid).parents("section").attr("name");
		var holder  = '.floor.'+clearString(floorName)+" .floorStandards";
		var width = $(holder).outerWidth();
		var shouldAnimate = true;
		if(dir==-1) 
			$(holder).animate({left:width});
		else if(dir==1)
			$(holder).animate({left:-width});		
		if(nav.isHomeVisible(floorName)){
			nav.floorToStandard(floorName);
			shouldAnimate = false;
			console.log("Visible el home");
		}
		es.renderServiceTemplateToHolder(cnf.services.node+nid,cnf.views.standardNd,holder,true,function(){
			if(shouldAnimate) 
				$(holder).animate({
					left:-1*parseInt($(holder).css("left"))},
					{duration:1,
					complete:function(){
						$(holder).animate({left:0});
					}
				});
		},dir==0);
	},
	loadPremium:function(nid){
		trackPage("premiums/"+nid+top.location.hash);
		var floorName = $(".nid"+nid).parents("section").attr("name");
		var holder  = '.floor.'+clearString(floorName)+" .floorPremiums";
		if(nav.isHomeVisible(floorName))
			nav.floorToPremium(floorName);
		es.renderServiceTemplateToHolder(cnf.services.products+nid,cnf.views.premiumNd,holder,true,null,true);
	}, 
	loadPremiumProduct:function(nid){
		trackPage("premiumProduct/"+nid+top.location.hash);
		var holder = "#nodeContent";
		es.renderServiceTemplateToHolder(cnf.services.node+nid,cnf.views.premiumProductNd,holder,true,function(){
			$(holder).modal();
		});
	}
}

nav = {
	floorToStandard:function(floorName){
		nav.floorTo(floorName,".floorStandards");
	},
	floorToPremium:function(floorName){
		nav.floorTo(floorName,".floorPremiums");
	},
	isHomeVisible:function(floorName){
		return !$('.floor.'+clearString(floorName)).find(".floorHome").hasClass("hide");
	},
	nextStandard:function(nid,right){
		//trackPage("standards/"+nid+top.location.hash);
		//console.log(nid);
		if(typeof right==="undefined") right=true;
		var objs = $(".nid"+nid).parent().find(".stdObj").each(function(index){
			if($(this).hasClass("nid"+nid)){
				if(right) {
					if($(".nid"+nid).attr("class")==$(".nid"+nid).parent().find(".stdObj").last().attr("class")) click = $(".nid"+nid).parent().find(".stdObj").first().attr("onclick");
					else click = $(this).next().attr("onclick");//
					click = click.replace(")",",1)");  //setear la dirección de la carga
				}
				else {
					if($(".nid"+nid).attr("class")==$(".nid"+nid).parent().find(".stdObj").first().attr("class")) click = $(".nid"+nid).parent().find(".stdObj").last().attr("onclick");
					else click = $(this).prev().attr("onclick");//console.log($(this).prev().attr("class"));
					click = click.replace(")",",-1)");
				}
				eval(click);
			}
		});
		//console.log(objs);
	}, 
	animateInOut:function(holder,holder2,toLeft){
		if(typeof toLeft==="undefined") toLeft=true;
		var multiplier = 3;
		if(toLeft) multiplier*=-1;
		var bounce = 0;
		$(holder).animate({
			left:multiplier*parseInt($(holder).css("width"))},
			{duration:500,
			complete:function(){
				if(bounce==0){ //Como hay 3 objetos con la clase floorContent, hay que impedir el 'rebote'
					bounce = 1;
					$(holder).fadeOut().addClass("hide");
					//var holder2 = $('.floor.'+clearString(floorName)).find(".floorHome");		
					if(toLeft) $(holder2).animate({left:"-"+$(holder2).css("left").replace("-","").replace("px","")},{duration:1});
					else $(holder2).animate({left:$(holder2).css("left").replace("-","").replace("px","")},{duration:1});
					$(holder2).fadeIn().removeClass("hide");
					$(holder2).animate({
						left:0},
						{duration:500,
						complete:function(){
							$(holder2).animate({left:0});
						}
					});
				}
			}
		});
	},
	toFloorHome:function(obj){
		var floorName = $(obj).parents("section").attr("name");
		nav.animateInOut($('.floor.'+clearString(floorName)).find(".floorContent"),$('.floor.'+clearString(floorName)).find(".floorHome"));
		//$('.floor.'+clearString(floorName)).find(".floorContent").fadeOut().addClass("hide");
		//$('.floor.'+clearString(floorName)).find(".floorHome").fadeIn().removeClass("hide");
	},
	floorTo:function(floorName,container){
		//var holder = $('.floor.'+clearString(floorName)).find(".floorContent");
		nav.animateInOut($('.floor.'+clearString(floorName)).find(".floorContent"),$('.floor.'+clearString(floorName)).find(container));
		//$('.floor.'+clearString(floorName)).find(".floorContent").fadeOut().addClass("hide");
		//$('.floor.'+clearString(floorName)).find(container).fadeIn().removeClass("hide");
	},
	setVisible:function(visible){
		if(!visible){
			$("nav").fadeOut("slow");
			$("#remate").fadeOut("slow");
		}else{
			$("nav").fadeIn("slow");
			$("#remate").fadeIn("slow");
		}
	}
}


function clearString(str,chars){
	if(typeof chars==="undefined") chars = "-./#";
	for(var i=0;i<chars.length;i++)
		str= str.replace(chars[i],"");
	return str;
};
 


/*Scroll Top*/
function scrollToTop(object, clase){
   var myObject = $(object).siblings(clase);
   var currentScroll = myObject.scrollTop() - 50;
   myObject.animate({scrollTop : currentScroll},'slow');
}

function scrollToBottom(object, clase){
   var myObject = $(object).siblings(clase);
   var currentScroll = myObject.scrollTop() + 50;
   myObject.animate({scrollTop : currentScroll},'slow');
}

/*Over logos*/
function showRedMask(object){
   //$("#mask_"+object).removeClass('redmask');
   //$(".redmask").animate({opacity : 0.0},'fast');
   //$("#mask_"+object).animate({opacity : 1},'fast');
}
function hideRedMask(object){
   //$("#mask_"+object).addClass('redmask');
}
