var es = {
	
	init : function(){
		$.when( remote.ajax(cnf.services.menu),
				$.get('application/views/home/menu.html',function(){}, 'html')
		).done(function(menu_node,menu_template){
				console.log(menu_node[0]);
				$.tmpl( menu_template[0] , menu_node[0]).appendTo('#teste');

		}).fail(function(a,b,c){
			console.log(a);
			console.log(b);
			console.log(c);
		});
	}
}