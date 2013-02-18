host = "http://msn-rd.com";
var cnf = {
	services: {
		path : host+'/eservicios/json/',
		menu : host+'/eservicios/json/menu',
		blog : host+'/eservicios/json/blog/',
		standars: host+'/json/standards/<categoría>',
		premiums: host+'/json/premiums/<categoría>',
		productos: host+'/json/premiums/productos/<nid>',
		node: host+'/json/node/<nid>'
	},
	holders:{
		blogCnt: "blogContent",
		standardCnt: "stdContent",
		premiumCnt: "prmContent",
		nodeCnt: "nodeContent"
	}
}

