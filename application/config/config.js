host = "http://msn-rd.com";
var cnf = {
	services: {
		path : host+'/eservicios/json/',
		menu : host+'/eservicios/json/menu',
		blog : host+'/eservicios/json/blog/',
		standars: host+'/json/standards/<categor�a>',
		premiums: host+'/json/premiums/<categor�a>',
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

